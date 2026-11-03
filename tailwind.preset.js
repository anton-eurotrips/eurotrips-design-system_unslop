/**
 * Eurotrips — Tailwind preset, редакція unslop (03.11.2026)
 * Використання: tailwind.config.{js,ts} → presets: [require('./tailwind.preset.js')]
 * tokens.css підключити глобально: кольори тут — посилання на його змінні,
 * тож значення живуть в одному місці.
 *
 * colors, borderRadius, boxShadow і fontWeight задані в theme, а не в extend:
 * це навмисно звужує вибір до токенів (bg-violet-500, rounded-3xl чи font-black
 * просто не існують). Відступи — стандартна 4px-шкала Tailwind
 * (1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32); довільні значення [..] не використовувати.
 *
 * unslop: Damir Sokolovsky (@heydamir), https://github.com/heydamir/unslop, CC BY 4.0.
 */
module.exports = {
  theme: {
    screens: {
      // сайт desktop-first: max-width 767 / 1023, hover лише від 1024
      sm: '420px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1366px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      bg: 'var(--et-bg)',
      surface: 'var(--et-surface)',
      raised: 'var(--et-raised)',
      line: { DEFAULT: 'var(--et-line)', field: 'var(--et-line-field)' },
      overlay: 'var(--et-overlay)',
      text: { DEFAULT: 'var(--et-text)', 2: 'var(--et-text-2)', 3: 'var(--et-text-3)' },
      'on-dark': 'var(--et-on-dark)',
      accent: { DEFAULT: 'var(--et-accent)', hover: 'var(--et-accent-hover)', ink: 'var(--et-accent-ink)' },
      'on-accent': 'var(--et-on-accent)',
      cyan: { DEFAULT: 'var(--et-cyan)', ink: 'var(--et-cyan-ink)' },
      'on-cyan': 'var(--et-on-cyan)',
      logo: 'var(--et-logo)',
      cat: { cyan: 'var(--et-cat-cyan)', purple: 'var(--et-cat-purple)', green: 'var(--et-cat-green)' },
      positive: 'var(--et-positive)',
      warning: 'var(--et-warning)',
      negative: 'var(--et-negative)',
    },
    fontFamily: {
      sans: ['"Proxima Nova"', 'Montserrat', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
    },
    borderRadius: {
      none: '0',
      xs: '6px',    // тег усередині поля, keycap
      sm: '10px',   // поле, селект, textarea, дропдаун, рядок меню
      md: '12px',   // картка, фото, плашка туру
      lg: '16px',   // модалка, поповер
      full: '9999px', // кнопки, дата-пігулки, чипи, вкладки місяців
    },
    boxShadow: {
      none: 'none',
      sm: '0 1px 2px rgba(0,0,0,.05)',
      float: '0 8px 24px rgba(0,0,0,.06)',
    },
    extend: {
      fontSize: {
        // [size, { lineHeight, letterSpacing, fontWeight }]
        display: ['64px', { lineHeight: '68px', letterSpacing: '-0.03em', fontWeight: '600' }], // hero H1; мобайл → display-m
        'display-m': ['40px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '600' }],
        h1: ['40px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '600' }], // заголовок секції; мобайл → h2
        h2: ['28px', { lineHeight: '32px', fontWeight: '600' }],      // модалка, сторінка ETOS
        figure: ['32px', { lineHeight: '36px', fontWeight: '600' }],  // ключові цифри, ціна в hero (+ tabular-nums)
        h3: ['20px', { lineHeight: '28px', fontWeight: '600' }],      // картка, плашка, акордеон
        lead: ['18px', { lineHeight: '28px' }],                       // підзаголовок hero
        body: ['16px', { lineHeight: '24px' }],                       // абзаци сайту
        'body-sm': ['14px', { lineHeight: '20px' }],                  // ETOS, таблиці, навігація, кнопки
        caption: ['12px', { lineHeight: '16px' }],                    // мета, лейбли; менше не буває
      },
      spacing: {
        frame: '48px',
        control: '36px',
        'control-sm': '32px',
        'control-lg': '44px',
        'field-lg': '48px',
        'row-table': '56px',
      },
      width: {
        'side-menu': '280px',
        'sidebar-app': '264px',
      },
      maxWidth: {
        container: '1060px',
        wide: '1100px',
        lead: '36rem',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
        menu: '200ms',
        enter: '400ms',
      },
      scale: {
        press: '.98',
      },
    },
  },
};
