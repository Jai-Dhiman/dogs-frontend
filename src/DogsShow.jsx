export function DogsShow({ dog, onUpdate, onDestroy }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(dog.id, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Dog information</h1>
      <p>Name: {dog.name}</p>
      <p>Breed: {dog.breed}</p>
      <p>Age: {dog.age}</p>
      <form onSubmit={handleSubmit}>
        <h2>Edit Information: </h2>
        <div>
          Name: <input defaultValue={dog.name} name="name" type="text" />
        </div>
        <div>
          Breed: <input defaultValue={dog.breed} name="breed" type="text" />
        </div>
        <div>
          Age: <input defaultValue={dog.age} name="age" type="integer" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(dog.id)}>Delete</button>
    </div>
  );
}
