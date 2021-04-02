export interface FieldProps {
    name: string;
    label: string;
    placeholder?: string;
    value?: any;
    endAdornment?: string;
    error?: boolean;
    helperText?: string;
    autoFocus?: boolean;
    onChange(field: string, value: any): void;
}

export interface InputProps {
    fields: any[];
    onChange(field: string, value: any): void;
    onSubmit: () => void;
}

export interface ButtonProps {
    text: string;
    disabled?: boolean;
    onClick: () => void;
}

export interface ListItemProps {
    guid: string;
    name: string;
    sum: number;
    term?: number;
    percent?: number;
}

export interface ListProps {
    items: ListItemProps[];
    onDelete: (name: string) => void;
}
