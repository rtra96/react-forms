import { useState } from "react";
export default function Authenticate ( {token} ) {
    const [error, setError] = useState(null);
    const [sucessMessage, setSuccessMessage] = useState(null);

    async function handleClick() {
    try {
        const rsp= await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }})
        const info= await rsp.json();
        console.log(info);
        setSuccessMessage(info.message);
    }

    catch (err) {
        setError((err.message));
    }
}
    
    return <>
    <h2>Authenticate</h2>
    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>
    
    {successMessage & <p>{sucessMessage}</p>}
    </>
}