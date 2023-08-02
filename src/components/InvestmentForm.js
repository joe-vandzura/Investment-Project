import React, { useState } from "react";

function InvestmentForm() {
  const [currentSavingsInput, setCurrentSavings] = useState();
  const [yearlyContributionInput, setyearlySavings] = useState();
  const [expextedInterestInput, setexpextedInterest] = useState();
  const [investmentDurationInput, setinvestmentDuration] = useState();

  const savingsHandler = (e) => {
    setCurrentSavings(e.target.value);
  }

  const contributionHandler = (e) => {
    setyearlySavings(e.target.value);
  }

  const interestHandler = (e) => {
    setexpextedInterest(e.target.value);
  }

  const durationHandler = (e) => {
    setinvestmentDuration(e.target.value);
  }

  const calculateHandler = (event) => {

    event.preventDefault();

        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
    
        let yearlyData = []; // per-year results
    
        let currentSavings = currentSavingsInput; // feel free to change the shape of this input object!
        const yearlyContribution = yearlyContributionInput; // as mentioned: feel free to change the shape...
        const expectedReturn = expextedInterestInput / 100;
        const duration = investmentDurationInput;
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          });
        }    
        // do something with yearlyData ...

        yearlyData = yearlyData.map( obj => {
          return (
          <tr>
            <td>{obj.year}</td>
            <td>{obj.savingsEndOfYear}</td>
            <td>{obj.yearlyInterest}</td>
          </tr>
        )});
        console.log(yearlyData);
      };

    return (
    
        <form onSubmit={calculateHandler} className="form">
            
        <div className="input-group">

          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={savingsHandler} type="number" id="current-savings" />
          </p>

          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={contributionHandler} type="number" id="yearly-contribution" />
          </p>

        </div>

        <div className="input-group">

          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input onChange={interestHandler} type="number" id="expected-return" />
          </p>

          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input onChange={durationHandler} type="number" id="duration" />
          </p>

        </div>
    
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
    
      </form>
      );
}

export default InvestmentForm;