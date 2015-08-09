<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->enum('gender',['Laki-laki', 'Perempuan']);
            $table->dateTime('dob');
            $table->integer('age');
            $table->string('city');
            $table->string('district');
            $table->text('address');
            $table->string('postalcode');
            $table->enum('disease',['Malaria', 'Gastro Enteritis', 'Kholera/Cholera', 'Kusta/Leprosy', 'TBC/Tuberculosis', 'Demam Berdarah DHF', 'Radang Tenggorokan Dipteria']);
            $table->string('latitude');
            $table->string('longitude');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('patients');
    }
}
