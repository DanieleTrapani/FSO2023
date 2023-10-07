const PeopleList = ({ filteredPersons, deletePerson }) => {
  return (
    <>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() => deletePerson(person.id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default PeopleList;
