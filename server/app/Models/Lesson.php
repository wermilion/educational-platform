<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * class Lesson
 *
 * @property int $id Идентификатор
 * @property string $name Название
 * @property string $content Контент
 * @property string $file Файл
 * @property int $order Позиция
 */
class Lesson extends Model
{
    protected $fillable = [
        'name',
        'content',
        'file',
        'order',
    ];
}
