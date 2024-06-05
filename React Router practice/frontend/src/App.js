// Challenge / Exercise
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/RootLayout.js";
import Home from "./page/Homepage.js";
import EventDetails from "./page/EventDetailsPage.js";
import NewEvent from "./page/NewEventPage.js";
import Events from "./page/Eventspage.js";
import EditEvent from "./page/EditEventPage.js";


// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <Home />},
      { path: "/events", element: <Events /> },
      { path: "/events/:eventId", element: <EventDetails /> },
      { path: "/events/new", element: <NewEvent /> },
      { path: "/events/:eventId/edit", element: <EditEvent /> },
    ],

  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
