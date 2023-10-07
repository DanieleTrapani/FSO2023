import { useEffect, useState } from "react";
import PeopleList from "./PeopleList";
import Form from "./Form";
import Filter from "./Filter";
import peopleService from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    peopleService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    peopleService.create(newPerson);
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const deletePerson = (id) => {
    const newPersons = filteredPersons.filter((person) => person.id !== id);
    peopleService.remove(id);
    setPersons(newPersons);
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
      <PeopleList
        filteredPersons={filteredPersons}
        deletePerson={deletePerson}
      />
    </>
  );
};

export default App;
