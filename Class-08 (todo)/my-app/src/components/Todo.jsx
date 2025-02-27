export const Todo=()=>{

        function addtodobtn(){
            console.log("Btn click")
        }

        function updateinp(){
            console.log("Update")
        }
    return(
        <div>

            <div className="flex w-[80%] mt-[3%] gap-2  mx-auto">
                <input onChange={updateinp} className="border-2 border-black flex-1 h-[50px] rounded-lg p-4" type="text" placeholder="Enter Task..." />
                <button onClick={addtodobtn} className=" text-white bg-green-500 px-4 p-2 rounded-lg hover:bg-green-700">Add task</button>
            </div>


            <div className="flex w-[80%] mt-[1.5%] gap-2 p-2 mx-auto bg-slate-100 cursor-not-allowed hover:bg-slate-200">
                <ul>
                    <li className="text-slate-800 rounded-lg">
                        Tea time
                    </li>
                </ul>
            </div>

        </div>
    )
}