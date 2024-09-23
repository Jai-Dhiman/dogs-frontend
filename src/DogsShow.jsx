export function DogsShow({ photo }) {
  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {photo.name}</p>
      <p>Breed: {photo.breed}</p>
      <p>Age: {photo.age}</p>
    </div>
  );
}
