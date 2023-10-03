const Filter = ({ filter, filterEntries }) => {
  return (
    <>
      <p>filter</p>
      <input value={filter} onChange={filterEntries} />
    </>
  );
};

export default Filter;
