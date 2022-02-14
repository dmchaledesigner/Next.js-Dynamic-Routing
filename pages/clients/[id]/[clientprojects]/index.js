import { useRouter } from "next/router";


const SpecificClientsProjectPage = () => {

    const router = useRouter();
    console.log(router);



    const loadPRojectHandler = () => {
        /// load the data
        router.push({
            pathname: '/clients/[id]/projects/[clientprojects]/',
            query: {
                id: "max",
                clientprojects: 'project-a',
            }
        })
    }

    return (
        <div>
            <h2>Template page for the projects list for a specific client</h2>
            <button onClick={loadPRojectHandler}>Load project A</button>
        </div>
    );
}

export default SpecificClientsProjectPage;