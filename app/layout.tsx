import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'SDG Centre + Carbon AI Platform', description: 'Единая цифровая платформа управления SDG Centre, LMS, DMS, LIMS, ESG и Carbon AI.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ru"><body>{children}</body></html>; }
