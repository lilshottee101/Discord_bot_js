const { discord } = require('discord.js');
module.exports = {
	name: 'bot',
	description: 'Change things about the bot at the moment its mood',
	execute(message, args, client) {
        if (!args.length) {
            message.channel.send(`You didn't provide any arguments, ${message.author}! Either mute or unmute`);
        }
        else if (args[0] === 'Happy') {
            message.guild.member(client.user).setNickname('Ping Pong')
        }
        else if (args[0] === 'angry') {
            message.guild.member(client.user).setNickname('Angry Bot')
        }
        else {
            message.channel.send('Invalid Arguments!')
        }
	},
};