'use client';
import {Moon,Sun} from 'lucide-react';
export default function ThemeToggle() {
 function toggle(){const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';try{localStorage.setItem('akhila-theme',dark?'dark':'light')}catch{}}
 return <button className="icon-button theme-toggle" onClick={toggle} aria-label="Toggle light and dark theme"><Sun className="sun-icon" size={18}/><Moon className="moon-icon" size={18}/></button>;
}
