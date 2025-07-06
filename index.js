const { Telegraf } = require('telegraf')

const bot =new Telegraf(process.env.bot_token);

bot.start((ctx) =>{
    ctx.reply('سلام به ربات فروشگاه mahdi7pj  خوش آمدید \n چه کمکی از من برمیاد\n /help')
})
bot.help((ctx)=>{
    ctx.reply('این یک ربات فروشگاهی هست.برای ارتباط با ما میتوانید از روش های زیر استفاده کنید .\nآدرس پشیبانی تلگرام :\nآدرس سایت:')
})


bot.launch()
