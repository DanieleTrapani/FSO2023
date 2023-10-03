const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{good + neutral + bad}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{(good - bad) / (good + neutral + bad)}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{(good / (good + neutral + bad)) * 100}%</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

export default Statistics;
