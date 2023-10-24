<?php

namespace App\Http\Controllers;

use App\Contracts\Repository\MessageRepositoryInterface;
use App\Services\Enquiry\NewMessageService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
    /**
     * @var NewMessageService
     */
    private NewMessageService $newMessageService;

    /**
     * @var MessageRepositoryInterface
     */
    private MessageRepositoryInterface $messageRepository;

    public function __construct(
        NewMessageService          $newMessageService,
        MessageRepositoryInterface $messageRepository,
    )
    {
        $this->newMessageService = $newMessageService;
        $this->messageRepository = $messageRepository;
    }

    /**
     * Handle request to send a new message
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function create(Request $request, $id): JsonResponse
    {
        /**
         * Validate request
         */
        $validator = Validator::make($request->all(), [
            'message' => 'required'
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            /*
             * Attempt to create new message
             */
            $message = $this->newMessageService->handle($request, [
                'enquiry_id' => $id,
                'message' => $request->input('message')
            ]);
        } catch (Exception $e) {
            return new JsonResponse([
                'success' => false,
                'error' => $e->getMessage()
            ], 400);
        }

        return new JsonResponse([
            'success' => true,
            'data' => [
                'message' => $message
            ]
        ]);
    }

    public function get(Request $request, $id): \Illuminate\Database\Eloquent\Collection
    {
        return $this->messageRepository->getEnquiryMessages($id);
    }
}
