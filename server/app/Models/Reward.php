<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * class Reward
 *
 * @property int id
 * @property string $name
 * @property string $type
 * @property string $description
 * @property string $image
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
