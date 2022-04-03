import styles from '../FullFlatList.module.scss';

function Item({ number, guest, guestId, time }: { number: string, guest: string, guestId: string, time: string }) {
    return (
        <li className={styles.item} >
            <h3>{number}</h3>
            <div>{guest}</div>
            <div>{guestId}</div>
            <div>{time}</div>
        </li>
    )
}

export default Item;