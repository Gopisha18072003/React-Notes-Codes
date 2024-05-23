export default function Error({title, message}) {
    const divStyle = {
        width: "20rem",
        padding: "0.5rem 2rem",
        backgroundColor: "red",
        margin: "auto",
        borderRadius: "1rem"

    }
    return (
        <div className="error" style={divStyle}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}