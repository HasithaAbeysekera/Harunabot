const fs = require('fs');
let contestData = JSON.parse(fs.readFileSync('./assets/missions/playerData.json', 'utf8'));
module.exports = (target, mission, message, client) => {


  let id = target.id;
  if (!contestData[id]) {
    return message.channel.send(`That person isn\'t participating: id = ${id}`);
  } else {
    if(contestData[id][mission-1] == 1){
      return message.channel.send(`That mission has already been completed, make sure you entered the right one.`);
    }
    contestData[id][mission-1] = 1;
    return fs.writeFile('./assets/missions/playerData.json', JSON.stringify(contestData), function(err) {
      if (err) throw err;
    });
    return message.channel.send(`changed array: ${contestData[`${id}`]}`);
  }
  return;

};
