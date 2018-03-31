exports.run = function(client, message, args) {
  let channels = message.guild.channels.array();
  for (i = 0; i < channels.length; i++) {
    message.channel.send(`${channels[i]}: ${channels[i].id}`);
    if (channels[i].id == 273307823432269825) {
      channels[i].setName('testgeneral');
    }
    // } else if(channels[i].id == 250882784439042048) {
    //   channels[i].setName('oldollo');
    // } else {
    //
    // }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [''],
  permLevel: 3
};

exports.help = {
  name: 'test',
  description: 'APRIL FIIIIIIIRST',
  usage: 'aprilfools'
};
