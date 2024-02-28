var express = require("express")
var router = express.Router()
const roomsController = require("../controllers/rooms")

//send all rooms, view all items
router.get("/", roomsController.index)
//send a room
router.get("/:id", roomsController.show)
// update room status
router.put("/:id", roomsController.updateRoom)

/// for future functionlity
// create a room
router.post("/", roomsController.newRoom)
// delete a room
// router.delete("/:id", roomsController.deleteRoom)

module.exports = router
