import { IFlat } from '../../../types/flat';
import styles from './Item.module.scss';

interface Props extends IFlat {
    selectFlat: (selectedFlat: IFlat) => void;
}

function Item({
    number,
    guest,
    guestId,
    time,
    selected,
    completed,
    id,
    selectFlat,
}: Props) {
    return (
        <li
            className={
                `
                    ${styles.item} ${selected ? styles.selectedItem : ''}
                    ${completed ? styles.completedItem : ''}
                `
            }
            onClick={() => !completed && selectFlat(
                {
                    number,
                    guest,
                    guestId,
                    time,
                    selected,
                    completed,
                    id,
                }
            )
            }
        >
            <h3>{number}</h3>
            <div>{guest}</div>
            <div>{guestId}</div>
            <div>{time}</div>
            {
                completed &&
                <span
                    className={styles.concluded}
                    aria-label='item completado'
                >
                </span>
            }
        </li>
    )
}

export default Item;