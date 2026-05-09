
const SITE_CONFIG = {
  youtubeMusic: 'https://music.youtube.com/@bholenathproductionsofficial?si=iFhS_jIppsqW52Dm',
  youtubeChannel: 'https://www.youtube.com/channel/UCUIbQKh-7ZHjqRF9dJwzdlw',
  instagram: 'SHIVAYONIC_INSTAGRAM_URL'
};
const releases = [
 ['MERE PITA BHOLENATH JI','Album','release-01.jpg','A divine cinematic album universe connecting devotion, sound, emotion, and future-ready sonic storytelling.','54:36'],
 ['SHIV CHALISA SHIVAYONIC GENRE','Music Video','release-02.jpg','Emerald-cosmic devotional energy with sacred rhythm and cinematic atmosphere.','05:02'],
 ['MAHAKAL ALAAP SHIVAYONIC GENRE','Alaap','release-03.jpg','Raw cinematic Mahakal vocal energy shaped as a premium sonic identity.','04:48'],
 ['ASHT JYOTIRLINGA SHIVAYONIC GENRE','Devotional','release-04.jpg','Sacred pilgrimage energy redesigned as a cinematic album experience.','06:10'],
 ['BHOLENATH PRODUCTIONS ANTHEM','Anthem','release-05.jpg','The official sonic identity anthem for a future-ready production house.','03:50'],
 ['SHIV SHIV SHAMBHO','Music Video','release-06.jpg','A devotional cinematic release with sacred pulse and emotional grandeur.','04:22'],
 ['RAM KE SHIV – SHIV KE RAM','Music Video','release-07.jpg','A divine bridge between devotion, story, and cinematic sonic scale.','05:44'],
 ['MAHAKAL WARRIOR ZONE','Cinematic BGM','release-08.jpg','Battlefield-level sonic identity with temple bell impact and powerful percussion logic.','03:33'],
 ['SHIVAYE AARTI UNIVERSE GENRE','Aarti','release-09.jpg','Aarti experience expanded into a cinematic universe structure.','06:21'],
 ['SHIVAYE AARTI SHIVAYONIC GENRE','Aarti','release-10.jpg','Shiv aarti redesigned through black-gold sonic architecture and divine atmosphere.','05:57']
];
const services = ['Film & Movie Making','Music Production','Songwriting & Composition','Background Music / BGM','Sound Design / Foley / SFX','Dolby Atmos-style spatial mix direction','Devotional Cinematic Albums','Brand Anthems','Corporate Ads','Luxury Brand Films','YouTube Launch Strategy','Poster / Thumbnail / Cover Design','AI Video Prompting','AI Film Console Workflow','Release Packaging','Sonic Identity Design','Wedding / Event Custom Soundtrack','Brand Sound Logo','Trailer Music','Intro Logo Reveal','Music Video Production','Shorts / Reels Strategy'];
const aiModules = ['Story Nexus','Shot Forge','Voice Synth','Sound Sculpt','Vision Board','Prompt Forge','Release Pack','Sonic Map'];
function relCard(r){return `<a class="release-card" href="${SITE_CONFIG.youtubeChannel}"><img src="releases/${r[2]}" alt="${r[0]} thumbnail"><b>${r[0]}</b><small>${r[1]}</small></a>`}
function mediaCard(r){return `<a href="${SITE_CONFIG.youtubeChannel}"><img src="releases/${r[2]}" alt="${r[0]}"><b>${r[0]}</b><small>▶ ${r[4]}</small></a>`}
function init(){
 document.querySelector('#releaseRail').innerHTML = releases.map(relCard).join('');
 document.querySelector('#musicVideos').innerHTML = releases.slice(0,5).map(mediaCard).join('');
 document.querySelector('#shortsReels').innerHTML = releases.slice(5,10).map(mediaCard).join('');
 document.querySelector('#productionGrid').innerHTML = ['Cinematic Films|Original stories|release-07.jpg','Music Production|Sacred & cinematic|release-08.jpg','Background Score|Film & web|release-09.jpg','Sound Design|Immersive audio|release-10.jpg','Trailer & Teaser|High impact cuts|release-11.jpg'].map(x=>{let p=x.split('|'); return `<article><img src="releases/${p[2]}" alt="${p[0]}"><b>${p[0]}</b><small>${p[1]}</small></article>`}).join('');
 document.querySelector('#serviceMatrix').innerHTML += services.map((s,i)=>`<article><span>${['🎬','🎵','〽','🎚','🎞','✨'][i%6]}</span><b>${s}</b></article>`).join('');
 document.querySelector('#aiConsole').innerHTML += aiModules.map((m,i)=>`<article><img src="releases/release-${String((i%12)+1).padStart(2,'0')}.jpg" alt="${m}"><b>${m}</b><small>AI creative module</small></article>`).join('');
 document.querySelector('#galleryWall').innerHTML = [...releases,...releases.slice(0,4)].map((r,i)=>`<img src="releases/${r[2]}" alt="${r[0]} poster ${i+1}">`).join('');
 document.querySelectorAll('[data-youtube-music]').forEach(a=>a.href=SITE_CONFIG.youtubeMusic);
 document.querySelectorAll('[data-youtube-channel]').forEach(a=>a.href=SITE_CONFIG.youtubeChannel);
 document.querySelectorAll('[data-instagram]').forEach(a=>a.href=SITE_CONFIG.instagram);
 document.querySelectorAll('.release-card,.media-grid a,.production-grid article,.ai-console article').forEach(card=>{
  card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(); card.style.setProperty('--mx',`${e.clientX-r.left}px`);});
 });
}
window.addEventListener('DOMContentLoaded', init);
