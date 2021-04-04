import { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputFields, TableFields } from 'variables/constants';
import { FieldProps, ListItemProps, TableDataProps } from 'interfaces/i-monthly-spendings';
import { v1 as uuid } from 'uuid';
import { calculate } from 'utils/calculate';
import { validateInput } from 'utils/validateInput';

import Input from '../../components/Input';
import ItemList from '../../components/List';
import ItemTable from '../../components/Table';

export default function MonthlySpendings() {
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

            setFields(InputFields);
            setList(newList);
            setData(calculate(newList));
        }
    };

    const handleDelete = (guid: string) => {
        const newList = list.filter(item => item.guid !== guid);

        setList(newList);
        setData(calculate(newList));
    };

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <Typography
                    variant="h5"
                    style={{ margin: 10 }}
                >
                    Aprēķināt mēneša tēriņus
                </Typography>
                <Input
                    fields={fields}
                    onChange={handleChange} onSubmit={handleSubmit}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ItemList
                    items={list}
                    onDelete={handleDelete}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <ItemTable
                    columns={TableFields}
                    data={data}
                />
            </Grid>
        </Grid>
    );
};
