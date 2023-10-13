<?php

namespace App\Http\Controllers\Admin;

use App\Contracts\Repository\EnquiryRepositoryInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminEnquiryController extends Controller
{
    /**
     * @var EnquiryRepositoryInterface
     */
    private EnquiryRepositoryInterface $enquiryRepository;

    public function __construct(
        EnquiryRepositoryInterface $enquiryRepository
    )
    {
        $this->enquiryRepository = $enquiryRepository;
    }

    public function index(Request $request): object
    {
        return $this->enquiryRepository->index();
    }
}
