const fs = require('fs');
const bgdir = './assets/missions/bgs/';
// let contestData = JSON.parse(fs.readFileSync('./assets/missions/playerData.json', 'utf8'));


module.exports = (message, client) => {

  let id = message.author.id;
if(client.contestData.get(id)){
  return message.channel.send('You are already participating, use `-contest progress` to check your progress');
} else{
  let startData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3];
  client.contestData.set(id, startData);
  return message.channel.send(`test: ${id}: ${client.contestData.get(id)}`);
}
/*

  message.channel.send(`folder size: ${bgFolderSize}`);
  if (contestData[id]) {
  } else {
    contestData[id] = data;
    fs.writeFile('./assets/missions/playerData.json', JSON.stringify(contestData), function(err) {
      if (err) throw err;
    });
  }
return   message.channel.send(`first array: ${contestData[`${id}`]}`);
*/
  // client.contestData.set("foo", "bar");
  // return message.channel.send(`check: ${client.contestData.get("foo")}`);
};
