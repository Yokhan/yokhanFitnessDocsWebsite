import React from 'react';
import Layout from '@theme/Layout';

export default function NotFound() {
  return (
    <Layout title="Страница не найдена">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        padding: '2rem',
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>
          Такой страницы не существует.
        </p>
        <a
          href="/"
          style={{
            padding: '0.8rem 1.6rem',
            backgroundColor: '#C8EA6A',
            color: '#111111',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem',
          }}
        >
          На главную
        </a>
      </main>
    </Layout>
  );
}
