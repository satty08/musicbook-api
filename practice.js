const jwt = require('jsonwebtoken')

id = "6020daee3444b11e4cf62868"

const token = jwt.sign({ _id: id  }, 'thisissecretkey')
console.log(token);

const decoded = jwt.verify(token, 'thisissecretkey')

console.log(decoded);
console.log(process.env.JWT_SECRET);