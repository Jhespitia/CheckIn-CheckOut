const express = require('express');

//Controllers
const { 
    getAllRegistries,
    createRegistry,
    getRegistryById,
    updateRegistry,
    cancelRegistry } = require('../Controllers/registries.controller');

//Middlewares
const { createRegistryValidators } = require('../Middlewares/validators.middleware');


//Define Endpoint's Routes
const registriesRouter = express.Router();

registriesRouter.get('/', getAllRegistries);

registriesRouter.post('/', createRegistryValidators, createRegistry);

registriesRouter.get('/:id', getRegistryById);

registriesRouter.patch('/:id', updateRegistry);

registriesRouter.delete('/:id', cancelRegistry);

module.exports = {registriesRouter};

