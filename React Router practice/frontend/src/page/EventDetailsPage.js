import { useParams } from "react-router-dom"
export default function EventDetails() {
    const params = useParams();
    return <>
        <h1>The Event Details Page</h1>
        <h2>{params.eventId}</h2>
    </>
}