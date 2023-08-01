import React, { useState } from "react";

function InvestmentForm() {
  const [currentSavings, setCurrentSavings] = useState();
  const [yearlySavings, setyearlySavings] = useState();
  const [expextedInterest, setexpextedInterest] = useState();
  const [investmentDuration, setinvestmentDuration] = useState();

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

  const calculateHandler = (userInput) => {

        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
    
        const yearlyData = []; // per-year results
    
        let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];
    
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
        console.log(userInput);
    
        // do something with yearlyData ...
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