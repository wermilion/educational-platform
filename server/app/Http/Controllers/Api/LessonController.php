<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LessonResource;
use App\Models\Lesson;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class LessonController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return LessonResource::collection(Lesson::all());
    }

    public function get(int $id): LessonResource
    {
        return new LessonResource(Lesson::query()->findOrFail($id));
    }
}
