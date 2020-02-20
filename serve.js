const express = require ("express")
const server = express()
const nunjucks = require("nunjucks")

server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))

nunjucks.configure("./", {
  express: serve,
  noCache: true
})

const donors = [
  {
    name: "Mikael Arthur",
    blood: "AB+"
  }
]

server.get("/", function(req, res){
  return res.render("index.html",{ donors })
})

server.post("/", function(req, res){
  const name = req.body.name
  const email = req.body.email
  const blood = req.body.blood

  donor.push({
    name,
    blood,
  })

  return res.redirect("/")
})

serverk.listen(3000)