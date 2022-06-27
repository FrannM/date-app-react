import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ setPatients, patients, patient }) => {
	const [name, setName] = useState("");
	const [owner, setOwner] = useState("");
	const [email, setEmail] = useState("");
	const [Date, setDate] = useState("");
	const [symptoms, setSymptoms] = useState("");

	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(patient).length > 0) {
			setName(patient.name);
			setOwner(patient.owner);
			setEmail(patient.email);
			setDate(patient.Date);
			setSymptoms(patient.symptoms);
		}
	}, [patient]);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Form Validation
		if ([name, owner, email, Date, symptoms].includes("")) {
			setError(true);
			return;
		}

		const generateId = () => {
			return Math.random().toString(36).substr(2, 9);
		};

		// Patient Object
		const objectPatient = {
			name,
			owner,
			email,
			Date,
			symptoms,
			id: generateId(),
		};

		setPatients([...patients, objectPatient]);

		// Reset Form
		setName("");
		setOwner("");
		setEmail("");
		setDate("");
		setSymptoms("");

		// Scroll to top
		window.scrollTo(0, 0);

		// Set error to false
		setError(false);
	};

	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h2 className="font-black text-3xl text-center">Patient Monitoring</h2>
			<h1 className="text-lg mt-5 text-center mb-10">
				Add Patients and {""}
				<span className="text-indigo-600 font-bold">Manage them</span>
			</h1>
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
			>
				<h1>
					{error && (
						<Error>
							<p>Please fill all the fields</p>
						</Error>
					)}
				</h1>
				<div className="mb-5">
					<label
						htmlFor="petName"
						className="block text-gray-700 uppercase font-bold"
					>
						Pet Name
					</label>
					<input
						type="text"
						id="petName"
						placeholder="Pet Name"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="owner"
						className="block text-gray-700 uppercase font-bold"
					>
						Owner Name
					</label>
					<input
						type="text"
						id="owner"
						placeholder="Owner Name"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={owner}
						onChange={(e) => setOwner(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block text-gray-700 uppercase font-bold"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						placeholder="Contact Email"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="Date"
						className="block text-gray-700 uppercase font-bold"
					>
						Date
					</label>
					<input
						id="Date"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={Date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="symptoms"
						className="block text-gray-700 uppercase font-bold"
					>
						Symptoms
					</label>
					<textarea
						id="symptoms"
						className="border-2 h-20 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe the symptoms"
						value={symptoms}
						onChange={(e) => setSymptoms(e.target.value)}
					/>
				</div>
				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
					value="Add Pacient"
				/>
			</form>
		</div>
	);
};

export default Form;
