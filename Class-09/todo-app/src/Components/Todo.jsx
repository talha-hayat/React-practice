import { useState } from "react"

export const Todo=()=>{
    let [inp,setInp] = useState("")
    let [task,setTask] = useState([])


    function addtodobtn(){
        console.log("Btn click",task)
        setTask([...task, inp])
    }

    function updateinp(val){
        // console.log("Update",val)
        setInp(val)
    }
return(
    <div>

        <div className="flex w-[80%] mt-[3%] gap-2  mx-auto">
            <input onChange={(e)=>{updateinp(e.target.value)}} className="border-2 border-black flex-1 h-[50px] rounded-lg p-4" type="text" placeholder="Enter Task..." />
            <button onClick={addtodobtn} className=" text-white bg-green-500 px-4 p-2 rounded-lg hover:bg-green-700">Add task</button>
        </div>


        <div className="w-[80%] mt-[1.5%] gap-2 p-2 mx-auto">
            <ul>
            {
                task.map((task,index)=>{
                    return(
                        <li key={index} className="text-slate-800 w-[100%] rounded-xl bg-slate-100 p-[10px] mb-[10px] h-[50px] cursor-not-allowed hover:bg-slate-200">{task}</li> 
                    )
                })
            }
            </ul>
        </div>

    </div>
)
}