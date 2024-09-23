import axios from "axios";
import { useState, useEffect } from "react";
import { DogsIndex } from "./DogsIndex";

export function DogsPage() {
  const [dogs, setDogs] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/dogs.json").then((response) => {
      console.log(response.data);
      setDogs(response.data);
    });
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <DogsIndex dogs={dogs} />
    </main>
  );
}
