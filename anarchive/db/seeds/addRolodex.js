
exports.seed = function(knex) {
    const fs = require('fs');
    const md5 = require('md5');

  return knex('images')
    .then(function () {
      // Copy to new file structure
      const source_path = './cards';
      const source_images = fs.readdirSync(source_path);
      const images = [];
      for (i=0; i<source_images.length; i++) {
        var hash = md5(source_images[i]);
        var chunked = hash.match(/.{1,2}/g).slice(0,4).join('/');
        var new_path = './assets/images/' + chunked;
        fs.mkdirSync(new_path, { recursive: true });
        var name = '/' + source_images[i];
        fs.copyFileSync(source_path + name, new_path + name);
        images.push(createImage(source_images[i], chunked));
      };

      function createImage(image, path) {
        return {
          name: image,
          path: path,
          type: 'rolodex',
          filetype: image.slice(-3)
        }
      };

      // Inserts seed entries
      return knex('images').insert(images);
    });
};
