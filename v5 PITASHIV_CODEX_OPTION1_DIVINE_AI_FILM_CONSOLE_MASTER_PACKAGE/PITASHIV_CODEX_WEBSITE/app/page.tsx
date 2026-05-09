import { Header } from '../components/Header';
import { HeroConsole } from '../components/HeroConsole';
import { IdentityStrip } from '../components/IdentityStrip';
import { ReleaseGrid } from '../components/ReleaseGrid';
import { AlbumUniverse } from '../components/AlbumUniverse';
import { Services } from '../components/Services';
import { ConsolePanels } from '../components/ConsolePanels';
import { GalleryWall } from '../components/GalleryWall';
import { Footer } from '../components/Footer';

export default function HomePage(){
  return <main>
    <div className="progress" />
    <Header />
    <HeroConsole />
    <IdentityStrip />
    <ReleaseGrid title="Featured Releases" featured />
    <AlbumUniverse />
    <ReleaseGrid title="Music Videos + Shorts + Official Catalogue" />
    <Services />
    <ConsolePanels />
    <GalleryWall />
    <Footer />
  </main>;
}
