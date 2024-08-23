<?php

namespace App\Enums;

use App\Traits\Enum\GetEnumValues;

enum RewardTypeEnum: string
{
    use GetEnumValues;

    case Appreciation = 'appreciation';
    case Certificate = 'certificate';
    case Diploma = 'diploma';
    case Qualification = 'qualification';
}
