import { services } from '../data/services';
export function Services(){return <section id="services" className="block"><div className="sectionTitle"><h2>Our Services</h2><a>View all services</a></div><div className="serviceGrid">{services.map((s,i)=><article className="service" key={s}><span>{String(i+1).padStart(2,'0')}</span><h3>{s}</h3></article>)}</div></section>}
