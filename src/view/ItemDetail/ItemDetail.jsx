import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { db } from "../../Firebase/Firebase";
import { collection, query, getDocs, where } from "firebase/firestore";
import ItemDetailContainer from '../../Componentes/ItemDetailContainer/ItemDetailContainer';


function ItemDetail() {

    const [productos, setProductos] = useState([]);
    let {id} = useParams();

  

    useEffect(() => {
        const getProductos = async () => {
          const q = query(collection(db, "productos"));
          const docs = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setProductos(docs);



        };
      
        getProductos();


      }, [id]);

let elemento = productos.filter((el) => el.id == id) 



  return (
    elemento.map((el) =>{
        return(
<div>
    <ItemDetailContainer nombre={el.nombre} descripcion={el.descripcion} precio={el.precio} imagen={el.imagen} stock={el.stock}></ItemDetailContainer>
    </div>
    )
    })
  )
}

export default ItemDetail