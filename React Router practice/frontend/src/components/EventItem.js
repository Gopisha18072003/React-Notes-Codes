import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure want to delete ?');
    if(proceed) {
      submit(null, {method: 'delete'})
      // formData is null here, if action is defined in different route we can use action parameter 
      // and pass the id of the route
      // submit(null, {method: 'delete', action: 'route-id'})
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
