import { Buttion } from "./Button";

export function Body(){
    return(
        <div>
            <h1>Body</h1>
            <Buttion text={"Buy now"} style={"bg-green-400 px-4 py-1 rounded-lg m-3 text-white hover:bg-green-700 duration-300"}/>
        </div>
    )
}