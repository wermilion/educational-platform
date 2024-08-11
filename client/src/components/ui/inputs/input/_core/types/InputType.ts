export type InputType = {
    label: string;
    id: string;
    error?: string;
    disabled?: boolean;
}

export type TextInput = InputType & {
    link?: string;
    value: string;
}