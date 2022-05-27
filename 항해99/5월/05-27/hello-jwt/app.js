const jwt = require('jsonwebtoken');

const token = jwt.sign({ test: true }, 'my-secret-key');

console.log(token);

const decoded = jwt.verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0Ijp0cnVlLCJpYXQiOjE2NTM2MjgzNDZ9.IAckiEMIQ5iVwy134fusxcVnttYxPZK5wcI4M_HVW34',
    'my-secret-key'
);

console.log(decoded);
