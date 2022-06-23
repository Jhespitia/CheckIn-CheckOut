//Models
const { Registry } = require('../Models/registry.model');

//Utils
const { catchAsync } = require('../Utils/catchAsync.util');


const getAllRegistries = catchAsync(async (req, res) => {
    const registries = await Registry.findAll();
    res.status(200).json({
        status: 'success',
        message: 'All Registries',
        registries,
    });
});

const createRegistry = catchAsync(async (req, res) => {
    const { entranceTime, exitTime } = req.body;

    const newRegistry = await Registry.create({
        entranceTime,
        exitTime,
    });
    res.status(201).json({
        status: 'success',
        message: 'Registry created successfully',
        newRegistry,
    });
});

const getRegistryById = catchAsync(async (req, res) => {
    const { id } = req.params;

    const registry = await Registry.findOne({ where: { id } });

    if (!registry) {
        return res.status(404).json({
            status: 'fail',
            message: 'Registry not found',
        });
    }

    res.status(200).json({
        status: 'success',
        message: 'Registry found successfully',
        registry,
    });
});

const updateRegistry = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { exitTime, status } = req.body;

    const registry = await Registry.findOne({ where: { id } });

    if (!registry) {
        return res.status(404).json({
            status: 'fail',
            message: 'Registry not found',
        });
    }
    await registry.update({ exitTime, status });
    return res.status(200).json({
        status: 'success',
        message: 'Registry Updated',
    });
});

const cancelRegistry = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { exitTime, status } = req.body;

    const registry = await Registry.findOne({ where: { id } });

    if (!registry) {
        return res.status(404).json({
            status: 'fail',
            message: 'Registry not found',
        });
    }

    await registry.update({ exitTime, status });
    res.status(200).json({
        status: 'Updated',
        message: 'Registry Updated',
    })
});


module.exports = {
    getAllRegistries,
    createRegistry,
    getRegistryById,
    updateRegistry,
    cancelRegistry
};