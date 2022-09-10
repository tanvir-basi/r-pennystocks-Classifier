const fs = require('fs');
const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "",
      user: "",
      password: "",
      database: "",
      ssl: {ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
    },
    listPerPage: 10,
  };
  module.exports = config;
