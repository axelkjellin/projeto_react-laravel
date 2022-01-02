<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactMail;
use App\Repositories\Contact\Contracts\ContactRepositoryInterface;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    private $contactRepositoryInterface;

    public function __construct(ContactRepositoryInterface $contactRepositoryInterface)
    {
        $this->contactRepositoryInterface = $contactRepositoryInterface;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreContactRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreContactRequest $request)
    {
        $contact = $this->contactRepositoryInterface->save($request->get('contact'));
        Mail::to('test2bchosen@gmail.com')->send(new ContactMail($contact));

        return response()->json($contact);
    }
}
