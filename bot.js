const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("614178827022761986")
setInterval(function() {
channel.send(`استخفر الله`);
}, 30)
})

client.login(process.env.BOT_TOKEN);