import React, { useState } from 'react';
//import Form from '../components/Form';
import Form2 from '../components/Form2';
import FullFlatList from '../components/FullFlatList';
import StopWatch from '../components/StopWatch';
import "./styles.scss";

function App() {
  const [flat, setFlat] = useState([
    {
      number: "101",
      guest: "joselito",
      guestId: "123",
      time: "02:00:00"
    },
    {
      number: "201",
      guest: "ademara",
      guestId: "456",
      time: "03:00:00"
    },
  ]);
  //{/*<Form setFlats={setFlat} />*/}
  return (
    <div className='AppStyle'>
      <Form2
        flat={flat}
        setFlats={setFlat}
      />
      <FullFlatList flat={flat} />
      <StopWatch />
    </div>
  );
}

export default App
