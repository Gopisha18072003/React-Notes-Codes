import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();


  function handleClose() {
    navigate("../");
  }

  const params = useParams();

  const {mutate} = useMutation({
    mutationFn: updateEvent,
    onMutate: async(data) => {
      const newEvent = data.event;
      await queryClient.cancelQueries(['events', params.id]);
      const previousQuery = queryClient.getQueryData(['events', params.id]);
      queryClient.setQueryData(['events', params.id], newEvent);
      return {previousQuery}
    } ,
    onError: (error, data, context) => {
      queryClient.setQueryData(['events', params.id], context.previousQuery);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id])
    }
  })

  function handleSubmit(formData) {
    mutate({id: params.id, event: formData});
    navigate('../')
  }



  const { data, isPending, isError, error } = useQuery({
    queryKey: ["event", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }
  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load the event"
          message={
            error.info?.message ||
            "Failed to load event. Please check your input and try again."
          }
        />
        <div className="form-actions">
          <Link to='..\' className="button">
          Okay
          </Link>

        </div>
      </>
    );
  }

  if(data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    )
  }
  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}

export function loader({params}) {
  return queryClient.fetchQuery({
    queryKey: ["event", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  })
}