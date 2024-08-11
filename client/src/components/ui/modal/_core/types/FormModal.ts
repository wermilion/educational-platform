export type FormModalType = {
    title: string;
    description: string;
    formData: FormItemType[];
}

export type FormItemType = {
    type: number;
    label: string;
    id: string;
    error: string;
    value: string;
    regex: RegExp;
    required: boolean;
}