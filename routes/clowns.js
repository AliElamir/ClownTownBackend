var express = require("express")
var router = express.Router()
const clownsController = require("../controllers/clowns.js")

//send all rooms, view all items
router.get("/", clownsController.index)
//send a room
router.get("/:id", clownsController.show)

// create a room
router.post("/", clownsController.newClown)
// delete a room
router.delete("/:id", clownsController.deleteClown)

module.exports = router
