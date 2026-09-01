/*
 * Suyash Kelkar — Work Catalogue data
 * Single source of truth for every project shown on the site.
 * Links are taken verbatim from the official Work Catalogue.
 */

const PROFILE = {
  name: "Suyash Kelkar",
  role: "Music Composer & Producer",
  tagline:
    "Original film scores, OTT soundtracks and brand music — blending Indian classical and folk textures with electronic, ambient, orchestral and cinematic soundscapes.",
  bioParas: [
    "Suyash is known for his work in both original film scores and background music, with credits across Hindi and Marathi entertainment. His notable projects include the feature films <em>Sanak</em>, <em>Like Aani Subscribe</em> and <em>Asambhav</em>, as well as web series including <em>Human</em>, <em>SHE Season 2</em>, <em>Shantit Kranti Season 2</em> and <em>Premala Conditions Apply</em>.",
    "Beyond films and OTT platforms, Suyash has composed and produced music for several commercial and branded projects. His advertising work includes jingles and music for brands and campaigns such as Sudhan Gold Loan, KRA Jewellers, Kohinoor, Kotak and Starbucks. He has also contributed music to projects such as the MultiFit Warriors docuseries.",
    "As a composer and performer, Suyash approaches music with an experimental and contemporary sensibility — moving between melodic themes, atmospheric sound design, rhythmic experimentation and cinematic scoring to serve the emotional and narrative needs of each project.",
    "A multi-instrumentalist with experience on drums, keyboards, guitars and percussion, he approaches composition from both a musician's and a producer's perspective — combining live instrumentation, electronic production, programming and sound design to build distinctive sonic environments.",
  ],
  skills: [
    "Composition",
    "Arrangement",
    "Programming",
    "Multi-Instrumentalist",
    "Synthesiser Design",
    "Sound Design",
  ],
  daws: ["Apple Logic Pro", "Ableton Live"],
  stats: [
    { value: "12+", label: "Films & Web Series" },
    { value: "15+", label: "Independent Releases" },
    { value: "10+", label: "Brand Films & Jingles" },
    { value: "6", label: "OTT Platforms" },
  ],
};

const CONTACT = {
  email: "suyashmp3@gmail.com",
  phone: "+91 8149505470",
  phoneHref: "+918149505470",
  socials: [
    { label: "Instagram", handle: "@suyash_kelkar", url: "https://www.instagram.com/suyash_kelkar/?hl=en", icon: "instagram" },
    { label: "Spotify", handle: "Artist Profile", url: "https://open.spotify.com/artist/4uFviM30BevXZ2MuQVTZC8?si=f1aJ4z2WQ6uHF0RMekswNQ", icon: "spotify" },
    { label: "Apple Music", handle: "Artist Profile", url: "https://music.apple.com/in/artist/suyash-kelkar/1605322010", icon: "apple" },
    { label: "IMDb", handle: "Filmography", url: "https://www.imdb.com/name/nm13074529/?ref_=ext_shr_lnk", icon: "imdb" },
    { label: "Facebook", handle: "Official Page", url: "https://www.facebook.com/suyashkelkarofficial/", icon: "facebook" },
  ],
};

