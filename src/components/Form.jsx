const Form = () => {
	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
			<p className="text-lg mt-5 text-center mb-10">
				Añade pacientes y {""}
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>
			<form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
				<div className="mb-5">
					<label
						htmlFor="name"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Mascota
					</label>
					<input
						type="text"
						id="name"
						placeholder="Nombre de la Mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="owner"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Dueño
					</label>
					<input
						type="text"
						id="owner"
						placeholder="Nombre del Dueño"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
						placeholder="Email Contacto"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="alta"
						className="block text-gray-700 uppercase font-bold"
					>
						Alta
					</label>
					<input
						id="alta"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="block text-gray-700 uppercase font-bold"
					>
						Síntomas
					</label>
					<textarea
						id="sintomas"
						className="border-2 h-20 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los Síntomas"
					/>
				</div>
				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
					value="Añadir Paciente"
				/>
			</form>
		</div>
	);
};

export default Form;
