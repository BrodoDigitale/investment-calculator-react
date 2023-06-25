import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import { InvestmentForm } from "./components/InvestmentForm";
import { InvestmentsTable } from "./components/InvestmentsTable";
import { LayoutWrapper } from "./components/Layout";

function App() {
  const [data, setData] = useState([]);
  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        //yearlyContribution: yearlyContribution,
        totalInterest: yearlyInterest * (i + 1),
        totalInvestedCapital: yearlyContribution * (i + 1),
      });
    }
    setData([...yearlyData]);
  };

  return (
    <LayoutWrapper logo={logo}>
      <InvestmentForm calculateHandler={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentsTable data={data} />
    </LayoutWrapper>
  );
}

export default App;
