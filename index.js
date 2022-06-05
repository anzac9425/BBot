const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on('Ready', ()=>{
    console.log("봇이 준비되었습니다.")
})

client.on('message', msg=>{
    if(msg.content === "와샌즈"){
        msg.reply("아시는구나!")
    }
})

client.login('ODk2MjYxOTYzMTg3ODc5OTY2.G9X3Qu.nALtZVeoPA_YkdignSxCqZz0ioQdJf6k8hpGmw')