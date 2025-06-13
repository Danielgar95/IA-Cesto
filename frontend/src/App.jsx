import React from 'react';

export default function App() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1>🏀 Bienvenido a IA Cesto</h1>
      <p>Esta es una plataforma para generar ejercicios de baloncesto con inteligencia artificial.</p>
      <button style={{
        padding: '1rem 2rem',
        fontSize: '1rem',
        marginTop: '2rem',
        cursor: 'pointer'
      }}>Generar ejercicio con IA</button>
    </div>
  );
}
