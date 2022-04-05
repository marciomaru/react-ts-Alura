import { IFlat } from '../../types/flat';
import styles from './FullFlatList.module.scss';
import Item from "./Item";

interface Props {
    flat: IFlat[];
    selectFlat: (selectedFlat: IFlat) => void;
}

function FullFlatList({ flat, selectFlat }: Props) {

    return (
        <aside className={styles.flatList}>
            <h2>Apartamentos Ocupados</h2>
            <ul>
                {
                    flat.map((flat) => (
                        <Item
                            selectFlat={selectFlat}
                            key={flat.id}
                            {...flat}
                        />
                    ))
                }
            </ul>
        </aside>
    );
}

export default FullFlatList;