import React, { useState } from 'react';
import { InputFields } from './constants';
import Input from '../../components/Input/Input';

export default function MonthlySpendings() {
    const [input, setInput] = useState({});

    const handleChange = (field: string, value: any) => {
        setInput({
            ...input,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        console.log(input);
    }

    return (
        <>
            <Input fields={InputFields} onChange={handleChange} onSubmit={handleSubmit} />
        </>
    );
};
