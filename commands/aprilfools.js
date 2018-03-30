exports.run = function(client, message, args) {
  var memberList = message.guild.first().members.array();
  let names = ["Shimarin", "HolotheWise", "WongSongMong", "AllenCantCount", "TrapsAreGay", "Poi", "REEEEEEEEEEEEEEEEE", "LoliLover"];
  for (i = 0; i < memberList.length; i++) {
    if (!memberList[i].roles.find(u => u.name == "Admirals")) {
      var choice = Math.floor((Math.random() * names.length));
      memberList[i].setNickname(names[choice]);
    }
  }
  return console.log("done");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [''],
  permLevel: 3
};

exports.help = {
  name: 'aprilfools',
  description: 'APRIL FIIIIIIIRST',
  usage: 'aprilfools'
};
