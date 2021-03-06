const Discord = require("discord.js");
const prefix = require('../config.json').prefix;
const addHelpReaction = require('../util/addHelpReaction.js');

exports.run = (client, message, args) => {
  if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
    return message.channel.send("I require the Manage Messages permission to use this function.");
  }
  if (!args[0]) {
    return message.channel.send("Please specify the amount of messages to delete and, if desired, a user. Click ❓ for more details").then(msg => {
      addHelpReaction(client, msg, message, exports.help.name);
    }).catch((err => {
      console.log(err.stack);
    }));
  } else {
    amount = parseInt(args[0]) + 1;
    if (amount <= 1 || amount > 100) {
      return message.channel.send("You need to input a number between 1 and 99. Click ❓ for more details").then(msg => {
        addHelpReaction(client, msg, message, exports.help.name);
      }).catch((err => {
        console.log(err.stack);
      }));
    }
    if (!amount) {
      return message.channel.send("Error: please specify a number of messages to delete. Click ❓ for more details").then(msg => {
        addHelpReaction(client, msg, message, exports.help.name);
      }).catch((err => {
        console.log(err.stack);
      }));
    } else {
      if (!args[1]) { //no username specified
        message.channel.fetchMessages({
          limit: amount,
        }).then((messages) => {
          message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        });
        message.channel.send(`Deleting last ${amount-1} messages...`).then(msg => {
          msg.edit(`Successfully deleted ${amount-1} messages!`);
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
        message.channel.send(`Deleting last ${amount-1} messages by user mentioned: ${target}`).then(msg => {
          msg.edit(`Successfully deleted ${amount-1} messages by ${target}!`);
        });
      } else {
        return message.channel.send("Error: User not found. Click ❓ for more details").then(msg => {
          addHelpReaction(client, msg, message, exports.help.name);
        }).catch((err => {
          console.log(err.stack);
        }));
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clean'],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Removes last X messages from the channel. Optional: specify a user to only remove their messages.',
  usage: 'purge [number] [username]'
};
