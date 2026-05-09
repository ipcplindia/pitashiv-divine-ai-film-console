export type Release = {
  title: string; album: string; category: string; thumbnail: string; description: string; youtubeUrl: string; musicUrl: string; tags: string[]; mood: string; duration: string; featured: boolean; ctaLabel: string;
};
const yt = 'https://www.youtube.com/channel/UCUIbQKh-7ZHjqRF9dJwzdlw';
const music = 'https://music.youtube.com/@bholenathproductionsofficial?si=iFhS_jIppsqW52Dm';
export const releases: Release[] = [
  ['MERE PITA BHOLENATH JI','Mere Pita Bholenath Ji','Album','/assets/releases/release-01.jpg','A divine cinematic album universe built around devotion, sound, scale and soul.',yt,music,['devotional','album','featured'],'Sacred cinematic','54:36',true,'Enter Album Universe'],
  ['SHIV CHALISA SHIVAYONIC GENRE','Shivayonic Genre','Music Video','/assets/releases/release-02.jpg','Ancient devotion rebuilt as a premium sonic-visual experience.',yt,music,['chalisa','cosmic','shivayonic'],'Emerald cosmic','05:21',true,'Watch Release'],
  ['MAHAKAL ALAAP SHIVAYONIC GENRE','Shivayonic Genre','Music Video','/assets/releases/release-03.jpg','A powerful Mahakal energy piece with raw sacred intensity.',yt,music,['mahakal','alaap','warrior'],'Intense sacred','04:48',true,'Watch Release'],
  ['ASHT JYOTIRLINGA SHIVAYONIC GENRE','Shivayonic Genre','Music Video','/assets/releases/release-04.jpg','A cinematic sonic journey through divine Jyotirlinga energy.',yt,music,['jyotirlinga','divine','temple'],'Epic devotional','05:02',true,'Listen Now'],
  ['BHOLENATH PRODUCTIONS ANTHEM','Bholenath Productions','Studio Anthem','/assets/releases/release-05.jpg','The official sound identity for a divine-futuristic production house.',yt,music,['anthem','brand','studio'],'Grand launch','03:58',true,'Play Anthem'],
  ['SHIV SHIV SHAMBHO','Shivayonic Music','Single','/assets/releases/release-06.jpg','A powerful chant-driven sonic release with cinematic impact.',yt,music,['chant','single','energy'],'Devotional charge','04:15',true,'Watch Now'],
  ['RAM KE SHIV – SHIV KE RAM','Shivayonic Music','Single','/assets/releases/release-07.jpg','A devotional cinematic bridge between Ram and Shiv energy.',yt,music,['ram','shiv','divine'],'Peaceful epic','05:12',false,'Explore'],
  ['MAHAKAL WARRIOR ZONE','Shivayonic Music','Warrior Track','/assets/releases/release-08.jpg','A high-impact warrior devotional track for reels, trailers and stage energy.',yt,music,['mahakal','warrior','trailer'],'Warrior fire','03:44',false,'Play Track'],
  ['SHIVAYE AARTI UNIVERSE GENRE','Shivaye Aarti','Aarti Universe','/assets/releases/release-09.jpg','A cinematic universe version of sacred aarti energy.',yt,music,['aarti','universe','devotional'],'Royal aarti','06:12',false,'Listen'],
  ['SHIVAYE AARTI SHIVAYONIC GENRE','Shivaye Aarti','Aarti','/assets/releases/release-10.jpg','The Shivayonic interpretation of a sacred aarti soundscape.',yt,music,['aarti','shivayonic','soundscape'],'Divine glow','05:38',false,'Watch'],
  ['SONIC ARCHITECTURE LAB','Shivayonic Studios','Studio System','/assets/releases/release-11.jpg','Sound branding, emotional frequency mapping and cinematic sonic identity.',yt,music,['sonic','architecture','studio'],'Future sound','02:40',false,'Explore Lab'],
  ['AI FILM CONSOLE','Shivayonic Studios','AI Workflow','/assets/releases/release-12.jpg','AI-assisted film ideation, prompt systems, storyboard design and release packaging.',yt,music,['ai','film','console'],'Future studio','02:20',false,'Open Console']
].map(([title, album, category, thumbnail, description, youtubeUrl, musicUrl, tags, mood, duration, featured, ctaLabel]) => ({title, album, category, thumbnail, description, youtubeUrl, musicUrl, tags, mood, duration, featured, ctaLabel})) as Release[];
