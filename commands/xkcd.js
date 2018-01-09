const Discord = require("discord.js");
const addHelpReaction = require('../util/addHelpReaction.js');
const ordinal = require('../util/ordinal.js');
const fs = require('fs');
let request = require("request");
let months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

exports.run = function(client, message, args) {
    if (!args[0]) { //!args[1]
      var apiURL = `https://xkcd.com/info.0.json`;
    }
    message.channel.send("Please wait while I grab the comic....");

    request({
        url: apiURL,
        json: true
      }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          console.log(body) // Print the json response
          let issueN = body["num"];
          let title = body["safe_title"];
          let img = body["img"];
          let caption = `${body["alt"]}\n`
          let picURL = `https://xkcd.com/${body["num"]}`
          let date = `Posted: ${months[body["month"]]} ${ordinal(body["day"])}, ${body["year"]}`
          const embed = new Discord.RichEmbed()
            .setTitle(title)
            .setImage(img)
            .setDescription(`${caption}\n`)
            .setFooter(`\n${date}`)
            .setURL(picURL)
            // .setTimestamp();
            message.channel.send(embed);
            }
        });
    };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 3
    };

    exports.help = {
      name: 'xkcd',
      description: 'Display\'s the user\'s avatar. Displays your own avatar if no username is provided',
      usage: 'xkcd [username]'
    };
