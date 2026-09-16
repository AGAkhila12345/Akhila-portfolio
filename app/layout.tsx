import type { Metadata } from 'next';
import './globals.css';
const title='Akhila Amudala Ganesh | Healthcare Informatics & Data Analytics';
const description='Portfolio of Akhila Amudala Ganesh, a Healthcare Informatics professional with experience in clinical research, healthcare data analytics, SQL, Python, SAS, Power BI, and Tableau.';
export const metadata:Metadata={title,description,openGraph:{title,description,type:'website',locale:'en_US'},twitter:{card:'summary',title,description},robots:{index:true,follow:true},icons:{icon:'/favicon.svg'}};
const themeScript="try{var t=localStorage.getItem('akhila-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}catch(e){}";
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body>{children}</body></html>}
