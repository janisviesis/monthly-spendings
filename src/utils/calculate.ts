import { ListItemProps } from 'interfaces/i-monthly-spendings';

export function calculate(list: ListItemProps[]) {
    console.log(list);
    return [{
        date: '01/21',
        remainder: 12000,
        payment: 1200,
        percent: 120,
        total: 1320,
    }];
}