'use client';
import {useState} from 'react';
import {Pause,Play} from 'lucide-react';
const skills=['SQL','Python','SAS','Power BI','Tableau','Excel','Clinical Data','Healthcare Informatics','Data Quality','HIPAA','GCP','CDISC'];
export default function ScrollingSkills(){const [paused,setPaused]=useState(false);return <div className={'skills-marquee '+(paused?'is-paused':'')} aria-label="Core tools and expertise"><div className="marquee-window"><div className="marquee-track">{[0,1].map(copy=><div className="marquee-group" key={copy} aria-hidden={copy===1?true:undefined}>{skills.map(s=><span key={s}>{s}<span className="marquee-separator" aria-hidden="true">✦</span></span>)}</div>)}</div></div><button className="marquee-control icon-button" aria-label={paused?'Play skills animation':'Pause skills animation'} onClick={()=>setPaused(!paused)}>{paused?<Play size={15}/>:<Pause size={15}/>}</button></div>}

