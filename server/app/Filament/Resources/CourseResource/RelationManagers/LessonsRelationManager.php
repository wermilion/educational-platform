<?php

namespace App\Filament\Resources\CourseResource\RelationManagers;

use Closure;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class LessonsRelationManager extends RelationManager
{
    protected static string $relationship = 'lessons';

    protected static ?string $modelLabel = 'Урок';

    protected static ?string $pluralModelLabel = 'Уроки';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Название')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->label('Описание')
                    ->required()
                    ->rules([
                        function () {
                            return function (string $attribute, $value, Closure $fail) {
                                if (mb_strlen(strip_tags($value)) >= 1000) {
                                    $fail('Поле "Контент" должно быть не более 1000 символов');
                                }
                            };
                        },
                    ])
                    ->columnSpanFull(),
                Forms\Components\RichEditor::make('content')
                    ->label('Контент')
                    ->required()
                    ->fileAttachmentsDirectory('attachments')
                    ->maxLength(1000)
                    ->columnSpanFull(),
                Forms\Components\FileUpload::make('file')
                    ->label('Вложение')
                    ->disk('public')
                    ->directory('attachments')
                    ->acceptedFileTypes(['application/pdf'])
                    ->columnSpanFull(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->heading('Уроки')
            ->recordTitleAttribute('name')
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Название'),
            ])
            ->defaultSort('order')
            ->reorderable('order')
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
