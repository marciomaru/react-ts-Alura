import Button from "../Button";
import Watch from "./Watch";
import styles from "./StopWatch.module.scss";
import { timeToSeconds } from '../../common/utils/time';
import { IFlat } from '../../types/flat'
import { useState } from "react";

interface Props {
    selected: IFlat | undefined;
}

function StopWatch({ selected }: Props) {
    const [time, setTime] = useState<number>();
    if (selected?.time) {
        setTime(timeToSeconds(selected.time));
    }
    return (
        <div className={styles.stopWatch}>
            <p className={styles.title}>
                Escolha um card e inicie o cronômetro
            </p>
            Tempo: {time}
            <div className={styles.watchWrapper}>
                <Watch />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    );
}

export default StopWatch;

