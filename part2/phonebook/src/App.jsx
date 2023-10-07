import { useEffect, useState } from "react";
import PeopleList from "./PeopleList";
import Form from "./Form";
import Filter from "./Filter";
import Notification from "./Notification";
import peopleService from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  useEffect(() => {
    peopleService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = async (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      const shouldUpdate = confirm(
        `${newName} is already added to phonebook, replace old number with new one?`
      );
      if (shouldUpdate) {
        const person = persons.find((person) => person.name === newName);
        person.number = newNumber;
        peopleService.update(person.id, person);
        setNewName("");
        setNewNumber("");
        changeNotification(`${newName} is updated`, "success");
      }
      return;
    }
    const newObject = {
      name: newName,
      number: newNumber,
    };
    const newPerson = await peopleService.create(newObject);
    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
    changeNotification(`${newName} is added`, "success");
  };

  const changeNotification = (message, messageType) => {
    setMessage(message);
    setMessageType(messageType);
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 3000);
  };

  const deletePerson = (id) => {
    const newPersons = filteredPersons.filter((person) => person.id !== id);
    peopleService.remove(id);
    setPersons(newPersons);
    changeNotification("Person deleted", "error");
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
      <Notification message={message} messageType={messageType} />
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
