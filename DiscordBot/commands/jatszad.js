module.exports={
    name:'jatszad',
    description:"this is a jatszad command!",
    execute( message, args){
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('Lépj be egy voicechannelbe te agyhalott...');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        //if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        //if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
        if (!args.length) return message.channel.send('És most itt mit játsszak????');
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
    }
}