exports.proyectoshome = (req, res) => {
	res.render("index.pug", {
		nombrePagina: "Proyectos"
	});
};

exports.formularioProyecto = (req, res) => {
	res.render("nuevo-proyecto", {
		nombrePagina: "Nuevo Proyecto"
	});
};
exports.nuevoProyecto = (req, res) => {
	//validar que tengamos algo en el input
	const { nombre } = req.body;
	let errores = [];
	if (!nombre) {
		errores.push({ texto: "Agregar un nombre al proyecto" });
	}
	if (errores.length > 0) {
		res.render("nuevo-proyecto", {
			nombrePagina: "Nuevo Proyecto",
			errores
		});
	}
	console.log(req.body);
};
exports.nosotros = (req, res) => {
	res.render("nostros.pug");
};
