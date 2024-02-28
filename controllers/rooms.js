const mongoose = require("mongoose")
const { ObjectId } = require("mongodb")

const Room = require("../models/room")
// const Clown = require("../models/clown")

const index = async (req, res) => {
  //done
  try {
    let rooms = await Room.find()
    res.json(rooms)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const show = async (req, res) => {
  //done
  try {
    const room = await Room.findById(req.params.id).populate("clowns")
    res.json(room)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const newRoom = async (req, res) => {
  //done
  try {
    let newRoom = await Room.create(req.body)
    res.json(newRoom)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const updateRoom = async (req, res) => {
  try {
    req.body.status = true
    let room = await Room.updateOne({ _id: req.params.id }, req.body)
    res.json(room)
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = {
  updateRoom,
  newRoom,
  index,
  show,
}
