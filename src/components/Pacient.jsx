const Pacient = () => {
	return (
		<div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Nombre: {""}
				<span className="font-normal normal-case">Hook</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Dueño: {""}
				<span className="font-normal normal-case">Esteban</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Email: {""}
				<span className="font-normal normal-case">correo@gmail.com</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Fecha Alta: {""}
				<span className="font-normal normal-case">10 Diciembre 2022</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Síntomas: {""}
				<span className="font-normal normal-case">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, rerum
					dolores natus sapiente blanditiis asperiores temporibus laudantium
					vero commodi a ipsam iure dolorum hic. Eos aperiam neque at quae
					officiis!
				</span>
			</p>
		</div>
	);
};

export default Pacient;
