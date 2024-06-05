import EventsList from "../components/EventsList"

const EVENTS = [
    {id: 1, image: '/dummy.jpg', title: 'Event 1', date: '12/08/2024'},
    {id: 2, image: '/dummy.jpg', title: 'Event 2', date: '19/02/2024'},
    {id: 3, image: '/dummy.jpg', title: 'Event 3', date: '22/11/2024'},
    {id: 4, image: '/dummy.jpg', title: 'Event 4', date: '09/07/2024'},
]
export default function Events() {
    return <>
        <h1>The Events Page</h1>
        <EventsList events={EVENTS}/>
    </>
}