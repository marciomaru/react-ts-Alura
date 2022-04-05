import React, { useState } from 'react';
//import Form from '../components/Form';
import Form2 from '../components/Form2';
import FullFlatList from '../components/FullFlatList';
import StopWatch from '../components/StopWatch';
import { IFlat } from '../types/flat';
import "./styles.scss";

//<Form setFlats={setFlat} /> esse é o Form do curso da Alura, estou continuando no meu.
function App() {
  const [flats, setFlats] = useState<IFlat[]>([]);
  const [select, setSelect] = useState<IFlat>();

  function selectFlat(selectedFlat: IFlat) {
    setSelect(selectedFlat);
    setFlats(previousFlat => previousFlat.map(flat => ({
      ...flat,
      selected: flat.id === selectedFlat.id ? true : false,
    })));
  }

  return (
    <div className='AppStyle'>
      <Form2
        flat={flats}
        setFlats={setFlats}
      />
      <FullFlatList
        flat={flats}
        selectFlat={selectFlat}
      />
      <StopWatch />
    </div>
  );
}

export default App
