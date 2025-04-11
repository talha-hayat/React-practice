import { useState } from "react";

export function useToggle(){
    const [value,setValue] = useState(false)

    const toggle = ()=>{
        setValue(value => !value )
    }

    return [value,toggle]
}