import { FC } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { InputProps } from 'interfaces/i-monthly-spendings';
import Field from '../Field';
import Button from '../Button';

const useStyles = makeStyles({
    margin: {
        margin: 10,
    },
});

const Input: FC<InputProps> = ({
    fields,
    onChange,
    onSubmit,
}) => {
    const classes = useStyles();

    return (
        <Grid>
            {fields.map(field => (
                <Grid
                    key={field.name}
                    className={classes.margin}
                >
                    <Field
                        name={field.name}
                        label={field.label}
                        value={field.value}
                        error={field.error}
                        helperText={field.helperText}
                        endAdornment={field.endAdornment}
                        onChange={onChange}
                    />
                </Grid>
            ))}
            <Grid
                className={classes.margin}
            >
                <Button
                    text="Pievienot saistības"
                    onClick={onSubmit}
                />
            </Grid>
        </Grid>
    );
};

export default Input;
