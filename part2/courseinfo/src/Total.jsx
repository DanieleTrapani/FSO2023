const Total = ({ parts }) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {parts.reduce((accum, current) => accum + current.exercises, 0)}
      </p>
    </>
  );
};

export default Total;
