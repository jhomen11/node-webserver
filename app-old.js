const http = require('http')

http.createServer(( req, res ) => {
    res.write('Hola')
    res.end()
})
.listen( 8081 )

console.log('Server on', 8081);

