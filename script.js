// Memilih semua elemen kartu gambar
const cards = document.querySelectorAll('.card');

// Mengatur pengamat layar (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Jika kartu masuk ke area layar HP (baik dari atas maupun bawah)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // Jika kartu keluar dari area layar HP, hilangkan efeknya lagi
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2 // Animasi aktif saat 20% bagian kartu terlihat di layar
});

// Jalankan pengamat untuk setiap kartu
cards.forEach(card => {
  observer.observe(card);
});





// Database karya yang disesuaikan dengan isi index.html milikmu
const artworks = [
  {
    id: "1",
    title: "Almost",
    meta: "Scribble Art, 2026",
    image: "art01.jpg",
    description: "The artwork titled 'Almost' captures the agonizing space between salvation and destruction. Rendered in raw, scribbled black-and-white lines, it portrays a solitary human figure suspended above a dark abyss, desperately reaching upward toward a colossal, chaotic hand descending from above. The Agony of Proximity: The title reflects the tension of being a mere thread's distance from an unknown fate—a split second where failure and success coexist. Cosmic Disproportion: The monumental scale of the hand and the watching, silent spiral eyes emphasize human fragility against overwhelming, unstoppable forces. Dual Ambiguity: It remains intentionally unclear whether the descending hand is a savior pulling the figure out of the void or a monster about to crush it, forcing the viewer to confront their own fears and hopes."
  },
  {
    id: "2",
    title: "There",
    meta: "Scribble Art, 2026",
    image: "art02.jpg",
    description: "The artwork, titled 'There', captures a profound moment of despair, introspection, or perhaps paralysis in the face of an existential question. Rendered in raw, scribbled black-and-white lines, a solitary human figure is seated, head bowed, on a simple stool. A massive, chaotic explosion of tangled lines erupts from their head, while a dark abyss, a vortex of shadow, lies just in front of them, suggesting an overwhelming mental burden or a path toward the unknown. They are surrounded by silent, spiral eyes that observe their internal and external world without offering answers. This piece visualizes the heavy, inescapable presence of a difficult choice, a past regret, or a dark future that is simply there, forcing the viewer to confront the stillness and isolation of an unresolved, defining moment."
  },
  {
    id: "3",
    title: "Whispering",
    meta: "Scribble Art, 2026",
    image: "art03.jpg",
    description: "The artwork, titled 'Whispering', powerfully portrays the overwhelming influence of paranoia, self-doubt, and intruding thoughts. In the foreground, a prominent scribbled figure stands as the source or subject of relentless internal noise, represented by chaotic line work and jagged, electric speech lines. In the distance, a second figure stands trapped beneath a massive, shadowy hand near a dark void, symbolizing how persistent, subtle whispers can slowly manipulate and control one's reality. Floating spiral eyes watch the scene unfold without emotion, emphasizing a deep feeling of isolation and constant surveillance. Together, the piece visualizes how invisible words and thoughts can become an inescapable, towering force within the mind."
  },
  {
    id: "4",
    title: "IF",
    meta: "Scribble Art, 2026",
    image: "art04.jpg",
    description: "The artwork, titled 'IF', explores the haunting weight of regret, possibility, and what could have been. Set in a dark, atmospheric forest under a glowing full moon, a central stone monument stands engraved with the word IF. The barren tree trunks surrounding it are embedded with numerous watchful eyes, creating a intense sense of judgment and eternal observation. This powerful scene visualizes how a single word can become an inescapable monolith of reflection, where endless hypothetical choices lie buried under the silent gaze of time and memory."
  },
  {
    id: "5",
    title: "Lone Wolf",
    meta: "Scribble Art, 2026",
    image: "art05.jpg",
    description: "The artwork, titled 'Lone Wolf', portrays the intense solitude and quiet resilience of walking one's path alone. Rendered in dark, expressive scratch lines, a solitary wolf stands vigilant on an elevated slope, framed by the silhouettes of stark, leafless trees. Its chaotic, scribbled form mirrors an inner complexity—a mixture of wild instinct, survival, and deep isolation. Set against a foggy, monochrome backdrop, the image visualizes the quiet strength and burden of self-reliance, capturing the spirit of a wanderer who navigates a shadowy world entirely on their own terms."
  },
  {
    id: "6",
    title: "The Lonely Fortress",
    meta: "Scribble Art, 2026",
    image: "art06.jpg",
    description: "The artwork, titled 'The Lonely Fortress', captures the paradox of self-preservation and profound isolation. Rendered in dark, dense scribble lines, a towering black spire pierces through a misty, monochrome expanse. Near its peak, a single glowing window casts a beam of light outward, signaling life, hope, or a desperate cry for connection within a fortress built for defense. Encircling the tower is a halo of orb-like lights, representing orbiting thoughts, distant guardians, or impenetrable barriers. The piece powerfully visualizes the emotional walls built to protect oneself, where solitude offers safety, yet leaves the inner spirit isolated in its own sanctuary."
  },
  {
    id: "7",
    title: "Reflection",
    meta: "Scribble Art, 2026",
    image: "art07.jpg",
    description: "The artwork, titled 'Reflection', explores the duality of human consciousness and the internal conflict between external perception and inner chaos. Rendered in raw, black-and-white sketch lines, the composition features a central face split into contrasting halves—one composed composedly with eyes closed in calm introspection, while the other dissolves into a dark, chaotic web of scribbles dominated by a wide, staring eye. A shadowy, twin-like silhouette fractures off to the side, surrounded by floating spiral eyes that signify relentless self-scrutiny and anxiety. The piece powerfully visualizes the confrontation with one's true self, capturing the tension between the serene mask shown to the world and the chaotic reality lurking just beneath the surface."
  },
  {
    id: "8",
    title: "The Unspoken Key",
    meta: "Scribble Art, 2026",
    image: "art08.jpg",
    description: "The artwork, titled 'The Unspoken Key', explores the profound burden of emotional repression and the hidden paths to self-liberation. Rendered in intense, scribbled monochrome lines, a central human figure stands bound inside a massive, heavy padlock, its surface etched with dozens of intricate keyholes representing lost solutions, unexpressed feelings, or guarded secrets. Below, a single ornate key lies just out of reach on the ground, glowing faintly amidst the surrounding darkness. The piece powerfully visualizes the frustration of holding the ultimate answer within oneself—a truth or emotion that remains unspoken, keeping the spirit imprisoned until the courage to reach out and unlock it is found."
  },
  {
    id: "9",
    title: "Hold It",
    meta: "Scribble Art, 2026",
    image: "art09.jpg",
    description: "The artwork, titled 'Hold It', explores the feeling of being trapped within a complex mental labyrinth while external forces attempt to control or break open your inner core. Rendered in raw, scribbled black-and-white lines, a central circular maze conceals a solitary human silhouette standing at its absolute center. From the dark periphery, multiple eerie, elongated hands reach inward, gripping the outer edges of the structure as if trying to breach, tilt, or stabilize it. Surrounding spiral eyes and dark voids embedded in the paths heighten the sense of surveillance and psychological pressure. The piece powerfully visualizes the struggle to hold your ground, protect your core identity, and maintain control amidst overwhelming, chaotic intrusion."
  },
  {
    id: "10",
    title: "The Inner Monolith",
    meta: "Scribble Art, 2026",
    image: "art10.jpg",
    description: "The artwork, titled 'The Inner Monolith', powerful portrays the agonizing labor of self-discovery, identity shaping, and internal excavation. Rendered in raw, scribbled black-and-white lines, a monumental stone head with glowing, vacant eyes dominates the composition, representing a towering ego, rigid self-perception, or an overwhelming emotional facade. Deep within a carved archway at its base, a small silhouette of a human figure continuously strikes at the rock with a pickaxe, laboring tirelessly to reshape or escape their own grand structure. Floating spiral eyes surround the giant monolith, adding an aura of eternal judgment and watchful pressure. The piece visually captures the exhausting truth that we are both the sculptors and the stone of our own minds, constantly chipping away at our hardened outer shells to reveal the raw reality within."
  },
  {
    id: "11",
    title: "The Rooted Isolation",
    meta: "Scribble Art, 2026",
    image: "art11.jpg",
    description: "The artwork, titled 'The Rooted Isolation', explores the profound boundary between self-preservation and complete detachment. Rendered in raw, scribbled black-and-white lines, a solitary figure stands atop a small mound, surrounded by a glowing aura against two dark, swirling vortexes above. Beneath the mound, a dense, thorny network of roots forms an impenetrable ringed barrier, keeping a sea of desperate hands reaching from below at bay. Floating spiral eyes watch passively from the background, adding an air of cold observation. The piece powerfully visualizes how the walls we anchor ourselves upon—meant to shield us from external chaos, judgment, or connection—can deeply root us in a fortress of our own lonely making."
  },
];

// Menangkap parameter URL (misal: detail.html?id=1)
const urlParams = new URLSearchParams(window.location.search);
const artworkId = urlParams.get('id');

// Hanya jalankan logika detail jika elemen halaman detail ada
const titleEl = document.getElementById('art-title');

if (titleEl) {
  const selectedArtwork = artworks.find(item => item.id === artworkId);

  if (selectedArtwork) {
    document.getElementById('art-title').innerText = selectedArtwork.title;
    document.getElementById('art-meta').innerText = selectedArtwork.meta;
    document.getElementById('art-image').src = selectedArtwork.image;
    document.getElementById('art-image').alt = selectedArtwork.title;
    document.getElementById('art-description').innerText = selectedArtwork.description;
  } else {
    document.getElementById('art-title').innerText = "Artwork Not Found";
    document.getElementById('art-description').innerText = "Silakan kembali ke halaman utama untuk memilih karya seni.";
  }
}
