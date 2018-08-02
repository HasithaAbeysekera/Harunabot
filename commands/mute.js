const ms = require('ms');
const silencedRole = require('../config.json').silencedrole;
let assets = require('../assets/assets.json');
exports.run = (client, message, args) => {
  let silenced = message.guild.roles.find(u => u.name == silencedRole);
  if (!silenced) {
    message.guild.createRole({
        name: `${silencedRole}`,
      }).then(role => console.log(`Created role ${role}`))
      .catch(console.error)
  };

  if (!message.mentions.users.first()) {
    return message.channel.send('Mention a user to mute');
  } else {
    member = message.mentions.members.first();

    let time = args.splice(1).join(' ');
    let validUnlocks = ['release', 'unmute'];
    if (!time) {
      return message.reply('You must set a duration for the mute in either hours, minutes or seconds');
    }
    if (validUnlocks.includes(time)) {

      member.removeRole(silenced).then(() => {
        message.channel.send(`${member} has been unmuted`);
        clearTimeout(client.lockit[member.id]);
        delete client.lockit[member.id];
      }).catch(error => {
        console.log(error);
      });
    } else {
      // foreach (r in member.roles.array()) {
      //   member.removeRole(r);
      // }
      member.roles.array().forEach(function(r) {
        member.removeRole(r);
      });
      // member.removeRole
      member.addRole(silenced).then(() => {
        // message.channel.send(`${target.user} has been muted for ${ms(ms(time), { long:true })}`, {
        message.channel.send(`${member} has been muted for ${ms(ms(time), { long:true })}`, {
          files: [{
            attachment: assets["muted"],
            name: 'muted.gif'
          }]
        }).then(() => {
          client.lockit[member.id] = setTimeout(() => {
            member.removeRole(silenced).then(message.channel.send(`Lockdown lifted. ${member} has been unmuted.`)).catch(console.error);
            delete client.lockit[member.id];
          }, ms(time));
        }).catch(error => {
          console.log(error);
        });
      });
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['silence'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Mutes or unmutes the mentionned user for a given length of time (WIP)',
  usage: 'mute [user] [time]'
};
