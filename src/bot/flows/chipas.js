import bot from "@bot-whatsapp/bot"

const flowChipas = bot.addKeyword(['chipas']).addAnswer(
    [
        '🙌 ¡Bienvenido a nuestra sección de chipas!',
        'Contamos con una buena variedad de chipas:',
        '🧀 Chipas de queso: Deliciosas chipas horneadas con una generosa porción de queso derretido en su interior. Precio: $2.50 cada una.',
        '🍖 Chipas de jamón y queso: Nuestras chipas rellenas con jamón y queso son perfectas para aquellos que buscan un sabor más completo. Precio: $3.00 cada una.',
        '🥓 Chipas de panceta: ¿Te gusta la panceta? Entonces te encantarán nuestras chipas con trozos crujientes de panceta cocida. Precio: $3.50 cada una.',
        '🌶️ Chipas picantes: Para los amantes del picante, ofrecemos chipas con un toque de ají o chile para añadir un poco de calor a tu día. Precio: $2.75 cada una.',
    ],
    null,
    null
);

export const flowPrincipalChiperia = bot.addKeyword(['Hola', 'hola'])
    .addAnswer('🙌 Hola bienvenido a chipas don pipo en que puedo ayudarle:')
    .addAnswer(
        [
            'Tenemos una gran variedad de productos para ofrecerle:',
            'Use los siguientes para obtener más información:',
            '👉 *chipas*',
        ],
        null,
        null,
        [flowChipas]
    );