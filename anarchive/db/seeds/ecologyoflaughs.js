
exports.seed = function(knex) {
    const fs = require('fs');
    const md5 = require('md5');
    const rsync = require('rsyncwrapper');

  return knex('gifverse')
    .then(async function () {
      // Copy to new file structure
      const source_path = 'ecologyoflaughs';
      const local_dest_path = 'assets/gifverse/';
      const source_images = fs.readdirSync(source_path);
      const images = [];
      for (i=0; i<source_images.length; i++) {
        var hash = md5(source_images[i]);
        var chunked = hash.match(/.{1,2}/g).slice(0,4).join('/');
        var new_path = local_dest_path + chunked;
        fs.mkdirSync(new_path, { recursive: true });
        var name = '/' + source_images[i];
        fs.copyFileSync(source_path + name, new_path + name);
        images.push(createImage(source_images[i], chunked));
      };

      function createImage(image, path) {
        return {
          name: image,
          path: path,
          type: 'ecologyoflaughs',
          filetype: image.split('.')[1]
        }
      };

      const ssh = 'senselab@webhosting2014.is.cc:/home/senselab/public_html/seedbank/anarchive/';
      const remote_dest = ssh + local_dest_path;
      await rsync({ src: local_dest_path, dest: remote_dest, ssh: true, recursive: true });

      // Inserts seed entries
      return knex('gifverse').insert(images);
    });
};
