import axios from "axios";
import { useState, useEffect } from "react";
import { DogsIndex } from "./DogsIndex";
import { DogsNew } from "./DogsNew";
import { DogsShow } from "./DogsShow";
import { Modal } from "./Modal";

export function DogsPage() {
  const [dogs, setDogs] = useState([]);
  const [isDogsShowVisible, setIsDogsShowVisible] = useState(false);
  const [currentDog, setCurrentDog] = useState({});

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

  const handleShow = (dog) => {
    console.log("handleShow", dog);
    setIsDogsShowVisible(true);
    setCurrentDog(dog);
  };

  const handleUpdate = (id, params, successCallback) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/dogs/${id}.json`, params).then((response) => {
      setDogs(
        dogs.map((dog) => {
          if (dog.id === response.data.id) {
            return response.data;
          } else {
            return dog;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/dogs/${id}.json`).then(() => {
      setDogs(dogs.filter((dogs) => dogs.id !== id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsDogsShowVisible(false);
  };

  useEffect(handleIndex, []);
  return (
    <main>
      <DogsNew onCreate={handleCreate} />
      <DogsIndex dogs={dogs} onShow={handleShow} />
      <Modal show={isDogsShowVisible} onClose={handleClose}>
        <DogsShow dog={currentDog} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
