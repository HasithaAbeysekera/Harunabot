exports.run = (client, message) => {
    message.channel.send('Ping?')
        .then(msg => {
            msg.edit(`Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms). はい、榛名は大丈夫です`);
        });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pong'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Displays bot\'s current ping',
  usage: 'ping'
};
