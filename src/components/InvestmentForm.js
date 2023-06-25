import React, { useState } from "react";

export const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlyContribution, setYearlyContribution] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const calculateHandler = (evt) => {
    evt.preventDefault();
    const userInput = Object.assign({
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    });
    console.log(userInput);
    resetHandler();
  };
  const resetHandler = (evt) => {
    setCurrentSavings(0);
    setYearlyContribution(0);
    setExpectedReturn(0);
    setDuration(0);
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="currentSavings"
            value={currentSavings}
            onChange={(evt) => setCurrentSavings(evt.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearlyContribution"
            value={yearlyContribution}
            onChange={(evt) => setYearlyContribution(evt.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expectedReturn"
            value={expectedReturn}
            onChange={(evt) => setExpectedReturn(evt.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(evt) => setDuration(evt.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button" onClick={calculateHandler}>
          Calculate
        </button>
      </p>
    </form>
  );
};
