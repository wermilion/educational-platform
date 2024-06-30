<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $file
 */
class Lesson extends Model
{
    protected $fillable = [
        'title',
        'description',
        'file',
    ];
}
