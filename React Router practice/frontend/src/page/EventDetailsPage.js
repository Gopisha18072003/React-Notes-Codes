import {
  redirect,
  useRouteLoaderData,
  defer,
  json,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";
export default function EventDetails() {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: "center" }}> Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json(); // returns a response object
    return resData.event;
  }
}

export async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Unable to fetch data" }), {
    //   status: 500,
    // });
    return json(
      { message: "Unable to fetch data" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json(); // returns a response object
    return resData.events;
    // anything returend in this function will be available in the component
    // return response;
    // useLoaderData extracts data from the response object
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    // method: 'DELETE',
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      { message: "Could not delete selected event." },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
}
