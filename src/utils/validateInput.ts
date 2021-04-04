import { FieldProps } from 'interfaces/i-monthly-spendings';

export function validateInput(input: FieldProps[]) {
    let errors = false;
    const validatedInput = input.map((field: FieldProps) => {
        if (!field.value) {
            errors = true;
            return {
                ...field,
                error: true,
                helperText: 'Aizpildiet lauku!',
            };
        }
        if (field.type === 'number' && (
            isNaN(Number(field.value)) || Number(field.value) <= 0)
        ) {
            errors = true;
            return {
                ...field,
                error: true,
                helperText: 'Nepareizs formāts!',
            };
        }
        return {
            ...field,
            error: false,
            helperText: '',
        };
    });

    return {
        validatedInput,
        errors,
    };
};
