import {calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({input}) {
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultsData[0].valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

    return <table id="result">
        <thead>
            <tr>
                <th> Year </th>
                <th> Investment Value </th>
                <th> Interest (Year) </th>
                <th> Total Interest </th>
                <th> Investment Capital </th>
            </tr>
        </thead>
        <tbody>
            {
                resultData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(yearData.totalInterest)}</td>
                        <td>{formatter.format(yearData.totalAmountInvested)}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}