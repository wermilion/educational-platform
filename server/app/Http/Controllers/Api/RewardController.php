<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RewardResource;
use App\Models\Reward;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class RewardController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return RewardResource::collection(Reward::all());
    }

    public function getByType(Request $request): AnonymousResourceCollection
    {
        return RewardResource::collection(Reward::query()->where('type', $request->type)->get());
    }
}
