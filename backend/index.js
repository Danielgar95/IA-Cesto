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

app.post('/generar-ejercicio', async (req, res) => {
  try {
    const { prompt } = req.body;

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4',
    });

    const respuesta = completion.choices[0]?.message?.content;
    res.json({ respuesta });
  } catch (error) {
    console.error('Error al generar el ejercicio:', error);
    res.status(500).json({ error: 'Error al generar el ejercicio' });
  }
});

// 👇 Esto es lo que Render necesita para detectar el puerto
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
