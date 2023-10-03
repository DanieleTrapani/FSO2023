const Form = ({ addPerson, newName, newNumber, setNewName, setNewNumber }) => {
  return (
    <>
      <h4>Add new number</h4>
      <form>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
