import bot from '@bot-whatsapp/bot'
import BaileysProvider  from '@bot-whatsapp/provider/baileys'
import MockAdapter  from '@bot-whatsapp/database/mock'

export const startBot=(flows)=> {
  const adapterDB = new MockAdapter()
  const adapterFlow = bot.createFlow(flows)
  const adapterProvider = bot.createProvider(BaileysProvider)

  bot.createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  })
}