import React, {useEffect, useRef} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Giscus-комментарии (GitHub Discussions).
 * Работает только если в docusaurus.config.js заданы customFields.giscus с репо/category.
 * Если конфиг не задан — компонент ничего не рендерит (no-op).
 *
 * Конфигурация в docusaurus.config.js:
 *   customFields: {
 *     giscus: {
 *       repo: 'Yokhan/yokhanFitnessDocsWebsite',
 *       repoId: 'R_xxx',       // из giscus.app
 *       category: 'Comments',
 *       categoryId: 'DIC_xxx', // из giscus.app
 *     }
 *   }
 */
export default function GiscusComments() {
  return (
    <BrowserOnly>
      {() => <GiscusInner />}
    </BrowserOnly>
  );
}

function GiscusInner() {
  const containerRef = useRef(null);
  const {colorMode} = useColorMode();

  // Читаем конфиг из глобального siteConfig через require — нельзя на client напрямую
  // Вместо этого читаем через window.__DOCUSAURUS__ или используем customFields через context
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const siteConfig = require('@generated/docusaurus.config').default;
  const giscus = siteConfig.customFields?.giscus;

  useEffect(() => {
    if (!giscus || !containerRef.current) return;
    if (!giscus.repo || !giscus.repoId || !giscus.category || !giscus.categoryId) return;

    // Очистить предыдущие инстансы при навигации между страницами
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', giscus.repo);
    script.setAttribute('data-repo-id', giscus.repoId);
    script.setAttribute('data-category', giscus.category);
    script.setAttribute('data-category-id', giscus.categoryId);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', colorMode === 'dark' ? 'dark' : 'light');
    script.setAttribute('data-lang', 'ru');
    script.setAttribute('data-loading', 'lazy');

    containerRef.current.appendChild(script);
  }, [colorMode, giscus]);

  if (!giscus) return null;

  return (
    <div
      ref={containerRef}
      style={{marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--ifm-color-emphasis-200)'}}
    />
  );
}
