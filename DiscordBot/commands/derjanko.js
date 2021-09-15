const { Client, Intents, MessageAttachment } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports={
    name:'derjanko',
    description:"this is a derjanko command!",
    async execute( message, args){
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const dispatcher = connection.play('kris.mp3');
    
    dispatcher.on('start', () => {
        console.log('derjanko is now playing!');
    });
    
    dispatcher.on('finish', () => {
        console.log('derjanko has finished playing!');
    });
    
    dispatcher.on('error', console.error);
        const attachment = new MessageAttachment('derjanko.jpg');
        message.channel.send(`${message.author}, nem tudod ki az a dérjankó? Hát itt van:`, attachment);
          } else {
            message.reply('Jó ügyes vagy. Lépj be egy voicechannel-be u fuckin dumbo...');
          }
    }
}