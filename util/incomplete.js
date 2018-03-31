
module.exports = (target, mission, message, client) => {

  let id = target.id;
  if (!contestData[id]) {
    return message.channel.send('That person isn\'t participating');
  } else {
    if(contestData[id][mission-1] == 0){
      return message.channel.send(`That mission hasn't been completed, make sure you entered the right one.`);
    }
    contestData[id][mission-1] = 0;
    return fs.writeFile('./assets/missions/playerData.json', JSON.stringify(contestData), function(err) {
      if (err) throw err;
    }).then(message.channel.send(`sent incompelte`));
  return message.channel.send(`changed array: ${contestData[`${id}`]}`);
  }
  return;
};
