function Header({ take1Value }) {
	const headerVariable = true;

	take1Value(headerVariable);

	return (
		<>
			<h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
				Pacient Monitoring {""}
				<span className="text-indigo-600">Vet</span>
			</h1>
		</>
	);
}

export default Header;
