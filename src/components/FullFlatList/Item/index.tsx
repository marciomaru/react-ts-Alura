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
            className={`${styles.item} ${selected ? styles.selectedItem : ''}`}
            onClick={() => selectFlat(
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
        </li>
    )
}

export default Item;