// import React, { createContext, useState, useEffect } from "react";
// import { db } from "../Firebase/Firebase";
// import { collection, query, getDocs } from "firebase/firestore";


// export const productosContext = createContext();

// export const ItemProvider = (children) => {

//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     const getProductos = async () => {
//       const q = query(collection(db, "productos"));
//       const docs = [];
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id });
//       });
//       setProductos(docs);
//     };

//     getProductos();
//   }, []);


//   return (
//     <productosContext.Provider value={[productos, setProductos]}>
// {children}
//     </productosContext.Provider>
//   )
// }


