<?php

namespace App\Repositories;

use App\Contracts\Repository\MessageRepositoryInterface;
use App\Models\Message;

class MessageRepository extends Repository implements MessageRepositoryInterface
{

    public function model(): string
    {
        return Message::class;
    }
}
