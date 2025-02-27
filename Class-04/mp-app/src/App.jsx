// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Header } from './components/header/Header'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Header />
//     </div>
//   )
// }

// export default App



import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Slider from "./components/Slider";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Card />
    </div>
  );
};

export default App;