const knex = require('./knex');

module.exports = {
    findById: (id) => knex().select().from('events').where({id}),
    update: (id, data) => knex().from('events').update(data).where({id}).returning('*'),
    insert: (data) => knex().insert(data).into('events').returning('*'),
    remove: (id) => knex().from('events').where({id}).del(),
    findAll: () => knex().select().from('events')
};