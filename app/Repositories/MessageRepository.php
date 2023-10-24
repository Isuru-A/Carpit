<?php

namespace App\Repositories;

use App\Contracts\Repository\MessageRepositoryInterface;
use App\Models\Message;
use Illuminate\Database\Eloquent\Collection;

class MessageRepository extends Repository implements MessageRepositoryInterface
{

    public function model(): string
    {
        return Message::class;
    }

    public function getEnquiryMessages(int $enquiryId): Collection
    {
        return $this->getBuilder()->where('enquiry_id', $enquiryId)->get();
    }
}
