'use client';
import { Menu } from 'lucide-react';
import { navigation } from '../data/navigation';
import { siteConfig } from '../site.config';
export function Header(){ return <header className="nav"><a className="brand" href="#home"><img src="/assets/brand/shivayonic-emblem.svg" alt="Shivayonic emblem"/><span>{siteConfig.brand}<small>{siteConfig.music} • {siteConfig.studio}</small></span></a><nav>{navigation.slice(0,10).map(n=><a key={n} href={`#${n.toLowerCase().replaceAll(' ','-')}`}>{n}</a>)}</nav><Menu className="menu"/></header> }
