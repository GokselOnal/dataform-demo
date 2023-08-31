const constants = require('includes/constants.js');

const declarations = [];

for (const tableName of constants.tableNames) {
  const declaration = declare({
    database: constants.DATASET,
    schema: constants.SCHEMA,
    name: tableName
  });
  
  declarations.push(declaration);
}

module.exports = declarations;