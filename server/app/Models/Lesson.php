<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * class Lesson
 *
 * @property int $id - Идентификатор
 * @property string $name - Название
 * @property string $description - Описание
 * @property string $content - Контент
 * @property string $file - Файл
 * @property int $order - Позиция
 *
 * @property-read Course $course - Курс
 */
class Lesson extends Model
{
    protected $fillable = [
        'name',
        'description',
        'content',
        'file',
        'order',
    ];

    protected static function boot(): void
    {
        parent::boot();

        static::creating(function (self $model) {
            $maxOrder = Lesson::query()->max('order');
            $model->order = $maxOrder ? ++$maxOrder : 1;
        });
    }

    // RELATIONS

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
}
