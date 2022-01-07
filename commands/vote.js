const discord = require('discord.js');

module.exports = {
    name: 'vote',
    execute(client, message, args){
        let VoteEmbed = new discord.MessageEmbed()
        .setAuthor('Vote!')
        .addField('Vote Link for Cerberus!', '[\`12h\`](https://top.gg/bot/759218208535609395/vote)', true)
        return message.channel.send(VoteEmbed)
    },
};