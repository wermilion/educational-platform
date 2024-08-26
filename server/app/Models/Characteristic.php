<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * model Characteristic
 *
 * @property int $id - Идентификатор
 * @property string $name - Название
 * @property string $value - Значение
 */
class Characteristic extends Model
{
    protected $fillable = [
        'name',
        'value',
    ];
}
