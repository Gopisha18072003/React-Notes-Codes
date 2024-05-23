
export default function UserInput({onChangeInput}) {
    
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Annual Investment</label>
                <input type="number" onChange = {(event) => onChangeInput('initialInvestment', event.target.value)} value={userInput.initialInvestment} required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Intial Investment</label>
                <input type="number" onChange = {(event) => onChangeInput('annualInvestment', event.target.value)} value={userInput.annualInvestment} required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" onChange = {(event) => onChangeInput('expectedReturn', event.target.value)} value={userInput.expectedReturn} required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Duration</label>
                <input type="number" onChange = {(event) => onChangeInput('duration', event.target.value)} value={userInput.duration} required/>
            </p>
        </div>
    </section>
}