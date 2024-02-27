// const Room = require("../models/room")
const Clown = require("../models/clown")

const index = async (req, res) => {
  //done
  try {
    let clowns = await Clown.find()
    res.json(clowns)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const show = async (req, res) => {
  //done
  try {
    const clown = await Clown.findById(req.params.id)
    res.json(clown)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const newClown = async (req, res) => {
  //done
  try {
    let newClown = await Clown.create(req.body)
    res.json(newClown)
  } catch (err) {
    res.json({ error: err.message })
  }
}

const deleteClown = async (req, res) => {
  try {
    // we get clown id from req.params.id
    let clownId = req.params.id
    await Clown.updateMany({ clowns: clownId }, { $pull: { clowns: clownId } })
    await Clown.deleteOne({ _id: clownId })
    res.json(true)
  } catch (err) {
    res.json({ error: err.message })
  }
}

module.exports = {
  deleteClown,
  newClown,
  index,
  show,
}
