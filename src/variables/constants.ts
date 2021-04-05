import { FieldProps } from 'interfaces/i-monthly-spendings';

export const InputFields = [
    {
        name: 'name',
        label: 'Saistības nosaukums',
        value: '',
    },
    {
        name: 'sum',
        label: 'Aizdevuma pamatsumma',
        value: '',
        endAdornment: '€',
        type: 'number',
    },
    {
        name: 'term',
        label: 'Aizdevuma termiņš (mēneši)',
        value: '',
        type: 'number',
    },
    {
        name: 'percent',
        label: 'Aizdevuma procenti mēnesī no atlikušās pamatsummas (procenti)',
        value: '',
        endAdornment: '%',
        type: 'number',
    }
] as FieldProps[];

export const TableFields = [
    {
        name: 'date',
        label: 'Mēnesis',
        minWidth: 170,
        align: 'left',
    },
    {
        name: 'remainder',
        label: 'Atlikusī summa',
        minWidth: 170,
        align: 'left',
    },
    {
        name: 'payment',
        label: 'Saistību maksājums',
        minWidth: 170,
        align: 'left',
    },
    {
        name: 'percent',
        label: 'Procentu maksājums',
        minWidth: 170,
        align: 'left',
    },
    {
        name: 'total',
        label: 'Kopējais maksājums',
        minWidth: 170,
        align: 'right',
    }
];

export const RowsPerPageOptions = [12, 24, 36, 48, 60];
