import Link from "next/Link";
import router from "next/router";


const clientsPage = () => {


    const clients = [
        {
            id: "max",
            client: "maximilian"
        },

        {
            id: "david",
            client: "davidmchale"
        },

    ]
    return (
        <div>
            <h2>This is the clients page</h2>
            {
                clients.map((client) => (
                    <li key={client.id}>
                        <Link href={`/clients/${client.id}`}>{client.client}</Link>
                    </li>
                ))
            }
        </div>
    );
}

export default clientsPage;