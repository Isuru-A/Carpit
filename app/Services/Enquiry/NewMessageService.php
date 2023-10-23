<?php

namespace App\Services\Enquiry;

use App\Repositories\EnquiryRepository;
use App\Repositories\MessageRepository;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class NewMessageService
{
    /**
     * @var MessageRepository
     */
    private MessageRepository $messageRepository;

    /**
     * @var EnquiryRepository
     */
    private EnquiryRepository $enquiryRepository;

    public function __construct(
        MessageRepository $messageRepository,
        EnquiryRepository $enquiryRepository
    )
    {
        $this->messageRepository = $messageRepository;
        $this->enquiryRepository = $enquiryRepository;
    }

    /**
     * @throws Exception
     */
    public function handle(Request $request, array $data): Model
    {
        /**
         * If a user is logged in, add their data to the message
         */
        if ($user = $request->user()) {
            $data = [
                ...$data,
                'uuid' => $user->uuid,
                'admin' => $user->admin,
            ];
        }

        /*
         * Get the enquiry linked to the message
         */
        $enquiry = $this->enquiryRepository->get($data['enquiry_ud']);

        /**
         * Throw an exception if the enquiry is archived
         */
        if (!$enquiry->archived) {
            throw new Exception('Cannot send a message to archived enquiry');
        }

        /**
         * If the enquiry that the message is linked to is not already marked as active
         * then mark it as active
         */
        if (!$enquiry->active) {
            $this->enquiryRepository->update($enquiry->id, [
                'active' => 1
            ]);
        }

        /**
         * Create new message and return it
         */
        return $this->messageRepository->create($data, true);
    }
}
