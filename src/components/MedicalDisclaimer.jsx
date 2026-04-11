import React from 'react';
import Admonition from '@theme/Admonition';

/**
 * Медицинский дисклеймер для страниц о здоровье, травмах и питании.
 * Используется в разделе "Workouts with injuries" и в статьях, где
 * даются рекомендации, потенциально влияющие на здоровье.
 *
 * Использование:
 *   import MedicalDisclaimer from '@site/src/components/MedicalDisclaimer';
 *   <MedicalDisclaimer />
 */
export default function MedicalDisclaimer({title = 'Это не медицинский совет'}) {
  return (
    <Admonition type="warning" title={title}>
      <p>
        Этот материал — персональный опыт тренера и обобщение открытых источников,
        а не индивидуальная медицинская рекомендация. Автор не врач.
      </p>
      <p>
        Перед началом тренировок, особенно при хронических заболеваниях, травмах
        или беременности — <strong>проконсультируйтесь с лечащим врачом</strong>.
        Если во время упражнения появилась острая боль, головокружение, тошнота
        или потемнение в глазах — немедленно остановитесь и обратитесь к врачу.
      </p>
    </Admonition>
  );
}
