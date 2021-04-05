import { useState, useRef } from 'react';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { InputFields, TableFields } from 'variables/constants';
import { FieldProps, ListItemProps, TableDataProps } from 'interfaces/i-monthly-spendings';
import { v1 as uuid } from 'uuid';
import { calcTableData } from 'utils/calculate';
import { validateInput } from 'utils/validateInput';

import Input from '../../components/Input';
import ItemList from '../../components/List';
import ItemTable from '../../components/Table';

const useStyles = makeStyles({
    title: {
        margin: 10,
    },
    content: {
        height: '100vh',
    },
    scroolButton: {
        display: 'none',
    },
});

export default function MonthlySpendings() {
    const classes = useStyles();
    const buttonRef = useRef<any>(null);

    const [fields, setFields] = useState<FieldProps[]>(InputFields);
    const [list, setList] = useState<ListItemProps[]>([]);
    const [data, setData] = useState<TableDataProps[]>([]);

    const handleChange = (field: string, value: string) => {
        const newFields = fields.map(item => {
            if (item.name === field) {
                return {
                    ...item,
                    value,
                };
            }
            return item;
        });
        setFields(newFields);
    };

    const handleSubmit = () => {
        const { validatedInput, errors } = validateInput(fields);

        if (errors) {
            setFields(validatedInput);
        } else {
            const newList = list;
            const listItem: any = {};

            validatedInput.forEach((elem: FieldProps) => {
                listItem[elem.name] = elem.value;
            });

            newList.push({
                ...listItem,
                guid: uuid(),
            });

            buttonRef?.current?.click();
            setFields(InputFields);
            setList(newList);
            setData(calcTableData(newList));
        }
    };

    const handleDelete = (guid: string) => {
        const newList = list.filter(item => item.guid !== guid);

        setList(newList);
        setData(calcTableData(newList));
    };

    return (
        <Grid container>
            <Grid item xs={12} md={12}>
                <Typography
                    variant="h5"
                    className={classes.title}
                >
                    Aprēķināt mēneša tēriņus
                </Typography>
            </Grid>
            <Grid className={classes.content} item xs={12} md={6}>
                <Input
                    fields={fields}
                    onChange={handleChange} onSubmit={handleSubmit}
                />
            </Grid>
            <Grid className={classes.content} item xs={12} md={6}>
                <ItemList
                    items={list}
                    onDelete={handleDelete}
                />
            </Grid>
            <Grid id="item-table" className={classes.content} item xs={12} md={12}>
                <ItemTable
                    columns={TableFields}
                    data={data}
                />
            </Grid>
            <Scroll to="item-table" smooth={true}>
                <Button className={classes.scroolButton} ref={buttonRef} />
            </Scroll>
        </Grid>
    );
};
