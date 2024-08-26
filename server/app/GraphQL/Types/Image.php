<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

final readonly class Image
{
    public function __invoke(Model $model, array $args): ?string
    {
        return $model->image ? Storage::url($model->image) : null;
    }
}
