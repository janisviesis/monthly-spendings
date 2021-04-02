import React, { FC } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { FieldProps } from 'interfaces/i-monthly-spendings';

const Field: FC<FieldProps> = ({
    name,
    label,
    placeholder,
    value,
    endAdornment,
    error,
    helperText,
    autoFocus,
    onChange,
}) => {
    return (
        <TextField
            variant="outlined"
            fullWidth
            name={name}
            label={label}
            placeholder={placeholder}
            value={value}
            error={error}
            helperText={helperText}
            autoFocus={autoFocus}
            onChange={(e) => onChange(name, e.currentTarget.value)}
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
