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

export interface TableColumnProps {
    name: string;
    label: string;
    minWidth: number;
    align: "left" | "right" | "inherit" | "center" | "justify" | undefined;
}

export interface TableDataProps {
    date: string;
    remainder: number;
    payment: number;
    percent: number;
    total: number;
}

export interface TableProps {
    columns: any[];
    data: any[];
}
