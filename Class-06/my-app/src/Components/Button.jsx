export function Buttion(props){
    return(
        <button className={`${props.style} `}>
           {props.text}
        </button>
    )
}