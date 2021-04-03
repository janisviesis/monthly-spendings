import { ListItemProps } from 'interfaces/i-monthly-spendings';

const formatDate = (date: any) => {
    const newDate = new Date(date);
    return `${String(newDate.getMonth() + 1).padStart(2, '0')}/${newDate.getFullYear()}`;
};

export function calculate(list: ListItemProps[]) {
    const newList: any = [];
    list.forEach(item => {
        for (let i = 0; i < item.term; i++) {
            const currentDate = new Date();
            const date = formatDate(currentDate.setMonth(currentDate.getMonth() + i));
            const monthly = Math.round(item.sum / item.term * 100) / 100;
            const remainder = Math.round((item.sum - i * monthly) * 100) / 100;
            const percent = Math.round(remainder * item.percent / 100 * 100) / 100;

            newList[i] = {
                date,
                remainder: remainder,
                payment: monthly,
                percent: percent,
                total: (monthly + percent).toFixed(2),
            };
        }
    });
    return newList;
}