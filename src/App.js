import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Style/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// IMPORTS
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Support from "./pages/Support.jsx";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";

// IMPORTING ANIMATIONS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<div>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/service" component={Services} />
				<Route exact path="/support" component={Support} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
			</Switch>
		</div>
	);
}

export default App;
