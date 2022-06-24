const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fs = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})
client.login("OTg2MDEwMTE3Nzk3NDYyMDk3.GC9zYT.V0rSj66ejn7jdvUVBU-ImlSQp6Zx4MUyVXX4EQ");
