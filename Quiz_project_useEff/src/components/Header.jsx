import Logopng from '../assets/quiz-logo.png'

export default function Header() {
    return <header>
        <img src={Logopng} alt="Quiz Logo" />
        <h1>React Quiz</h1>
    </header>
}