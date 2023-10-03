import { useEffect, useState } from "react";
import PeopleList from "./PeopleList";
import Form from "./Form";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/persons")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPersons(data);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
  };

  const filterEntries = (event) => {
    setFilter(event.target.value);
  };

  const filteredPersons =
    filter === ""
      ? persons
      : persons.filter((person) => person.name.toLowerCase().includes(filter));

  return (
    <>
      <h2>Phonebook</h2>
      <Filter filterEntries={filterEntries} filter={filter} />
      <br />
      <Form
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <PeopleList filteredPersons={filteredPersons} />
    </>
  );
};

export default App;
