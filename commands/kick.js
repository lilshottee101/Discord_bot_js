const { discord } = require('discord.js');
module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them.',
	execute(message, args, member) {
		const user = message.mentions.users.first();
		if (member.hasPermission('KICK_MEMBERS')) {
			if (user) {
				const target = member.guild.member(user);
				if (target) {
					target.kick('You where kicked!!').then(() =>{
						message.channel.reply(`Successfully Kicked ${user.tag}`);
					}).catch(err =>{
						message.channel.reply('I was unable to kick the member');
						console.log(err);
					});
				}
			}
		} else {
			message.channel.reply('You don\'t have permission to run this command');
		}
	},
};