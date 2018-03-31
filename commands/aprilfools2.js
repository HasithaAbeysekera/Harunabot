exports.run = function(client, message, args) {
  let channels = message.guild.channels.array();
  for (i = 0; i < channels.length; i++) {
    message.channel.send(`${channels[i]}: ${channels[i].id}`);
    // if (channels[i].id == 222658565075107840) {
    //   channels[i].setName('oldgeneral');
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
  name: 'aprilfools2',
  description: 'APRIL FIIIIIIIRST',
  usage: 'aprilfools'
};
