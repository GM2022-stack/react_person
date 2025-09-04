export const Person = ({ person }) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>Idade: {person.age}</p>
    </div>
  );
};
