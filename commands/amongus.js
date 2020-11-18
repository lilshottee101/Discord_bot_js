module.exports = {
	name: 'amongus',
	description: 'Among Us help',
	execute(message, args) {
        const channel = message.channel;
        const members = channel.members;
		if (!args.length) {
			return channel.send(`You didn't provide any arguments, ${message.author}! Either mute or unmute`);
		} else if (args[0] === 'mute') {
			members.forEach(member => {
                member.voice.setMute(true);
            });
            message.channel.send('Server muted');
		} else if (args[0] === 'unmute') {
			members.forEach(member => {
                member.voice.setMute(false);
            });
            message.channel.send('Server unmuted');
		}

		message.channel.send(`Invalid Arguments! Either mute or unmute`);
	},
};