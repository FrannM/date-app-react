import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import PatientList from "./components/PatientList";

function App() {
	const [patients, setPatients] = useState([]);
	const [patient, setPatient] = useState({});

	const deletePatient = (id) => {
		const updatedPatients = patients.filter((patient) => patient.id !== id);
		setPatients(updatedPatients);
	};

	return (
		<div className="container mx-auto mt-20">
			<Header />

			<div className="mt-12 md:flex overflow-auto">
				<Form
					patients={patients}
					setPatients={setPatients}
					patient={patient}
					setPatient={setPatient}
				/>
				<PatientList
					patients={patients}
					setPatient={setPatient}
					deletePatient={deletePatient}
				/>
			</div>
		</div>
	);
}
export default App;
