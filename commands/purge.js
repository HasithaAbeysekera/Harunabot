const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
var getUser = require('../util/getUser.js');

exports.run = (client, message, args) => {
  if (!args[0]) {
    return message.channel.send("Please specify the amount of messages to delete and, if desired, a user");
  } else {
    amount = parseInt(args[0]);
    if (!amount) {
      return message.channel.send("Error: please specify a number of messages to delete");
    } else {
      if (!args[1]) { //no username specified
        message.channel.fetchMessages({
          limit: amount,
        }).then((messages) => {
          message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        });
        message.channel.send(`Deleting last ${amount} messages...`).then(msg => {
          msg.edit(`Successfully deleted ${amount} messages!`);
        });
      } else
      if (message.mentions.members.first()) {
        target = message.mentions.members.first();
        message.channel.fetchMessages({}).then((messages) => {
          if (target) {
            userMessages = messages.filter(m => m.author.id === target.id).array().slice(0, amount);
          }
          message.channel.bulkDelete(userMessages).catch(error => console.log(error.stack));
        });
        message.channel.send(`Deleting last ${amount} messages by user mentioned: ${target}`).then(msg => {
          msg.edit(`Successfully deleted ${amount} messages by ${target}!`);
        });
      } else {
        target = getUser(message, args[1]);
        if (!target) {
          message.channel.send(`Error: User not found`);
        } else {
          message.channel.fetchMessages({}).then((messages) => {
            if (target) {
              userMessages = messages.filter(m => m.author.id === target.id).array().slice(0, amount);
            }
            message.channel.bulkDelete(userMessages).catch(error => console.log(error.stack));
          });
          message.channel.send(`Deleting last ${amount} messages by user mentioned: ${target}`).then(msg => {
            msg.edit(`Successfully deleted ${amount} messages by ${target}!`);
          });
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clean'],
  permLevel: 1
};

exports.help = {
  name: 'purge',
  description: 'Removes last X messages from the channel. Can specify an optional user to only remove their messages.',
  usage: 'purge [number] [username]'
};
