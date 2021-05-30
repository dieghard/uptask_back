exports.proyectoshome = (req, res) => {
	res.render("index.pug", {
		nombrePagina: "Proyectos"
	});
};

exports.nosotros = (req, res) => {
	res.render("nostros.pug");
};
