const axios = require('axios');

axios.get('http://localhost:3000/hello').then(resp => {
    console.log('message received ',resp)
})