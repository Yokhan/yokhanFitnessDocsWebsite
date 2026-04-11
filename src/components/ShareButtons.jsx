import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Share-кнопки для текущей страницы. Работают только в браузере
 * (используют window.location). Приоритет RU-аудитории: Telegram, ВКонтакте.
 *
 * Использование:
 *   import ShareButtons from '@site/src/components/ShareButtons';
 *   <ShareButtons />
 */
export default function ShareButtons({title}) {
  return (
    <BrowserOnly>
      {() => <ShareButtonsInner title={title} />}
    </BrowserOnly>
  );
}

function ShareButtonsInner({title}) {
  const {siteConfig} = useDocusaurusContext();
  const url = typeof window !== 'undefined' ? window.location.href : siteConfig.url;
  const shareTitle = title || (typeof document !== 'undefined' ? document.title : siteConfig.title);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(shareTitle);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // Минимальный feedback — в будущем можно заменить на toast
      // eslint-disable-next-line no-alert
      alert('Ссылка скопирована');
    } catch {
      // eslint-disable-next-line no-alert
      alert('Не удалось скопировать. Скопируйте из адресной строки.');
    }
  };

  const btnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    padding: '0.35rem 0.75rem',
    borderRadius: 'var(--yk-radius-pill, 999px)',
    border: '1px solid var(--ifm-color-emphasis-300)',
    background: 'transparent',
    color: 'var(--ifm-color-content)',
    textDecoration: 'none',
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'background 0.15s, border-color 0.15s',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        alignItems: 'center',
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--ifm-color-emphasis-200)',
      }}
    >
      <span style={{color: 'var(--yk-text-muted, #999)', fontSize: '0.85rem', marginRight: '0.5rem'}}>
        Поделиться:
      </span>
      <a
        href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        aria-label="Поделиться в Telegram"
      >
        Telegram
      </a>
      <a
        href={`https://vk.com/share.php?url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        aria-label="Поделиться во ВКонтакте"
      >
        ВКонтакте
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        aria-label="Поделиться в X (Twitter)"
      >
        X (Twitter)
      </a>
      <button type="button" onClick={handleCopy} style={btnStyle} aria-label="Скопировать ссылку">
        🔗 Копировать ссылку
      </button>
    </div>
  );
}
