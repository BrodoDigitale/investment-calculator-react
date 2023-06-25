import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

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
          return (
            <tr key={idx}>
              <td>{el.year}</td>
              <td>{formatter.format(el.savingsEndOfYear)}</td>
              <td>{formatter.format(el.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  el.savingsEndOfYear -
                    initialInvestment -
                    el.yearlyContribution * el.year
                )}
              </td>
              <td>
                {formatter.format(
                  initialInvestment + el.yearlyContribution * el.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
