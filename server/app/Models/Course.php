<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * class Course
 *
 * @property string $name Название
 * @property int $order Позиция
 */
class Course extends Model
{
    protected $fillable = [
        'name',
        'order',
    ];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function (self $model) {
            $maxOrder = Course::query()->max('order');
            $model->order = $maxOrder ? ++$maxOrder : 1;
        });
    }
}
