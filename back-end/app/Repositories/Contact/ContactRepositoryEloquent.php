<?php

namespace App\Repositories\Contact;

use App\Models\Contact;
use App\Repositories\Contact\Contracts\ContactRepositoryInterface;

class ContactRepositoryEloquent implements ContactRepositoryInterface
{
	private $model;

	public function __construct(Contact $model)
	{
		$this->model = $model;
	}

	public function save($request)
    {
        $contact = $this->model->create($request);
        $contact->save();
        return $contact;
    }
}
