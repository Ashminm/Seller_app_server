const jsonServer=require('json-server')

const server=jsonServer.create()

const middleware=jsonServer.defaults()

server.use(middleware)

const router=jsonServer.router('db.json')

server.use(router)

const PORT=process.env.PORT || 8000

server.listen(PORT,()=>{
    console.log("Server is running:",PORT)
})
