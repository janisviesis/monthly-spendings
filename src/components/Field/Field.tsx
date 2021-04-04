import { FC, useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { FieldProps } from 'interfaces/i-monthly-spendings';

const Field: FC<FieldProps> = ({
    name,
    label,
    value,
    endAdornment,
    error,
    helperText,
    onChange,
}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <TextField
            variant="outlined"
            fullWidth
            name={name}
            label={label}
            value={inputValue}
            error={error}
            helperText={helperText}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            onBlur={(e) => onChange(name, e.currentTarget.value)}
            InputProps={{
                endAdornment: (
                    endAdornment
                        ? <InputAdornment position="end">{endAdornment}</InputAdornment>
                        : null
                ),
            }}
        />
    );
};

export default Field;
