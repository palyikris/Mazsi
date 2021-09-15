/*class JoinChannelCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'join',
            group:'music',
            memberName:'join',
            description:'Joins the voice channel'
        });
    }
    async run(message, args){
        if(message.member.voiceChannel){
            if(message.guild.voiceConnection){
                message.member.voiceChannel.join()
                    .then(connection=>{
                        message.reply("Szevasztok buzik!");
                    });
            }
        }
        else{
            message.replym("Elbasztad te gyökér...");
        }
    }
}
module.exports=JoinChannelCommand;*/