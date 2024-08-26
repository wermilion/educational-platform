<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LessonResource\Pages;
use App\Filament\Resources\LessonResource\RelationManagers\CharacteristicsRelationManager;
use App\Models\Lesson;
use Closure;
use Exception;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class LessonResource extends Resource
{
    protected static ?string $model = Lesson::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationLabel = 'Уроки';

    protected static ?string $breadcrumb = 'Урок';

    protected static ?string $label = 'Урок';

    protected static ?string $pluralLabel = 'Уроки';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Название')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('course_id')
                    ->label('Курс')
                    ->native(false)
                    ->required()
                    ->relationship('course', 'name'),
                Forms\Components\Textarea::make('description')
                    ->label('Описание')
                    ->required()
                    ->maxLength(50)
                    ->columnSpanFull(),
                Forms\Components\RichEditor::make('content')
                    ->label('Контент')
                    ->required()
                    ->fileAttachmentsDirectory('attachments')
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
                Forms\Components\FileUpload::make('file')
                    ->label('Вложение')
                    ->disk('public')
                    ->directory('attachments')
                    ->acceptedFileTypes(['application/pdf'])
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
                Tables\Columns\TextColumn::make('course.name')
                    ->label('Курс'),
                Tables\Columns\TextColumn::make('name')
                    ->label('Урок'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('course.name')
                    ->label('Курс')
                    ->native(false)
                    ->relationship('course', 'name'),
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

    public static function getRelations(): array
    {
        return [
            CharacteristicsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLessons::route('/'),
            'create' => Pages\CreateLesson::route('/create'),
            'edit' => Pages\EditLesson::route('/{record}/edit'),
        ];
    }
}
