import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    updateDoc,
    increment
    } from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDNbRrotato6wMlTNwEU1VePOUcJNf2oPA",
    authDomain: "javaweed-genetics.firebaseapp.com",
    projectId: "javaweed-genetics",
    storageBucket: "javaweed-genetics.appspot.com",
    messagingSenderId: "449700369382",
    appId: "1:449700369382:web:33761c5bad4f86b1817c27"
  };

const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
export const getDB = new Promise((res,rej) => {
    const colRef = collection(DB,'productos')
    getDocs(colRef).then((snapshot)=>{
        const products = snapshot.docs.map((rawDoc)=>{
            return{
                id: rawDoc.id,
                ...rawDoc.data()
            }
        })
        res(products)
    }).catch(error=>{
        rej(console.log("Error al traer los productos", error))})
    }
)

export const getDB_ID1 = async (id) => {
    const itemRef = await doc(DB,'productos', id);
    await getDoc(itemRef).then(snapshot =>{
        if(snapshot.exists()){
            const product = {
                id: snapshot.id,
                ...snapshot.data()
            }
        console.log(product);
        return (product);
        }
    }).catch(error => {return(console.log("Error al traer los productos", error))})
}

export const getDBbyID = async (id) =>{
    const itemRef = await doc(DB,'productos', id);
    return(
        new Promise((res, rej) =>{
            getDoc(itemRef).then(snapshot =>{
                if(snapshot.exists()){
                    const product = {
                        id: snapshot.id,
                        ...snapshot.data()
                    }
                    res(product)}
            }).catch(error => rej(error) )
        })
    )
}


export const getDBbyID1 = async (id) =>{
    const itemRef = await doc(DB,'productos', id);
    return(
        new Promise((res, rej) =>{
            getDoc(itemRef).then(snapshot =>{
                if(snapshot.exists()){
                    const product = {
                        id: snapshot.id,
                        ...snapshot.data()
                    }
                    res(product)}
            }).catch(error => rej(error) )
        })
    )
}

export const getDBbyGenetics = async (genetics) => {
    const itemRef = await query(
        collection(DB,'productos'),
        where('Genetica','==', genetics));
    return(
        new Promise((res,rej) => {
            getDocs(itemRef).then(snapshot=>{
                if(snapshot.exists()){
                    const productos = snapshot.map(item => {
                        return{
                            id: item.id,
                            ...item.data()
                        }
                    })
                    res(productos)
                }
            }).catch(error=>{
                rej(console.log("Error", error))
            })
        })
    )
    
}

export const updateStock = async (item) => {
    item.forEach(item => {
        const docRef = doc(DB, "productos", item.id)
        updateDoc(docRef, {
            stock: increment(-(item.cantidad))
        })
    })


}

