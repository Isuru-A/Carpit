<?php

namespace App\Http\Controllers\Admin;

use App\Contracts\Repository\EnquiryRepositoryInterface;
use App\Http\Controllers\Controller;
use Exception;
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

    /**
     * Mark enquiry as active. Used for enquiries without a registered user
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function accept(Request $request, $id): JsonResponse
    {
        try {
            $this->enquiryRepository->update($id, [
                'active' => 1
            ]);
        } catch (Exception $e) {
            return new JsonResponse([
                'success' => false
            ], 500);
        }

        return new JsonResponse([
            'success' => true
        ]);
    }
}
