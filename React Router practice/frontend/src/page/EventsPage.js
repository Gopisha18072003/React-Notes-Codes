import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const  data= useLoaderData();
  // I can use useLoader inside any componet which are below EventsList in dom
  {
  }
  return <EventsList events={data} />;
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Unable to fetch data" }), {
    //   status: 500,
    // });
    return json({ message: "Unable to fetch data" },
      {
        status: 500,
      }
    );
  } else {

    const resData = await response.json();  // returns a response object
    return resData.events;
    // anything returend in this function will be available in the component
    // return response;
    // useLoaderData extracts data from the response object
  }
}
export default EventsPage;
