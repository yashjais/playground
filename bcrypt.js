const bcrypt = require('bcrypt')

const password = "$2b$10$XsjNRNopVbauWsEm3mxi8eH8pWCYtUyIneGqlJmp/UTCrWa9rVsTi"

bcrypt.compare('Yash123@', password) 
    .then(function(result) {
        console.log(result)
    })
    .catch(function (err) {
        console.log(err)
    })