import Button from "../Button";
import Watch from "./Watch";
import styles from "./StopWatch.module.scss";

function StopWatch() {
    return (
        <div className={styles.stopWatch}>
            <p className={styles.title}>Escolha um card e inicie o cronômetro</p>
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

