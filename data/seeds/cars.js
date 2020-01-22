exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, 
          VIN: '6G9592703U6171B59', 
          make: 'Ford',
          model: 'F-350 Super Duty',
          mileage: 201017,
          cleanTitle: 'true'
         },
        { id: 2, 
          VIN: '2D98924S20749B233',
          make: 'Chevrolet',
          model: 'Silverado 3500HD',
          mileage: 56215,
          cleanTitle: 'true'
        },
        { id: 3, 
          VIN: 'DW30A69Y72U45Z626',
          make: 'Dodge',
          model: 'Ram Pickup 1500',
          mileage: 106771,
          cleanTitle: 'true'
        }
      ]);
    });
};