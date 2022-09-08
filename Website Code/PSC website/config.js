const fs = require('fs');
const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "tanvir.mysql.database.azure.com",
      user: "tb1264",
      password: "Kutta9ikan",
      database: "pennystocks",
      ssl: {ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
    },
    listPerPage: 10,
  };
  module.exports = config;