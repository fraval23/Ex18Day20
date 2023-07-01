

function Counter(){
    let [Count,setCount] = React.useState(27);
    const clickHandler=()=>{
        setCount(Count+1);
    }
    return(
        <div>
        <h1>Count:{Count}</h1>
        <button onClick={clickHandler}>Click me</button>
        </div>
    )
}
const domNode = document.getElementById('count');
const root = ReactDOM.createRoot(domNode);
root.render(<Counter/>)

