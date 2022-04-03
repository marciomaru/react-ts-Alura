import styles from "./Watch.module.scss";

function Watch() {
    return (
        <>
            <span className={styles.watchNumber}>0</span>
            <span className={styles.watchNumber}>0</span>
            <span className={styles.watchDivision}>:</span>
            <span className={styles.watchNumber}>0</span>
            <span className={styles.watchNumber}>0</span>

        </>
    );
}

export default Watch;