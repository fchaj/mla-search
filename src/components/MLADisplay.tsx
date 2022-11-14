import { RootObject } from "./SharedObjects"

export function MLADisplay(content : RootObject){
    return(
    <div className="flex flex-col items-center bg-white rounded-lg m-4 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full h-96 rounded-t-lg mt-0 mr-4 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={content.photo_url} alt="" />
        <div className="flex-col">
            <div className="flex flex-col justify-betweenleading-normal">
                <p className="font-bold text-gray-900 dark:text-white">Name:</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">{content.name}</p>
            </div>
            <div className="flex flex-col justify-between leading-normal">
                <p className="font-bold tracking-tight text-gray-900 dark:text-white">Email:</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">{content.email}</p>
            </div>
            <div className="flex flex-col justify-between leading-normal">
                <p className="font-bold tracking-tight text-gray-900 dark:text-white">District:</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">{content.district_name}</p>
            </div>
            <div className="flex flex-col justify-between leading-normal">
                <p className="font-bold tracking-tight text-gray-900 dark:text-white">Offices:</p>
                <ul className="ml-4 list-disc font-normal text-gray-700 dark:text-gray-400">
                    {content.offices.map(x => {return(
                        <li key={x.type}>{typeof x.postal !== 'undefined' ? `${x.postal}` : null}<br/>{typeof x.tel !== 'undefined' ? `${x.tel}` : null}</li>
                    )})}
                </ul>
            </div>
        </div>
    </div>     
    ) 
}