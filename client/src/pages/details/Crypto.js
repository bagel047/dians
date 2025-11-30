import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Crypto(props) {
    const { id } = useParams();
    const location = useLocation();
    const [details, setDetails] = useState(location.state?.details || null);


    useEffect(() => {

        if (!details) {
            fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setDetails(data);
                })
                .catch((e) => console.log(e));
        }
    }, [id, details]);

    return (

        <>


            <div className="flex flex-col gap-2">
                <div>
                    <img src={`${details?.image?.small}`} />
                </div>

                <h2 className="font-bold">Details for {details?.name}</h2>
                <div>
                    <h3 className="font-bold">{details?.name}</h3>
                    <p>Description: {details?.description?.en}</p>
                </div>
            </div>

        </>
    );
}