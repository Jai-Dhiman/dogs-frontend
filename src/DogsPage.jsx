import axios from "axios";
import { useState, useEffect } from "react";
import { DogsIndex } from "./DogsIndex";
import { DogsNew } from "./DogsNew";

export function DogsPage() {
  const [dogs, setDogs] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/dogs.json").then((response) => {
      console.log(response.data);
      setDogs(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/dogs.json", params).then((response) => {
      setDogs([...dogs, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <DogsNew onCreate={handleCreate} />
      <DogsIndex dogs={dogs} />
    </main>
  );
}
