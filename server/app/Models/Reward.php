<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int id
 * @property string $title
 * @property string $type
 * @property string $description
 * @property string $image
 */
class Reward extends Model
{
    protected $fillable = [
        'title',
        'type',
        'description',
        'image',
    ];
}
