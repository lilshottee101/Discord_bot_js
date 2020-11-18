module.exports = {
	name: 'beep',
	description: 'Beep!',
	args: true,
	execute(message, args) {
		message.channel.send('Boop.');
	},
};