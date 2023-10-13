<?php

namespace App\Http\Controllers\Admin;

use App\Contracts\Repository\EnquiryRepositoryInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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

    public function get(Request $request, $id)
    {
        return $this->enquiryRepository->get($id);
    }
}
