import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import { InvestmentForm } from "./components/InvestmentForm";
import { InvestmentsTable } from "./components/InvestmentsTable";
import { LayoutWrapper } from "./components/Layout";

function App() {
  const [data, setData] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState(0);
  const calculateHandler = (userInput) => {
    setInitialInvestment(userInput["current-savings"]);
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
        yearlyContribution: yearlyContribution,
      });
    }
    setData([...yearlyData]);
  };

  return (
    <LayoutWrapper logo={logo}>
      <InvestmentForm calculateHandler={calculateHandler} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentsTable data={data} initialInvestment={initialInvestment} />
    </LayoutWrapper>
  );
}

export default App;
