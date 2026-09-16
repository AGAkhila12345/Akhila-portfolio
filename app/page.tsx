import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollingSkills from '@/components/ScrollingSkills';
import {About,Skills,Experience,HealthcareDataSection,Education,Certifications,Contact,Footer} from '@/components/Sections';
export default function Home(){return <><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Hero/><ScrollingSkills/><About/><Skills/><Experience/><HealthcareDataSection/><Education/><Certifications/><Contact/></main><Footer/></>}
