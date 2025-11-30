import { useEffect, useState } from "react";
import { url } from "../../shared";
import CryptoCard from "../../components/CryptoCard";

export default function Home() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(
            `${url}`,
        )
            .then((response) => {
                if (response.status === 404) return;
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setResults(data);
            });
    }, []);

    return (
        <>
            <h1>HOME PAGE</h1>

            {results ? (
                <div className="flex flex-col gap-3 justify-between">
                    {results.map((crypto) => (
                        <CryptoCard
                            details={crypto}
                            key={crypto.id}
                            id={crypto.id}
                        />
                    ))}
                </div>
            ) : null}
        </>
    );
}
