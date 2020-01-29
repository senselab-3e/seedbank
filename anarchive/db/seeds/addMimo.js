
exports.seed = async function(knex) {
  const fs = require('fs');
  const md5 = require('md5');
  const _ = require('lodash');

  function get_event_id(location) {
    return knex('events')
      .where({location: location})
      .first()
      .then(result => { return result['id']; })
  }

  function get_path(filename) {
    var hash = md5(filename);
    var chunked = hash.match(/.{1,2}/g).slice(0,4).join('/');
    var new_path = './assets/images/' + chunked;
    fs.mkdirSync(new_path, { recursive: true });
    var name = '/' + filename;
    fs.copyFileSync('./mimo/mimoTraces' + name, new_path + name);
    return chunked;
  }

  function createImage(row, event_id, path) {
    return {
      name: row[4],
      path: path,
      type: 'anarchival_trace',
      filetype: row[4].split('.')[1].toLowerCase(),
      event_id: event_id,
      tendencies: '[' + row[3] + ']',
      taken_at: '2019-' + row[2].slice(0,-3).replace(/\//g, '-') + ' ' + row[1].replace(/\./g, ':'),
      notes: row[5]
    }
  };

  async function run_query(line) {
      let row = line.split(',');

      // col 0 = 'location'
      // 1 = 'date'
      // 2 = 'time'
      // 3 = 'tendencies'
      // 4 = 'name'
      // 5 = 'notes'

      let event_id = await get_event_id(row[0]);
      return createImage(row, event_id, get_path(row[4]));
  };

  async function run_batch(batch) {
      return Promise.all(batch.map(run_query));
  } 

  const file = fs.readFileSync('./mimo/mimoTraces4.csv');
  const lines = file.toString().replace(/[\r]/g, '').split('\n').slice(1,); // skip csv header

  const batches = _.chunk(lines, 30);

  let images = [];
  for (i=0; i<batches.length; i++) {
    let results = await run_batch(batches[i]);
    images.push(...results);
  }

  console.log(images.length);

  // Inserts seed entries
  return knex('images').insert(images);

};
