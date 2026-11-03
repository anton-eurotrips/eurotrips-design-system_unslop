# Eurotrips — дизайн-система, редакція unslop

Копія дизайн-системи Eurotrips, повністю проведена через скіл [unslop](https://github.com/heydamir/unslop). Канонічне джерело при конфліктах — `DESIGN.md` з аудиту сайту: cyan + pink, Proxima Nova. Оригінальні файли не змінювались.

| Файл | Що в ньому |
|---|---|
| `DESIGN.md` | посібник для Claude Code: напрям, кольори, типографіка, сітка, компоненти, ETOS |
| `tokens.css` | усі значення як CSS-змінні, `@font-face`, базові правила (шрифт, фокус, reduced motion) |
| `tailwind.preset.js` | ті самі токени для Tailwind; кольори, радіуси, тіні й ваги звужені до токенів |
| `preview.html` | специмени токенів і компонентів, робочий екран ETOS; відкривати з цієї ж теки |
| `brand-guide.html` | брендбук і tone of voice у новій палітрі |
| `UNSLOP-REPORT.md` | аудит, напрям, проходи, мапа старих токенів, контрасти до і після, відкриті питання |

Коротко, що змінилося: одна нейтральна шкала з трьома ролями тексту замість 26 сірих; pink лише для дії, cyan лише для моментів і з темним текстом; Proxima Nova у двох вагах звичайним регістром; 4px-сітка; радіус за розміром; одна крива руху; усі текстові пари ≥ 4.5:1.

Підключення: `tokens.css` глобально, у `tailwind.config` — `presets: [require('./tailwind.preset.js')]`. Шрифти покласти в `/fonts/` як woff2 (Regular і SemiBold).

## Кредит

unslop створив Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), [github.com/heydamir/unslop](https://github.com/heydamir/unslop). Ліцензія CC BY 4.0: кредит треба зберігати в копіях і адаптаціях.
