const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

client.login('NjM0MTY4ODAzMzk5MzAzMTY4.Xael6w.ZyU-l81qaj6VrtRxCFhbSdLw4aI');