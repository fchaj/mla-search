import { useEffect, useState } from "react";
import axios from "axios";
import { RootObject } from "./SharedObjects"

export default function useFetchfromApi(zipcode : string) {
    const [searchResult, setSearchResult] = useState<RootObject[]>();
    const [loadingMessage, setLoadingMessage] = useState<string>();

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        if (zipcode.length === 6){
            findMLA(zipcode.toUpperCase(), signal);
        }
        return () => {controller.abort();} 
    }, [zipcode]);

    /**
     * Retrieves a JSON of representatives for a given ZIP code from the Open North API. Sets the JSON to searchResults if successful.
     * @param searchzip the ZIP code to query the Open North API with. 
     * @param signal the signal for the abort controller that will be used to cancel in-progress requests.
     */
    const findMLA = (searchzip: string, signal: AbortSignal) => {
        setLoadingMessage("Loading...");
        axios.get(`https://represent.opennorth.ca/postcodes/${searchzip}/`, {
            signal: signal
        })
            .then(function (response) {
                setSearchResult(response.data.representatives_centroid);
            })
            .catch(function (error) {console.log(error);})   
            .finally(function(){setLoadingMessage("");})
    }

    return {searchResult, loadingMessage}
}