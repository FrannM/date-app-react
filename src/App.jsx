import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
	const [patients, setPatients] = useState([]);

	const take1Value = (value) => {
		console.log(value);
	};

	return (
		<div className="container mx-auto mt-20">
			<Header take1Value={take1Value} />
			<div className="mt-12 md:flex">
				<Form />
				<PatientList />
			</div>
		</div>
	);
}
export default App;
