const express = require("express");
const router = express.Router();

router.post("/chat", async (req, res) => {

    try {

        console.log("Body:", req.body);

        const pergunta = req.body.pergunta;

        const resposta = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        {
                            role: "user",
                            content: pergunta
                        }
                    ]
                })
            }
        );

        console.log("Status:", resposta.status);

        const dados = await resposta.json();

        console.log("Dados:", dados);

        res.json({
            resposta: dados.choices[0].message.content
        });

    } catch (erro) {

        console.error("ERRO:");
        console.error(erro);

        res.status(500).json({
            erro: "Erro ao consultar IA"
        });

    }

});

module.exports = router;