<?php

namespace App\Repositories;

use App\Models\Enquiry;

class EnquiryRepository extends Repository implements \App\Contracts\Repository\EnquiryRepositoryInterface
{

    public function model(): string
    {
        return Enquiry::class;
    }
}
