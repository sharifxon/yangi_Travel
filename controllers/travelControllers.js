const { response } = require('express')
const Travel = require('../models/travelModel')

// CRUD

// method get
//  get all travel
const getAllTravels = async (req, res) => {
    const travels = await Travel.find()

    res.status(200).json({
        message: 'success',
        travels
    })
}
// method get
//  get ById travel
const getTravelById = async (req, res) => {
    try {
      const travel = await Travel.findById(req.params.id);
      if (!travel) {
        return res.status(404).json({
          message: 'Travel not found',
        });
      }
      
      res.status(200).json({
        message: 'success',
        travel
      
      });
    } catch (error) {
      console.error(error);
      
    }
  };

//method post
// add new travel
const addNewTravel = async (req, res) => {
    const {image, title, description} = req.body

    const newTravel = await Travel.create({
        image,
        title,
        description,
    })
    res.status(201).json({
      message: 'Success',
        newTravel
    })
}

// method  put
// update travel by id
const updateTravelById = async (req, res) => {
  const {image, title, description} = req.body

  const  updateTravel = await Travel.findByIdAndUpdate(req.params.id, {
    image,
    title,
    description
  })

  res.status(200).json({
    message: 'success',
    updateTravel
  })
}

// method delete
// deleteTravel by id
const deleteTravelbyId =  async (req, res) => {
  await Travel.findByIdAndRemove(req.params.id)

  res.status(200).json({
    message: 'success',
  })
}

module.exports = {
    getAllTravels,
    getTravelById,
    addNewTravel,
    updateTravelById,
    deleteTravelbyId,
}