/* ---- Films & Web Series ---- */
const FILMS = [
  {
    title: "Like Aani Subscribe",
    year: "2024",
    platform: "Amazon Prime",
    type: "Feature Film",
    role: "Music Director & Background Score Composer",
    producer: "Nitin Vaidya Productions",
    links: [
      { label: "Watch on Prime", url: "https://www.primevideo.com/detail/0S8TAMICCZP5BQVFQ6OEK4SIAE?ref_=atv_dp_share_cu_r" },
      { label: "Original Score · Apple Music", url: "https://music.apple.com/us/album/like-aani-subscribe-original-background-score/1778622607" },
    ],
  },
  {
    title: "Asambhav",
    year: "2025",
    platform: "Amazon MX Player",
    type: "Feature Film",
    role: "Background Score Composer",
    producer: "Nitin Vaidya Productions, Mumbai Pune Films & Ericon Telefilms",
    links: [
      { label: "Watch on Prime", url: "https://www.primevideo.com/detail/0SU6N703K20MFF7W6BDMFBHT7L?ref_=atv_dp_share_cu_r" },
      { label: "Original Score · Apple Music", url: "https://music.apple.com/in/album/asambhav-original-background-score/1856524684" },
    ],
  },
  {
    title: "Maya",
    year: "2025",
    platform: "Amazon Prime",
    type: "Marathi Feature Film",
    role: "Background Score Composer",
    producer: "Nitin Vaidya Productions & Shalini Cinemas",
    links: [
      { label: "Original Score · Apple Music", url: "https://music.apple.com/us/album/maya-original-background-score/1881533528" },
    ],
  },
  {
    title: "Sanak",
    year: "2021",
    platform: "Disney+ Hotstar",
    type: "Feature Film",
    role: "Score",
    producer: "Vipul Amrutlal Shah (Sunshine Productions)",
    links: [
      { label: "Watch on Hotstar", url: "https://www.hotstar.com/in/movies/sanak/1260071233" },
    ],
  },
  {
    title: "Human",
    year: "2022",
    platform: "Disney+ Hotstar",
    type: "Web Series",
    role: "Score",
    producer: "Vipul Amrutlal Shah (Sunshine Productions)",
    links: [
      { label: "Watch on Hotstar", url: "https://www.hotstar.com/in/shows/human/1260077204" },
      { label: "Soundtrack · Spotify", url: "https://open.spotify.com/album/4iK1xHov8tNXRy4RnNhrjd?si=_voezOIMSG6p4EkO8vdYNw" },
    ],
  },
  {
    title: "Shantit Kranti — Season 2",
    year: "",
    platform: "SonyLIV",
    type: "Web Series",
    role: "Score",
    producer: "Bhadipa in association with TVF",
    links: [
      { label: "Watch on SonyLIV", url: "https://www.sonyliv.com/shows/shantit-kranti-hindi-1700001317/season/2" },
      { label: "Soundtrack · Spotify", url: "https://open.spotify.com/album/0cGJEM4UMFxCu196wBuykC?si=Gegg2T5zQyW8azVlMpTOPA" },
    ],
  },
  {
    title: "SHE — Season 2",
    year: "",
    platform: "Netflix",
    type: "Web Series",
    role: "Additional Music Producer, Arranger & Synth Designer",
    producer: "Viacom18 Productions, Tripping Point",
    links: [
      { label: "Watch on Netflix", url: "https://www.netflix.com/title/81183494" },
    ],
  },
  {
    title: "Aashram — Season 3 Part 2",
    year: "",
    platform: "Amazon MX Player",
    type: "Web Series",
    role: "Additional Music Producer, Arranger & Synth Designer",
    producer: "Prakash Jha Productions",
    links: [
      { label: "Watch on Prime", url: "https://www.primevideo.com/detail/0KXZ9F4LEJ0U88TOM7APHYD3B8/ref=share_ios_season" },
    ],
  },
  {
    title: "Andhera — Season 1",
    year: "",
    platform: "Amazon Prime",
    type: "Web Series",
    role: "Additional Music Producer, Arranger & Synth Designer",
    producer: "Excel Productions",
    links: [
      { label: "Watch on Prime", url: "https://www.primevideo.com/detail/0QTMT3WZY9D7UJF9UDLSGPE2X3?ref_=atv_dp_share_cu_r" },
    ],
  },
  {
    title: "Premala Conditions Apply",
    year: "",
    platform: "ZEE5",
    type: "Marathi Web Series",
    role: "Background Score Composer",
    producer: "Zee & Sunil Bhosle · Creative Minds Productions",
    links: [
      { label: "Watch on ZEE5", url: "https://zee5.onelink.me/RlQq/a8gbjm1l" },
      { label: "Soundtrack — releasing Sept 2026", url: "" },
    ],
  },
  {
    title: "Andhar Maya",
    year: "",
    platform: "ZEE5",
    type: "Web Series",
    role: "Background Score Composer",
    producer: "Ericon Telefilms",
    links: [
      { label: "Watch on ZEE5", url: "https://zee5.onelink.me/RlQq/xf6hxgh6" },
    ],
  },
  {
    title: "1234 (Ek Don Teen Chaar)",
    year: "",
    platform: "Jio Studios",
    type: "Marathi Film",
    role: "Additional Programmer & Arranger",
    producer: "Jio Studios",
    links: [
      { label: "Credits · IMDb", url: "https://www.imdb.com/title/tt29468078/fullcredits/?ref_=ext_shr_lnk" },
    ],
  },
];

