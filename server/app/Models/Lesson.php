<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * class Lesson
 *
 * @property int $id - Идентификатор
 * @property string $name - Название
 * @property string $description - Описание
 * @property string $content - Контент
 * @property string $file - Файл
 * @property int $order - Позиция
 * @property int $course_id - Идентификатор курса
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
        'course_id',
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

    public function characteristics(): HasMany
    {
        return $this->hasMany(Characteristic::class);
    }
}
