import React, { useState } from 'react';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [resultado, setResultado] = useState('');

  async function generarEjercicio() {
    const response = await fetch('https://ia-cesto-backend.onrender.com/generar-ejercicio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    setResultado(data.respuesta);
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏀 Bienvenido a IA Cesto</h1>
      <textarea
        rows={5}
        cols={50}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe el ejercicio que quieres generar"
      />
      <br />
      <button onClick={generarEjercicio} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Generar ejercicio con IA
      </button>
      <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>{resultado}</div>
    </div>
  );
}
