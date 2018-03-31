const fs = require('fs');
let contestData = JSON.parse(fs.readFileSync('./assets/missions/playerData.json', 'utf8'));
let missions = JSON.parse(fs.readFileSync('./assets/missions/missions.json', 'utf8'));
module.exports = (target, mission, message, client) => {

  let id = target.id;
  if (!contestData[id]) {
    return message.channel.send('That person isn\'t participating');
  } else {
    missionStr = `**${target}: Missions left:\n\n`;
    if (i = 0; i < 25; i++) {
      if(contestData[id][i] == 0){
        missionStr = missionStr + `Mission ${i+1}: ${missions[i]}`;
      }
    }
    return message.channel.send(`missionStr`);
  }
  return;
};
