import { ListItemProps } from '../interfaces/i-monthly-spendings';

const formatDate = (date: any) => {
    const newDate = new Date(date);
    return `${String(newDate.getMonth() + 1).padStart(2, '0')}/${newDate.getFullYear()}`;
};

const formatNumber = (arg: number) => {
    return arg.toFixed(2);
};

export function calculate(list: ListItemProps[]) {
    const newList: any = [];
    list.forEach(item => {
        for (let i = 0; i < item.term; i++) {
            const currentDate = new Date();
            const date = formatDate(currentDate.setMonth(currentDate.getMonth() + i));

            // calculate current
            let payment = Math.round(item.sum / item.term * 100) / 100;
            let remainder = Math.round((item.sum - i * payment) * 100) / 100;
            let percent = Math.round(remainder * item.percent / 100 * 100) / 100;

            // calculate total
            payment = newList[i]?.payment ? Number(newList[i]?.payment) + payment : payment;
            remainder = newList[i]?.remainder ? Number(newList[i]?.remainder) + remainder : remainder;
            percent = newList[i]?.percent ? Number(newList[i]?.percent) + percent : percent;

            newList[i] = {
                date: newList[i]?.date || date,
                remainder: formatNumber(remainder),
                payment: formatNumber(payment),
                percent: formatNumber(percent),
                total: formatNumber(payment + percent),
            };
        }
    });
    return newList;
};
