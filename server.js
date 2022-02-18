const fastify = require('fastify')()
fastify.register(require('./routes/students'), { prefix: '/students' })
//start the server
fastify.listen(8790, function (err, address) {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    else {
        console.log("Server is listening on port 8790")
    }
})
