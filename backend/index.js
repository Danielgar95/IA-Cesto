import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get('/', (req, res) => {
  res.send('Backend IA Cesto funcionando correctamente.');
});

app.post('/generar-ejercicio', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Falta el prompt en la solicitud.' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    const respuesta = completion.choices[0]?.message?.content || 'Sin respuesta';
    res.json({ respuesta });

  } catch (error) {
    console.error('Error al generar el ejercicio:', error);
    res.status(500).json({ error: 'Error interno al generar el ejercicio.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
