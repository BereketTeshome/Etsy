import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/product/:id" element={<ProductDetail />} />
				</Routes>
			</Router>
			<Footer />
		</>
	);
}

export default App;
