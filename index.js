const open=require("openai");

const openAi = new open.OpenAI({
    apiKey: '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'
});

const runPrompt = async () => {
    const prompt = `
    Cuentame un chiste sobre conejos. Retorna la respuesta en formato JSON:
    {
        "Q": "pregunta",
        "A": "respuesta"
    }`;

    const response = await openAi.chat.completions.create({
        messages: [{role:"system", content: prompt}],
        model: "gpt-3.5-turbo",
    });

    console.log(response.choices[0]);
};

runPrompt();