import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], darkMode: 'class', theme: { extend: { colors: { brand: {50:'#eefdf7',100:'#d5f7ea',500:'#10b981',600:'#059669',900:'#064e3b'}, carbon:'#111827' }, boxShadow: { glow: '0 24px 80px rgba(16,185,129,.25)' } } }, plugins: [] };
export default config;
