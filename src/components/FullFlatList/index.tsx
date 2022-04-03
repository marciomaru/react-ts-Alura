import { IFlat } from '../../types/flat';
import styles from './FullFlatList.module.scss';
import Item from "./Item";

function FullFlatList({ flat }: { flat: IFlat[] }) {


    return (
        <aside className={styles.flatList}>
            <h2>Apartamentos Ocupados</h2>
            <ul>
                {
                    flat.map((flat, index) => (
                        <Item
                            key={index}
                            {...flat}
                        />
                    ))
                }
            </ul>
        </aside>
    );
}

export default FullFlatList;