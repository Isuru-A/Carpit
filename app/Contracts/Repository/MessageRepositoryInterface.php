<?php

namespace App\Contracts\Repository;

use Illuminate\Database\Eloquent\Collection;

interface MessageRepositoryInterface extends RepositoryInterface
{
    /**
     * Get all the messages associated with an enquiry by ID
     *
     * @param int $enquiryId
     * @return Collection
     */
    public function getEnquiryMessages(int $enquiryId): Collection;
}
