import { Buttion } from "./Button";

export function Header(){
    return(
        <div>
            Header
            <Buttion text={"Login"} style={"bg-blue-400 px-4 py-1 rounded-lg m-3 text-white hover:bg-blue-700 duration-300"}/>
        </div>
    )
}