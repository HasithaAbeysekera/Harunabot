const defaultChannelID = require("../config.json").defaultChannel;

exports.run = function(message, args) {
  if(!args[0]){
    return message.channel.send(`Error: message cannot be empty.`);
  }
  if (message.mentions.channels.first()) {
    channelToSend = message.mentions.channels.first();
    if(channelToSend != args[0]){
      return message.channel.send('Please mention the channel first before typing the message');
    }
    return channelToSend.send(args.slice(1).join(' '));
  } else {
    channelToSend = message.guild.channels.find(u => u.id == defaultChannelID);
    return channelToSend.send(args.join(" "));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'dsay',
  description: 'Haruna will talk in the mentioned channel, default if no channel is mentioned',
  usage: 'dsay2 [channel] [message]'
};
