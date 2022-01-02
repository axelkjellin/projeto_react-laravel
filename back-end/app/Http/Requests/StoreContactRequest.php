<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'contact.name' => 'required',
            'contact.email' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'contact.name.required' => 'O campo nome é obrigatório',
            'contact.email.required' => 'O campo e-mail é obrigatório'
        ];
    }
}
