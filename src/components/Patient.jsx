const Patient = () => {
	return (
		<div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Name: {""}
				<span className="font-normal normal-case">Hook</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Owner: {""}
				<span className="font-normal normal-case">Juan</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Email: {""}
				<span className="font-normal normal-case">mail@mail.com</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Discharge Date: {""}
				<span className="font-normal normal-case">10 December 2022</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Symptoms: {""}
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

export default Patient;
