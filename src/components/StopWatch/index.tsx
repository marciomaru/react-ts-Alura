import Button from "../Button";
import Watch from "./Watch";
import styles from "./StopWatch.module.scss";
import { timeToSeconds } from '../../common/utils/time';
import { IFlat } from '../../types/flat'
import { useEffect, useState } from "react";
import Button2 from "../Button2";

interface Props {
    selected: IFlat | undefined;
    finishFlat: () => void;
}

function StopWatch({ selected, finishFlat }: Props) {
    const [time, setTime] = useState<number>();

    function regressive(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTime(contador - 1);
                return regressive(contador - 1);
            }
            finishFlat();
        }, 1000)
    }

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(String(selected?.time)));
        }
    }, [selected])

    return (
        <div className={styles.stopWatch}>
            <p className={styles.title}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={styles.watchWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={
                () => regressive(time)
            } >
                Começar!
            </Button>
        </div>
    );
}

export default StopWatch;

