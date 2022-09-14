import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { create } from 'domain';
import { useFetchAndLoadData } from './components/HomePage/LoadData';

function App() {

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  // const onCreateChefClicked = async () => {
  //   const params = { name, age};
  //   const response = await createChef(params);
  //   return response;
  // }
  useFetchAndLoadData();
  
  return (
    // <div>
    <Layout/>
    //  <button onClick={onCreateChefClicked}>Create Chef!</button>
    // <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
    // <input type="text" placeholder="age" onChange={(e) => setAge(e.target.value)} />
    // </div>
  );
}

export default App;