export interface FieldProps {
    name: string;
    label: string;
    placeholder?: string;
    value?: string;
    endAdornment?: string;
    type?: string;
    error?: boolean;
    helperText?: string;
    onChange(field: string, value: string): void;
}

export interface InputProps {
    fields: FieldProps[];
    onChange(field: string, value: string): void;
    onSubmit: () => void;
}

export interface ButtonProps {
    text: string;
    onClick: () => void;
}

export interface ListItemProps {
    guid: string;
    name: string;
    sum: number;
    term: number;
    percent: number;
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
