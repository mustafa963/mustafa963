const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("666897245337026571")
setInterval(function() {
channel.send(`blablabla`);
}, 30)
})

client.login(process.env.BOT_TOKEN);