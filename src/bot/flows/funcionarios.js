import bot from "@bot-whatsapp/bot";
import { getFuncionario } from "../../services/funcionarios.service.js";

const mainMenu = [
    'Aquí tienes algunas opciones:',
    '👉 *1* - Consultar si es funcionario publico.',
    '👉 *2* - ¿Qué es funcionario público en Paraguay?',
    '👉 *3* - ¿Por qué es importante el acceso a la información pública?',
    '👉 *4* - Finalizar chat .',
    
    
];


const consulta = bot.addKeyword(['1'])
.addAnswer('Enviame su cedula',{capture:true}).addAction( async (msg, {flowDynamic,fallBack,gotoFlow} )=>{


const nombre = await getFuncionario(msg.body)
if(!nombre){
    return fallBack()
}

await flowDynamic(nombre)

return gotoFlow(flowPrincipal)

})


const flowEnd = bot.addKeyword('4').addAnswer('👋 Ha sido un placer ayudarte. ¡Hasta la próxima!');
const flowPorque = bot.addKeyword('3').addAnswer('Porque es un derecho fundamental que tienen todas las personas como herramienta de participación ciudadana, mediante el conocimiento de información relevante para sus vidas y comunidad. El acceso a la información fomenta mayor eficiencia e integridad en el manejo de los recursos públicos y es esencial para hacer al Estado más transparente en su  gestión, más efectivo en sus acciones y atender mejor las necesidades y  demandas públicas.').addAction( async (msg, {gotoFlow} )=>{

    return gotoFlow(flowPrincipal)
    
    });
const flowQueEs = bot.addKeyword('2').addAnswer('Es funcionario publico la persona nombrada mediante acto administrativo para ocupar de manera permanente un cargo incluido o previsto en el Presupuesto General de la Nación, donde desarrolle tareas inherentes a la función del organismo o entidad del Estado en el que presta sus servicios.').addAction( async (msg, {gotoFlow} )=>{

    return gotoFlow(flowPrincipal)
    
    });

export const flowPrincipal = bot.addKeyword([bot.EVENTS.WELCOME,'Hola', 'hola'])
    .addAnswer('Hola, soy Antonio, estoy aqui todo el tiempo para ayudarte,')
    .addAnswer(mainMenu, {capture:true}, null, [consulta, flowQueEs,flowPorque,flowEnd]);