import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { ButtonProps } from 'interfaces/i-monthly-spendings';

 const CustomButton: FC<ButtonProps> = ({
     text,
     disabled,
     onClick,
 }) => {
    return (
        <Button
            fullWidth
            variant="outlined"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </Button>
    )
};

export default CustomButton;
