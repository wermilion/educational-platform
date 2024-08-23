<?php

namespace App\Traits\Enum;

use Illuminate\Support\Arr;

trait GetEnumValues
{
    public static function getValues(): array
    {
        return Arr::pluck(self::cases(), 'name', 'value');
    }

    public static function getTranslatedValues(): array
    {
        return array_combine(
            array_column(self::cases(), 'value'),
            array_map(function ($case) {
                return __('enum.' . $case->value);
            }, self::cases())
        );
    }
}
