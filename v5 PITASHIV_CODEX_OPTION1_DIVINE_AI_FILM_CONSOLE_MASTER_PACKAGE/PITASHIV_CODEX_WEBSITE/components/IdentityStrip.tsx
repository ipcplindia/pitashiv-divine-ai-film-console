import { siteConfig } from '../site.config';
export function IdentityStrip(){return <section id="universe" className="identity"><article><b>{siteConfig.brand}</b><span>Cinematic Worlds</span></article><article><b>{siteConfig.music}</b><span>Sacred Sound</span></article><article><b>{siteConfig.studio}</b><span>Future-ready Stories</span></article></section>}
