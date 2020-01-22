exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, 
          VIN: '6G9592703U6171B59', 
          Make: 'Ford',
          Model: 'F-350 Super Duty',
          Mileage: 201017,
          Title: 'clean',
          Automatic: 0,
          Manual: 1
         },
        { id: 2, 
          VIN: '2D98924S20749B233',
          Make: 'Chevrolet',
          Model: 'Silverado 3500HD',
          Mileage: 56215,
          Title: 'clean',
          Automatic: 0,
          Manual: 1
        },
        { id: 3, 
          VIN: 'DW30A69Y72U45Z626',
          Make: 'Dodge',
          Model: 'Ram Pickup 1500',
          Mileage: 106771,
          Title: 'clean',
          Automatic: 0,
          Manual: 1  
        }
      ]);
    });
};