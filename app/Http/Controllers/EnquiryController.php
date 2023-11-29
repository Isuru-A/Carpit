<?php

namespace App\Http\Controllers;

use App\Services\Enquiry\CreateNewEnquiryService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EnquiryController extends Controller
{
    /**
     * @var CreateNewEnquiryService
     */
    private CreateNewEnquiryService $createNewEnquiryService;

    public function __construct(
        CreateNewEnquiryService $createNewEnquiryService
    )
    {
        $this->createNewEnquiryService = $createNewEnquiryService;
    }

    public function create(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email:rfc,dns',
            'phone' => 'required|min:4|max:15',
            'service' => 'required',
            'enquiry' => 'required|min:100'
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $this->createNewEnquiryService->handle($request, $request->all());
        } catch (Exception $e) {
            return new JsonResponse([
                'success' => false,
                'errors' => $e
            ], 400);
        }

        return new JsonResponse([
            'success' => true
        ]);
    }
}
