import React from "react";
/*import Button from "../Button";
import styles from './Form.module.scss';
import { IFlat } from '../../types/flat';

class Form extends React.Component<{
    setFlats: React.Dispatch<React.SetStateAction<IFlat[]>>
}> {
    state = {
        number: "",
        guest: "",
        guestId: "",
        time: "00:00"
    }

    addGuest(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setFlats(actualyFlats => [...actualyFlats, { ...this.state }]);
        console.log("state: ", this.state);
    }

    render() {
        return (
            <form className={styles.newFlat} onSubmit={this.addGuest.bind(this)}>
                <div className={styles.inputContainer}>
                    <label htmlFor="guestName">
                        Nome:
                    </label>
                    <input
                        type="text"
                        name="guestName"
                        value={this.state.guest}
                        onChange={event => this.setState({ ...this.state, guest: event.target.value })}
                        id="guestName"
                        placeholder="nome do hóspede"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="guestId">
                        Documento:
                    </label>
                    <input
                        type="text"
                        name="guestId"
                        value={this.state.guestId}
                        onChange={event => this.setState({ ...this.state, guestId: event.target.value })}
                        id="guestId"
                        placeholder="documento do hóspede"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="number">
                        Apartamento:
                    </label>
                    <input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={event => this.setState({ ...this.state, number: event.target.value })}
                        id="number"
                        placeholder="número do apartamento"
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="time">
                        Tempo:
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        value={this.state.time}
                        onChange={event => this.setState({ ...this.state, time: event.target.value })}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>

                <Button type="submit" >
                    Adicionar
                </Button>
            </form>
        );
    }
}

export default Form;*/