/* ---- Television ---- */
const TV = [
  {
    title: "Taarini",
    year: "Aug 2025 · Active",
    platform: "Zee Marathi",
    type: "TV Serial",
    role: "Composer",
    producer: "Zee Marathi",
    links: [
      { label: "Watch on ZEE5", url: "https://www.zee5.com/tv-shows/details/taarini/0-6-4z5789544" },
    ],
  },
];

/* ---- Advertising, Jingles & Brand Films (video work) ---- */
const BRANDS = [
  { brand: "Sudhan Gold Loan", note: "Jingle · Composed by Suyash Kelkar & Swapnil Kulkarni · Sung by Avadhoot Gupte", yt: "HLc_kFcYves" },
  { brand: "Kotak — Scam the Scammer", note: "Campaign Film 1", yt: "xZreQiJole8" },
  { brand: "Kotak — Scam the Scammer", note: "Campaign Film 2", yt: "bEklt13E1-U" },
  { brand: "Kotak — Scam the Scammer", note: "Campaign Film 3", yt: "TNmM97X9ezI" },
  { brand: "Kohinoor", note: "TVC 1", yt: "1qV8pvXSs00" },
  { brand: "Kohinoor", note: "TVC 2", yt: "95MrI8uaXW4" },
  { brand: "Zuri Locks", note: "TVC", yt: "LWXLJimVqbc" },
  { brand: "Home of Switzindia", note: "Go Create!", yt: "Qf4G2miqfDE" },
  { brand: "WS Bakers Pune", note: "Brand Film", yt: "hF63ga9U0JY" },
  { brand: "Pune Traffic Police", note: "Composed by Suyash Kelkar", yt: "qR2YGwZDNn8" },
  { brand: "MultiFit Warriors", note: "Docuseries · Archis Patil", yt: "lqNZmdQ0VHA" },
  { brand: "MultiFit Warriors", note: "Docuseries · Rupal Shah", yt: "HmlK31pZ8FY" },
  { brand: "MultiFit Warriors", note: "Docuseries · Abhishek Gopal Krishnan", yt: "8oewBvMHYCU" },
  { brand: "KRA Jewellers", note: "TVC", url: "https://www.youtube.com/watch?v=E1tiGuHaHT" },
  { brand: "Starbucks", note: "Composed by Suyash Kelkar", url: "https://www.instagram.com/reel/C4dBrH4MKmf/", platform: "Instagram" },
];

/* ---- Session Musician (Taasha / percussion) ---- */
const SESSION = [
  { title: "Deva Shree Ganesha", note: "Agneepath · Music by Ajay-Atul", yt: "RYqJ5w-GrfM" },
  { title: "Shambhu Sutapa", note: "ABCD · Sachin-Jigar", yt: "DOvG7MC8i7E" },
  { title: "Mohini Mumbaichi Lavani", note: "Double Seat · Shreya Ghoshal", yt: "GWbSsy94Dz0" },
  { title: "Oh Kaka", note: "YZ · Adarsh Shinde", yt: "Uqh3BcyjsCU" },
];

