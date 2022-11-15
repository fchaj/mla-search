import { useState } from "react";
import { MLADisplay } from "./MLADisplay";
import useFetchfromApi from "./useFetchfromApi"
import { RootObject } from "./SharedObjects"

export function SearchandDisplay(){
    const [zipcode, setZipcode] = useState<string>("");
    const {searchResult, loadingMessage, errorMessage} = useFetchfromApi(zipcode);
    
    return(
        <>
            <p className="font-normal text-gray-700 dark:text-gray-400 m-4">Find Your MLA</p>
            <input type="text" defaultValue={zipcode} id="zipinput" className="m-4" onChange={e => {setZipcode(e.target.value);}}/>
            {!searchResult ? <p className="font-normal text-gray-700 dark:text-gray-400 m-4">{"Enter a Valid Postal Code"}</p> : null}
            <p className="font-normal text-gray-700 dark:text-gray-400 m-4">{loadingMessage}</p>
            <p className="font-normal text-gray-700 dark:text-gray-400 m-4">{errorMessage}</p>
            {searchResult ? searchResult.map((item: RootObject) => (MLADisplay(item))) : null}
        </>
    )
}