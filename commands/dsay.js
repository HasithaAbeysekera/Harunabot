const defaultChannelID = require("../config.json").defaultChannel;
const ownerid = require("../config.json").ownerid;

exports.run = function(client, message, args) {
  if(message.channel.type == 'dm'){
    if(message.author.id != ownerid){
      return message.channel.send("Error: you don't have permission to use this command");
    } else {
    thisGuild = client.guilds.first();
    let channelToSend = thisGuild.channels.find(u => u.id == defaultChannelID);
    return channelToSend.send(args.join(" "));
    }
  }
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
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'dsay',
  description: 'Haruna will talk in the mentioned channel, default if no channel is mentioned',
  usage: 'dsay2 [channel] [message]'
};
