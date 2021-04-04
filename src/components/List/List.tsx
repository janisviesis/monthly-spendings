import { FC } from 'react';
import {
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListProps } from 'interfaces/i-monthly-spendings';

const ItemList: FC<ListProps> = ({
    items,
    onDelete,
}) => {
    return (
        <List>
            {items.map((item) => {
                const labelId = `checkbox-list-label-${item.guid}`;

                return (
                    <ListItem key={item.guid} button>
                        <ListItemText
                            id={labelId}
                            primary={item.name}
                            secondary={`${item.sum}€ ${item.term}mēn ${item.percent}%`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => onDelete(item.guid)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default ItemList;
