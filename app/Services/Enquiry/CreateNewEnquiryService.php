<?php

namespace App\Services\Enquiry;

use App\Contracts\Repository\EnquiryRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Mockery\Exception;

class CreateNewEnquiryService
{
    /**
     * @var EnquiryRepositoryInterface
     */
    private EnquiryRepositoryInterface $repository;

    public function __construct(
        EnquiryRepositoryInterface $repository
    )
    {
        $this->repository = $repository;
    }

    public function handle(Request $request, array $enquiry): void
    {
        /*
         * Validate enquiry data
         * If this method is called via a controller, then the data should
         * already be validated. This validation is very light.
         */
        $validator = Validator::make($enquiry, [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'service' => 'required',
            'enquiry' => 'required'
        ]);

        if ($validator->fails()) {
            throw new exception($validator->errors());
        }

        /*
         * Create new enquiry
         */
        $this->repository->create([
            ...$enquiry,
            'user_uuid' => $request->user() ? $request->user()->uuid : null,
        ], true);
    }
}
