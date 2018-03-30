const fs = require('fs');
const bgdir = './assets/missions/bgs/';
let contestData = JSON.parse(fs.readFileSync('./assets/missions/playerData.json', 'utf8'));
module.exports = (message, client) => {
  let id = message.author.id;

  bgFolderSize = bgdir.length;

  message.channel.send(`folder size: ${bgFolderSize}`);
  let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3];
  if (contestData[id]) {
    return message.channel.send('You are already participating, use `-contest progress` to check your progress');
  } else {
    contestData[id] = data;
    fs.writeFile('./assets/missions/playerData.json', JSON.stringify(contestData), function(err) {
      if (err) throw err;
    });
  }
  message.channel.send(`first array: ${contestData[`${id}`]}`);
};
