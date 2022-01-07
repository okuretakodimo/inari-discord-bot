const discord = require('discord.js');
const { execute } = require('./ping');

module.exports = {
    name: 'eval',
    async execute(client, message, args){
        if (client.users.cache !== "566819040161562655") {
            return message.channel.send("You cannot use this command!") && console.log(`User: ${message.author.id} attempted eval command.`);
        } else {
            
        }

    },
};