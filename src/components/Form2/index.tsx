import React, { SyntheticEvent, useState } from "react";
import Button from "../Button";
import styles from './Form.module.scss';
import { IFlat } from '../../types/flat';

type Props = {
    flat: IFlat[];
    setFlats: Function;
}

export default function Form2({ flat, setFlats }: Props) {
    const event: React.FormEvent<HTMLFormElement>;

    function addGuest(e: SyntheticEvent,) {
        e.preventDefault();
        setFlats([
            {
                number: '',
                guest: '',
                guestId: '',
                time: '00:00'
            }
        ]);
    }

    return (
        <form className={styles.newFlat} onSubmit={addGuest}>
            <div className={styles.inputContainer}>
                <label htmlFor="guestName">
                    Nome:
                </label>
                <input
                    type="text"
                    name="guestName"
                    value={event => setFlats({ ...flat, guest: event.target.value })}
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
                    id="guestId"
                    placeholder="documento do hóspede"
                    required
                />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="flat">
                    Apartamento:
                </label>
                <input
                    type="text"
                    name="flat"
                    id="flat"
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
