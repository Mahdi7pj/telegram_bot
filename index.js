const { Telegraf } = require('telegraf')

const bot =new Telegraf(process.env.bot_token);

bot.start((ctx) =>{
    ctx.reply('سلام به ربات فروشگاه    خوش آمدید \n چه کمکی از من برمیاد\n /help')
})



bot.launch()