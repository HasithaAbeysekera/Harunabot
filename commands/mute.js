const ms = require('ms');
const Discord = require("discord.js");
let getGuildMember = require('../util/getGuildMember.js');
const silencedRole = require('../config.json').silencedrole;
exports.run = (client, message, args) => {
  return message.channel.send("Sorry, this command is still in development");
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
    user = message.mentions.users.first();
    if (!client.lockit) client.lockit = [];
    let time = args.splice(1).join(' ');
    let validUnlocks = ['release', 'unmute'];
    if (!time) {
      return message.reply('You must set a duration for the mute in either hours, minutes or seconds');
    }
    if (validUnlocks.includes(time)) {

      let target = getGuildMember(message, user);
      target.removeRole(silenced).then(() => {
        message.channel.send(`${target.user} has been unmuted`);
        clearTimeout(client.lockit[target.id]);
        delete client.lockit[target.id];
      }).catch(error => {
        console.log(error);
      });

      // message.channel.overwritePermissions(message.guild.id, {
      //     SEND_MESSAGES: null
      // }).then(() => {
      //     message.channel.sendMessage('Lockdown lifted.');
      //     clearTimeout(client.lockit[message.channel.id]);
      //     delete client.lockit[message.channel.id];
      // }).catch(error => {
      //     console.log(error);
      // });
    } else {
      let target = getGuildMember(message, user);
      target.addRole(silenced).then(() => {
        message.channel.send(`${target.user} has been muted for ${ms(ms(time), { long:true })}`).then(() => {
          client.lockit[target.id] = setTimeout(() => {
            target.removeRole(silenced).then(message.channel.send('Lockdown lifted.')).catch(console.error);
            delete client.lockit[target.id];
          }, ms(time));
        }).catch(error => {
          console.log(error);
        });
      });

      // message.channel.overwritePermissions(message.guild.id, {
      //     SEND_MESSAGES: false
      // }).then(() => {
      //     message.channel.sendMessage(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {
      //
      //         client.lockit[message.channel.id] = setTimeout(() => {
      //             message.channel.overwritePermissions(message.guild.id, {
      //                 SEND_MESSAGES: null
      //             }).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
      //             delete client.lockit[message.channel.id];
      //         }, ms(time));
      //
      //     }).catch(error => {
      //         console.log(error);
      //     });
      // });
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
