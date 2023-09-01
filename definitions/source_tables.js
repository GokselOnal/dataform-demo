const constants = require('includes/constants.js');


for (const tableName of constants.tableNames) {
  declare({
    database: constants.DATASET,
    schema: constants.SCHEMA,
    name: tableName
  });
}

