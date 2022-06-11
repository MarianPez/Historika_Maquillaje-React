import React from 'react';
import ItemList from '../../Componentes/ItemList/ItemList';


function Home() {
  return (
    <div className='d-flex flex-wrap justify-content-around'>
      <ItemList></ItemList>
    </div>
  )
}

export default Home