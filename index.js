/*server.js*/
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('servers/home/en-home.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 6000, () => {
  console.log('JSON Server is running')
})
