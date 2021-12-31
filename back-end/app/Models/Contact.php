<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    /**
     * tabela da model
     *
     * @var string
     */
    protected $table = 'contacts';

    /**
     * id é auto incrementada
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * timestamp
     *
     * @var bool
     */
    public $timestamps = true;

    private $name;
    private $email;
    private $phone;
    private $message;

}
