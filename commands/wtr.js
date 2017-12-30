const Discord = require("discord.js");
const fs = require('fs');
var validRegions = ["sea", "na", "eu", "ru"];
var request = require("request");
exports.run = function(client, message, args) {
  if (!args[0] || message.mentions.users.first()) { //!args[1]
    return message.channel.send("Invalid input, use the help commands for more details");
  } else {

    username = args[0].toLowerCase();

    var apiURL = `https://api.worldofwarships.asia/wows/account/list/?application_id=682fc0fd90551e7e6ee67aa0d40e2db8&search=${username}`;

    request({
      url: apiURL,
      json: true
    }, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        //console.log(body) // Print the json response
        if (!body["data"] || !body["data"][0]) {
          return message.channel.send("Error: no user found");
        }
        var nickname = body["data"][0].nickname;
        var accountId = body["data"][0].account_id;
        message.channel.send(`Grabbing WTR signature for ${nickname}...`);
        picURL = `https://asia.warshipstoday.com/signature/${accountId}/dark.png`
        // message.channel.send(`WTR image: ${picURL}`);
        message.channel.send(new Discord.Attachment(picURL, 'dark.png')).then(msg => {
          console.log("wtr image sent");
        }).catch(err => {
          console.log(err.stack);
        });
      }
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'wtr',
  description: 'Displays your WTR signature from warships.today',
  usage: 'wtr [username]'
};
