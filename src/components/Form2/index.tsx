import React, { useState } from "react";
import Button from "../Button";
import styles from './Form.module.scss';
import { IFlat } from '../../types/flat';
import { v4 as uuidv4 } from 'uuid';

type Props = {
    flat: IFlat[];
    setFlats: React.Dispatch<React.SetStateAction<IFlat[]>>
}

export default function Form2({ flat, setFlats }: Props) {
    const [number, setNumber] = useState('');
    const [guest, setGuest] = useState('');
    const [guestId, setGuestId] = useState('');
    const [time, setTime] = useState('00:00');

    function addGuest(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFlats(actualyFlats =>
            [...actualyFlats,
            {
                number,
                guest,
                guestId,
                time,
                selected: false,
                completed: false,
                id: uuidv4(),
            }
            ]
        );
        setNumber('');
        setGuest("");
        setGuestId('');
        setTime('');
    }

    function handleGuest(e: React.ChangeEvent<HTMLInputElement>) {
        const enteredGuest = e.target.value;
        setGuest(enteredGuest);
    }
    function handleGuestId(e: React.ChangeEvent<HTMLInputElement>) {
        const enteredGuestId = e.target.value;
        setGuestId(enteredGuestId);
    }
    function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
        const enteredNumber = e.target.value;
        setNumber(enteredNumber);
    }
    function handleTime(e: React.ChangeEvent<HTMLInputElement>) {
        const enteredTime = e.target.value;
        setTime(enteredTime);
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
                    value={guest}
                    onChange={handleGuest}
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
                    value={guestId}
                    onChange={handleGuestId}
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
                    value={number}
                    onChange={handleNumber}
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
                    value={time}
                    onChange={handleTime}
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
