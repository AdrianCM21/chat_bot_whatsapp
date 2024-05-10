import bot from "@bot-whatsapp/bot";
import { getFuncionario } from "../../services/funcionarios.service.js";

const mainMenu = [
    'Aquí tienes algunas opciones:',
    '*->* *1* - Consultar si es funcionario publico.',

    '*->* *2* - Nada.',
];


const consulta = bot.addKeyword(['1'])
.addAnswer('Enviame su cedula',{capture:true}, async (msg, {flowDynamic,EVENT} )=>{


const nombre = await getFuncionario(msg.body)

return await flowDynamic(nombre)
})

const flowEnd = bot.addKeyword(bot.EVENTS.ACTION).addAnswer('👋 Ha sido un placer ayudarte. ¡Hasta la próxima!');

export const flowPrincipal = bot.addKeyword(['Hola', 'hola'])
    .addAnswer('Hola, soy Antonio, estoy aqui todo el tiempo para ayudarte,')
    .addAnswer(mainMenu, null, null, [consulta, flowEnd]);