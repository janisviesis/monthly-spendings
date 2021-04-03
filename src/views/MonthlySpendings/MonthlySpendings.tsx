import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { InputFields, TableFields } from './constants';
import { ListItemProps, TableDataProps } from 'interfaces/i-monthly-spendings';
import { v1 as uuid } from 'uuid';
import { calculate } from 'utils/calculate';

import Input from '../../components/Input';
import ItemList from '../../components/List';
import ItemTable from '../../components/Table';

export default function MonthlySpendings() {
    const [input, setInput] = useState<any>({});
    const [list, setList] = useState<ListItemProps[]>([]);
    const [data, setData] = useState<TableDataProps[]>([]);

    const handleChange = (field: string, value: any) => {
        setInput({
            ...input,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        const newList = list;
        newList.push({
            ...input,
            guid: uuid(),
        });
        setList(newList);
        setData(calculate(newList));
    };

    const handleDelete = (guid: string) => {
        const newList = list.filter(item => item.guid !== guid)
        setList(newList);
        setData(calculate(newList));
    };

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <Input fields={InputFields} onChange={handleChange} onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={12} md={6}>
                <ItemList items={list} onDelete={handleDelete} />
            </Grid>
            <Grid item xs={12} md={12}>
                <ItemTable columns={TableFields} data={data} />
            </Grid>
        </Grid>
    );
};
