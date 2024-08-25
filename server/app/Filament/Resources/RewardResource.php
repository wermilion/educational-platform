<?php

namespace App\Filament\Resources;

use App\Enums\RewardTypeEnum;
use App\Filament\Resources\RewardResource\Pages;
use App\Models\Reward;
use Exception;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class RewardResource extends Resource
{
    protected static ?string $model = Reward::class;

    protected static ?string $modelLabel = 'Награда';

    protected static ?string $pluralModelLabel = 'Награды';

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Заголовок')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('type')
                    ->label('Тип')
                    ->native(false)
                    ->required()
                    ->options(RewardTypeEnum::getTranslatedValues()),
                Forms\Components\Textarea::make('description')
                    ->label('Описание')
                    ->columnSpanFull(),
                Forms\Components\FileUpload::make('image')
                    ->label('Изображение')
                    ->image()
                    ->directory('rewards')
                    ->required()
                    ->columnSpanFull(),
            ]);
    }

    /**
     * @throws Exception
     */
    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Заголовок')
                    ->searchable(),
                Tables\Columns\TextColumn::make('type')
                    ->label('Тип')
                    ->formatStateUsing(function (string $state) {
                        return __('enum.' . $state);
                    })
                    ->searchable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->label('Тип')
                    ->native(false)
                    ->options(RewardTypeEnum::getTranslatedValues()),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListRewards::route('/'),
            'create' => Pages\CreateReward::route('/create'),
            'edit' => Pages\EditReward::route('/{record}/edit'),
        ];
    }
}
