import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>View details</h1>
        </div>
    );
};

export default ViewDetails;