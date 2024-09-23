export function DogsIndex({ dogs, onShow }) {
  return (
    <div>
      <h1>All dogs</h1>
      {dogs.map((dogs) => (
        <div key={dogs.id}>
          <h2>{dogs.name}</h2>
          <p>Breed: {dogs.breed}</p>
          <p>Age: {dogs.age}</p>
          <button onClick={() => onShow(dogs)}>More info</button>
        </div>
      ))}
    </div>
  );
}
