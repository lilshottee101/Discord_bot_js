const { discord } = require('discord.js');
module.exports = {
	name: 'ban',
	description: 'Tag a member and ban them.',
	execute(message, args, member) {
		const user = message.mentions.users.first();
		if (member.hasPermission('BAN_MEMBERS')) {
			if (user) {
				const target = member.guild.member(user);
				if (target) {
					target.ban({ days: 0, reason: 'They deserved it' }).then(() =>{
						message.channel.send(`Successfully banned ${user.tag}`);
					}).catch(err =>{
						message.channel.send('I was unable to ban the member');
						console.log(err);
					});
				}
			}
		} else {
			message.channel.send('You don\'t have permission to run this command');
		}
	},
};