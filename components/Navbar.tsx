'use client';
import {useRef,useState} from 'react';
import {Menu,X,ArrowDownToLine} from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';
import {profile} from '@/data/portfolio';
const items=['Home','About','Skills','Experience','Education','Certifications','Contact'];
export default function Navbar(){
 const [open,setOpen]=useState(false);const toggle=useRef<HTMLButtonElement>(null);
 function navigate(){setOpen(false)}
 return <header className="header"><nav className="nav container" aria-label="Main navigation" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus()}}}><a href="#home" aria-label="Akhila, home"><Logo/></a><div id="navigation-links" className={'nav-links '+(open?'is-open':'')}>{items.map(item=><a key={item} href={'#'+item.toLowerCase()} onClick={navigate}>{item}</a>)}</div><div className="nav-actions"><div className="nav-social"><SocialLinks iconsOnly includeEmail={false}/></div><ThemeToggle/><a href={profile.resume} download className="nav-resume">Resume <ArrowDownToLine size={15}/></a><button ref={toggle} className="icon-button menu-toggle" aria-expanded={open} aria-controls="navigation-links" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button></div></nav></header>;
}
