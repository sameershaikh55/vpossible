// IMPORTS
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Style/style.css";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
