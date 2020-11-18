module.exports = {
	name: 'boop',
	description: 'Boop!',
	execute(message, member) {
		message.channel.send('Beep.');
	},
};