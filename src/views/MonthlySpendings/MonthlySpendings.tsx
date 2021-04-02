import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { InputFields } from './constants';
import Input from '../../components/Input';
import ItemList from '../../components/List';
import { ListItemProps } from 'interfaces/i-monthly-spendings';
import { v1 as uuid } from 'uuid';

export default function MonthlySpendings() {
    const [input, setInput] = useState<any>({});
    const [list, setList] = useState<ListItemProps[]>([]);

    const handleChange = (field: string, value: any) => {
        setInput({
            ...input,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        setList(prev => [
            ...prev,
            {
                ...input,
                guid: uuid(),
            },
        ]);
    };

    const handleDelete = (guid: string) => {
        setList(list.filter(item => item.guid !== guid));
    };

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <Input fields={InputFields} onChange={handleChange} onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={12} md={6}>
                <ItemList items={list} onDelete={handleDelete} />
            </Grid>
        </Grid>
    );
};
