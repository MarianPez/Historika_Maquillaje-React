import React from 'react';
import { useState } from 'react';
import ItemList from '../../Componentes/ItemList/ItemList';
import Spinner from '../../List/Spinner/Spinner';
import "./home.scss"


function Home() {
const [isLoading, setIsLoading] = useState(true)

setTimeout(() =>{
setIsLoading(false)
}, 2000)

  return (
    <div className={isLoading? 'd-flex flex-wrap justify-content-center align-items-center spinnerHome' : 'd-flex flex-wrap justify-content-around'}>
     {isLoading ? <Spinner id="spinnerHome"/>   :        <ItemList></ItemList>
    }
    </div>
  )
}

export default Home