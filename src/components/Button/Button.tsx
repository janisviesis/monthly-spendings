import { FC } from 'react';
import { Button } from '@material-ui/core';
import { ButtonProps } from 'interfaces/i-monthly-spendings';

 const CustomButton: FC<ButtonProps> = ({
     text,
     onClick,
 }) => {
    return (
        <Button
            fullWidth
            variant="outlined"
            onClick={onClick}
        >
            {text}
        </Button>
    )
};

export default CustomButton;
