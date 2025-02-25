

export function MyButton(props){
    console.log(props)
    return(
        <div>
            <button className={`${props.style}`}>{props.text}</button>
        </div>
    )
}