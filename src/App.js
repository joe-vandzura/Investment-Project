import React, { useState } from 'react';
import InvestmentForm from './components/InvestmentForm';
import Header from './components/Header';

function App() {

  const [dataArray, setDataArray] = useState([]);

  const getData = (data) => {
    setDataArray(data.map( obj => {
      return (
      <tr key={obj.year}>
        <td>{obj.year}</td>
        <td>{obj.savingsEndOfYear}</td>
        <td>{obj.yearlyInterest}</td>
      </tr>
    )}));
  };

  return (
    <div>
      <Header />

      <InvestmentForm dataFunction={getData}></InvestmentForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
          {dataArray}
        </tbody>
      </table>
    </div>
  );
}

export default App;
