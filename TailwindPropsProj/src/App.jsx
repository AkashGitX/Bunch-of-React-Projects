import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  // Object
  let myObj = {
    username: "Sky",
    age: 21,
  };

  // Array
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>

      {/* Passing string as prop */}
      <Card username="chaiaurcode" />

      {/* Passing another string as prop */}
      <Card btntext="Visit Me" />

      {/* Passing both props */}
      <Card username="Hitesh" btntext="Follow Me" />

      {/* Passing object as prop */}
      {/* <Card user={myObj} /> */}

      {/* Passing array as prop */}
      {/* <Card numbers={newArr} /> */}
    </>
  );
}

export default App;