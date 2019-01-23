var jimp = require('jimp');
var bg = './assets/missions/bg.jpg';

exports.run = function(client, message, args) {

  var images = [];
  for (i = 1; i < 26; i++) {
    images.push(`./assets/missions/bgs/${i}.jpg`);
  }
  images.push(bg);
  message.channel.send(images);


  var jimps = [];
  for (j = 0; j < images.length; j++) {
    jimps.push(jimp.read(images[j]));
  }
  Promise.all(jimps).then(function(data) {
    return Promise.all(jimps);
  }).then(function(data) {

    /*
    for (k = 0; k < 25; k++) {
      data[k].composite(data[26], 0, 0);
      data[k].composite(data[26], 49, 0);
      data[k].composite(data[27], 0, 0);
      data[k].composite(data[27], 0, 49);
      data[k].write(`${k}.jpg`);
    }
    */

    for (k = 0; k < 25; k++) {
      data[25].composite(data[k], (k % 5) * 50, (Math.floor(k / 5)) * 50)
    }
    data[25].write('final.jpg');
  });

};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'card',
  description: 'For contest (WIP)',
  usage: 'card'
};
