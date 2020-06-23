<<<<<<< HEAD
"use strict";

const Continents = require("../models/Continents");

// Agregar el continente
async function createContinent(request, h) {
  try {
    // Obtener el objeto enviado
    const continents = new Continents(request.payload);
    // guardar ese objeto
    const continentsSave = await continents.save();
    return h.response(continentsSave).code(201);
  } catch (error) {
    return h.response(error).code(500);
  }
}
// Listar los continentes
async function getAllContinents(request, h) {
  try {
    // Buscar todos los objetos
    const continents = await Continents.find();
    return h.response(continents).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function getContinent(request, h) {
  try {
    // Buscar por id
    const continent = await Continents.findById(request.params.id);
    return h.response(continent).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function editContinent(request, h) {
  try {
    // Actualizar enviando primero el id, después el contenido y al final mostrar el objeto actualizado
    const updateContinent = await Continents.findByIdAndUpdate(
      request.params.id,
      request.payload,
      { new: true }
    );
    return h.response(updateContinent).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function deleteContinent(request, h) {
  try {
    // Eliminar enviando primero el id
    const deleteContinent = await Continents.findByIdAndDelete(
      request.params.id
    );
    return h.response(deleteContinent).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function query(request, h) {
  try {
    // Buscar todos los objetos
    const countries = await Continents.find({
      continent: request.params.continent,
    });
    return h.response(countries).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

module.exports = {
  createContinent: createContinent,
  getAllContinents: getAllContinents,
  getContinent: getContinent,
  editContinent: editContinent,
  deleteContinent: deleteContinent,
  query: query,
};
=======
'use strict';

const continent = require('../controller/continent');

module.exports = [
  // Agregar el continente
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'POST',
    path: '/continents',
    handler: continent.createContinent,
  },
  // Listar los continentes
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/continents',
    handler: continent.getAllContinents,
  },
  // Buscar un continente por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/continents/{id}',
    handler: continent.getContinent,
  },
  // Editar un continente por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'PUT',
    path: '/continents/{id}',
    handler: continent.editContinent,
  },
  // Eliminar un continente por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'DELETE',
    path: '/continents/{id}',
    handler: continent.deleteContinent,
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/continent_countries/{continent}',
    handler: continent.query,
  },
];
>>>>>>> cb24098a8f4f586519f364807f7d4e923f56f39f
