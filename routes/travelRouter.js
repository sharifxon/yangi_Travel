const {Router} = require('express')

const router = Router()
const {
    getAllTravels,
    getTravelById,
    addNewTravel,
    updateTravelById,
    deleteTravelbyId,

} =  require('../controllers/travelControllers')
const { updateMany } = require('../models/travelModel')

router.get('/', getAllTravels)
router.get('/:id', getTravelById)
router.post('/add', addNewTravel)
router.put('/:id', updateTravelById)
router.delete('/:id', deleteTravelbyId)

module.exports = router