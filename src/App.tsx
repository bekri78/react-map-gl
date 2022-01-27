import React, { useEffect } from "react";
import Map from './components/Map/Map'
import axios from 'axios'
import "./App.css";
import { useDispatch } from "react-redux";
import { addArrondissement } from './components/Map/MapSlice'
import { addLieuDeTournage } from './components/Map/MapSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getArrondissement = async () => {
      const response = await axios.get(`${process.env.REACT_APP_URL_ARRONDISSEMENT}`)
        .then(function (response) {
          // handle success
          console.log('data', response.data.features);
          dispatch(addArrondissement(response.data))
          // je recupère la donnée et dispatch pour rendre accecipble
          // pous appelez le magasin. dispatch pour dispatcher une action.
          // C'est le seul moyen de déclencher un changement d'état. 
          //Avec React Redux, les composants n'accèdent jamais directement au magasin 
        })
        .catch((err) => {
          console.log(err)
        });
    }
    const getLieux = async () => {

      const response = await axios.get(`${process.env.REACT_APP_URL_LIEUX}`)
        .then(function (response) {
          dispatch(addLieuDeTournage(response.data))
        })
        .catch((err) => {
          console.log(err)
        });
    }
    getArrondissement()
    getLieux()
  }, [])


  return (
    <div className="flex justify-center items-center  flex-col w-full">
      <h1 className="text-blue-450 m-3 font-bold  "> MAP arrondissement</h1>
      <Map />
    </div>
  );
}

export default App;