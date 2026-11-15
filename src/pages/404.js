import React from 'react';
import Link from '@docusaurus/Link';
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
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 4.5rem)',
          fontFamily: 'var(--yk-font-heading)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: 'var(--yk-ink)',
          marginBottom: '0.75rem',
        }}>
          404
        </h1>
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--yk-ink-muted)',
          marginBottom: '2rem',
          maxWidth: '42ch',
        }}>
          Такой страницы не существует.
        </p>
        <Link
          to="/"
          style={{
            padding: '0.8rem 1.6rem',
            backgroundColor: 'var(--yk-accent, #C8EA6A)',
            color: 'var(--yk-accent-ink, #17181A)',
            border: '1px solid rgba(23, 24, 26, 0.14)',
            borderRadius: 'var(--yk-radius-pill, 999px)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
          }}
        >
          На главную
        </Link>
      </main>
    </Layout>
  );
}
