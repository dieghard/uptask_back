const { Sequelize } = require("sequelize");
// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("uptasknode", "root", "", {
	host: "localhost",
	dialect: "mysql",
	port: "3306",
	define: {
		timestamps: false
	}
});
