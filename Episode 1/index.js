const {Client, Message} = require("discord.js");

const client = new Client({
 disableEveryone:true
});

client.on('ready', () =>{
 console.log(`Hi, ${client.user.username} is online!`);
});

client.on('message', async message =>{
const prefix = ">"
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase()
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

if(cmd === "hi"){
    message.channel.send("hello")
}
if(cmd === "ping"){
    message.reply("Pong!")
}
});

client.login("TOKEN");