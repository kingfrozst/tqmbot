const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("BOT listo!");
});

client.on("message", (message) => {
    if (message.content.startsWith("!tqm")) {
        message.channel.send("Te quiero mucho!!");
    }

});

client.login("YourToken");
