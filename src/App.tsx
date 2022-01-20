import React, { useState } from "react";
import Map from './components/Map/Map'
import "./App.css";

function App() {


  return (
    <div className="flex justify-center items-center  flex-col w-full shadow-2xl"  >
      <h1 className="text-blue-450 m-3 font-bold  "> MAP arrondissement</h1>

      <Map />
    </div>
  );
}

export default App;