/* ---- Independent Music ---- */
const INDIE = [
  { title: "Zindagi — Chinya", note: "Official OST · Singer & Composer", yt: "88X0xNknUgc" },
  { title: "Karavirpur Adhiwasini", note: "Shubha Mudgal · ft. Girija Oak · Music Arrangement", yt: "PV3R-q_TD6w" },
  { title: "Dancing in the Moonlight", note: "Vibratonix, Shruti Mehendale · 2019", yt: "SpwDOFM6KiY" },
  { title: "Dil Fanna", note: "Roop, Vibratonix · 2020 · Rolling Stone India Playlist", platform: "Spotify", url: "https://open.spotify.com/track/78PNdrYFXhciNDFLDblenu?si=05ebd35790904816" },
  { title: "Dooriyan", note: "Roop, Suyash · 2020 · Rolling Stone India Playlist", platform: "Spotify", url: "https://open.spotify.com/track/3onVxUhYM75SJHIhyz4WtM?si=dbb321b148b7466" },
  { title: "Dastan", note: "Gaurav Tophakhane · 2021 · Rolling Stone India Playlist", platform: "Spotify", url: "https://open.spotify.com/track/1tYayUWXcpNwtq1zbVDqnj?si=a925b0af0ae748c8" },
  { title: "Into the Storm", note: "Svetlana Walden · 2019", platform: "Spotify", url: "https://open.spotify.com/track/5hdYxoctNEZy7OBnTS1pvc?si=ef85c7272def408b" },
  { title: "Faded", note: "Abhishek, S-rob, Vibratonix · 2019", platform: "Spotify", url: "https://open.spotify.com/track/7sC92weqHXPaiNEjhzRc05?si=5a7705a2df044f24" },
  { title: "Not Mine", note: "SK, Suyash, Omkar Pradhan · 2023", platform: "Spotify", url: "https://open.spotify.com/track/2WHfPmHgTpgQVx5AoLhk5F?si=f72e10304eb4478d" },
  { title: "Rap Tere Baap Ka", note: "SK, Suyash, Omkar Pradhan · 2023", platform: "Spotify", url: "https://open.spotify.com/track/0TqxIQ52UKCM8PQeqsn7Wg?si=1c61eaa689644978" },
  { title: "Durdrishti", note: "SK, Suyash, Omkar Pradhan · 2023", platform: "Spotify", url: "https://open.spotify.com/track/3eCCB5m0eKUBUwdKDes8Jr?si=65b0bccb2de949c6" },
  { title: "Totem Pol", note: "SK, Suyash, Omkar Pradhan · 2023", platform: "Spotify", url: "https://open.spotify.com/track/7nPz6bziSAuxN0IfceQCQw?si=6f208b9c94364cd3" },
  { title: "Flow", note: "SK, Suyash, Omkar Pradhan · 2023", platform: "Spotify", url: "https://open.spotify.com/track/5UTJun7BAVyOjtmjwU818a?si=2638632271ca447d" },
  { title: "Bharat Maza Desh", note: "Anand Kshirsagar · 2020", platform: "Spotify", url: "https://open.spotify.com/track/7o7Hqfm0BZfI74cRN5vSeY?si=405ec0ea500b47c9" },
  { title: "Saagara — Three Legged Horse", note: "Rahul Deshpande · Co-Producer & Rhythm Arrangements", platform: "Apple Music", url: "https://music.apple.com/in/song/saagara-feat-rahul-deshpande/1846910477" },
  { title: "Independent Releases", note: "Mixed genres · Full discography", platform: "Bandcamp", url: "https://vibratonix.bandcamp.com/music" },
  { title: "Demo Tracks", note: "Mixed genres · Selected demos", platform: "SoundCloud", url: "https://soundcloud.com/suyash-kelkar/sets/demos-by-suyash-kelkar/s-8kTrgzjLSWA" },
];
