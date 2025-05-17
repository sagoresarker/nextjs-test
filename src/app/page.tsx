import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(120deg, #f4f6fb 0%, #e9ecf3 100%)',
        fontFamily: 'Segoe UI, Inter, Arial, sans-serif',
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem', color: '#2563eb', userSelect: 'none' }}>
        🚀
      </div>
      <h1 style={{
        fontSize: '2.3rem',
        fontWeight: 700,
        marginBottom: '1.1rem',
        color: '#1e293b',
        letterSpacing: '-0.01em',
        textAlign: 'center',
        lineHeight: 1.15,
      }}>
        Welcome to My Minimal Next.js Static Site
      </h1>
      <p style={{
        fontSize: '1.18rem',
        color: '#475569',
        marginBottom: '2.2rem',
        lineHeight: 1.7,
        textAlign: 'center',
        maxWidth: 520,
      }}>
        This is a simple static site built with Next.js and TypeScript. Designed for clarity, speed, and professionalism.
      </p>
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '0.7rem 1.6rem',
          background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
          color: '#fff',
          borderRadius: '999px',
          fontWeight: 600,
          fontSize: '1rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px 0 rgba(37, 99, 235, 0.08)',
          transition: 'background 0.2s',
        }}
      >
        Learn More
      </a>
    </div>
  );
}
