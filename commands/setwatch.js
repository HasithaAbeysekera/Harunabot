exports.run = function(client, args) {
  client.user.setPresence({
    game: {
      name: args.join(" "),
      type: "WATCHING"
    }
  }).then().catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['watching'],
  permLevel: 4
};

exports.help = {
  name: 'setwatch',
  description: 'Change Haruna\'s status to watching [something]',
  usage: 'setwatch [something]'
};
