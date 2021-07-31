import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Style/style.css";

// IMPORTS
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Support from "./pages/Support.jsx";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/service" component={Services} />
				<Route exact path="/support" component={Support} />
				<Route exact path="/about" component={About} />
			</Switch>
		</div>
	);
}

export default App;
