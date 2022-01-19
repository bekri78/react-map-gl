import React, { useState } from "react";
import Map from './components/Map/Map'
import "./App.css";

function App() {


  return (
    <div style={{ width: "100%", height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <Map />
    </div>
  );
}

export default App;