export const InputFields = [
    {
        name: 'name',
        label: 'Saistības nosaukums',
    },
    {
        name: 'sum',
        label: 'Aizdevuma pamatsumma',
    },
    {
        name: 'term',
        label: 'Aizdevuma termiņš (mēneši)',
    },
    {
        name: 'percent',
        label: 'Aizdevuma procenti mēnesī no atlikušās pamatsummas (procenti)',
        endAdornment: '%',
    }
];

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
