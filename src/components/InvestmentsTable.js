import React from "react";

export const InvestmentsTable = (props) => {
  if (props.data.length === 0) {
    return null;
  }
  const initialInvestment = props.initialInvestment;
  return (
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
        {props.data.map((el, idx) => {
          console.log(el);
          return (
            <tr key={idx}>
              <td>{el.year}</td>
              <td>{el.savingsEndOfYear}</td>
              <td>{el.yearlyInterest}</td>
              <td>
                {el.savingsEndOfYear -
                  initialInvestment -
                  el.yearlyContribution * el.year}
              </td>
              <td>{initialInvestment + el.yearlyContribution * el.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
