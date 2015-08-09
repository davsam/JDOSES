<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    
    protected $table = 'patients';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'gender', 'age', 'dob', 'city', 'district', 'address', 'postalcode', 'disease','latitude','longitude'];

}
