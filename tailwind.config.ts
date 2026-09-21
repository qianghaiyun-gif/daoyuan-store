/** Tailwind design tokens. */
import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme:{extend:{colors:{ink:'#0A0A0A',gold:'#C9A96E',pearl:'#F5F2ED'},fontFamily:{display:['var(--font-cormorant)'],sans:['var(--font-inter)']}}},plugins:[] } satisfies Config;
