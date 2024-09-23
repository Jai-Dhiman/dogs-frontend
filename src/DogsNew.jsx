export function DogsNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Add New Dog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Breed: <input name="breed" type="text" />
        </div>
        <div>
          Age: <input name="age" type="integer" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
