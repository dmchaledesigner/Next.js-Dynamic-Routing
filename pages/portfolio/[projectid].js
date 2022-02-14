import { useRouter } from 'next/router';

const PortfolioItem = () => {


    const router = useRouter();

    console.log(router.pathname); // returns the pathname with the projectid pathname
    console.log(router.query); // returns the object with the key value pair of the id name and its value
    console.log(router.query.projectid) // will return the value of the url typed as its id`




    //send a  request to an api
    // fetch the data that contains the router.query.projectid to publish the data from that specific ID to the markup of this page


    return (
        <div>
            <h1>The Portfolio Item Template</h1>
            <p><span>{router.query.projectid}</span></p>
        </div>
    );
}

export default PortfolioItem;