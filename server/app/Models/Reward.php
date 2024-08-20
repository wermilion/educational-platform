<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * class Reward
 *
 * @property int id - Идентификатор
 * @property string $name - Название
 * @property string $type - Тип
 * @property string $description - Описание
 * @property string $image - Изображение
 */
class Reward extends Model
{
    protected $fillable = [
        'name',
        'type',
        'description',
        'image',
    ];
}
