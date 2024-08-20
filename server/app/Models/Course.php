<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * class Course
 *
 * @property int $id - Идентификатор
 * @property string $name - Название
 * @property int $order - Позиция
 *
 * @property-read Lesson[] $lessons - Уроки
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

    // RELATIONS

    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class);
    }
}
