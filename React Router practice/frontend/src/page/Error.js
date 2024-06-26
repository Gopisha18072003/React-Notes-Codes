import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong';

    if(error.status === 500) {
        // message = JSON.parse(error.data).message;
        message = error.data.message;
    }else if(error.status === 404) {
        title = 'Not Found!';
        message = 'Could not found resourse or page'
    }
    return <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
}