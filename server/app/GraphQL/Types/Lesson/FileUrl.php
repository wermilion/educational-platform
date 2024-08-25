<?php

declare(strict_types=1);

namespace App\GraphQL\Types\Lesson;

use App\Models\Lesson;
use Illuminate\Support\Facades\Storage;

final readonly class FileUrl
{
    public function __invoke(Lesson $lesson, array $args): ?string
    {
        return $lesson->file ? Storage::url($lesson->file) : null;
    }
}
