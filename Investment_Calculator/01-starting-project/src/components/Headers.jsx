import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return <header id="header">
        <h1>Investment Calculator</h1>
        <img src= {logo} alt="Logo of the app" />
    </header>
}