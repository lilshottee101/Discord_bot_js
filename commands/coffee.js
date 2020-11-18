module.exports = {
	name: 'coffee',
	description: 'Serves Coffee',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === '1') {
            message.channel.send('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/hot-beverage_2615.png');
		} else if (args[0] === '2') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/263/hot-beverage_2615.png`);
		} else if (args[0] === '3') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/hot-beverage_2615.png`);
		} else if (args[0] === '4') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/hot-beverage_2615.png`);
		} else if (args[0] === '5') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/268/hot-beverage_2615.png`);
		} else if (args[0] === '6') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/hot-beverage_2615.png`);
		} else if (args[0] === '7') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/hot-beverage_2615.png`);
		} else if (args[0] === '8') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/257/hot-beverage_2615.png`);
		} else if (args[0] === '9') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/252/hot-beverage_2615.png`);
		} else if (args[0] === '10') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/hot-beverage_2615.png`);
		} else if (args[0] === '11') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/hot-beverage_2615.png`);
		} else if (args[0] === '12') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/57/hot-beverage_2615.png`);
		} else if (args[0] === '13') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/37/hot-beverage_2615.png`);
		} else if (args[0] === '14') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/mozilla/36/hot-beverage_2615.png`);
		} else if (args[0] === '15') {
			message.channel.send(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/softbank/145/hot-beverage_2615.png`);
		} else {
			message.channel.send('Not working!')
		}
	},
};