const { useState } = React;

let Greeting = (props) => {
	let [name, setName] = useState(props.name);

	let clickHandler = () => {
    	setName("Hello Jane!");
	};

	return (
    	<div>
        	<h2>Hello World!</h2>
        	<h2>Name: {name}</h2>
        	<h2>State: {props.state}</h2>
        	<h3>Education: {props.education}</h3>
        	<button onClick={clickHandler}>Change Name</button>
    	</div>
	);
};

let root = ReactDOM.createRoot(document.getElementById('mydiv'));
root.render(<Greeting name="Hello XYZ" state="NewJersey" education="Masters" />);

