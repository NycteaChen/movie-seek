import ListArea from '@/components/pages/home/ListArea';

interface SearchParamsType {
  searchParams: Promise<{ query: string }>;
}

const mock = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [10402, 35, 878, 28],
      id: 185309,
      original_language: 'cn',
      original_title: '星際鈍胎',
      overview:
        "This is an extremely rare example of science fiction, Hong Kong style, but, fittingly, it's unlike any sci-fi flick you've ever seen. Alien abductions, suicide pacts, superstardom, and the reality of science fiction itself is spotlighted in this bright, crazy, truly out of this world epic -- one of the more unusual movies in the Hong Kong cinema of the early 1980s. And if you know 80's Hong Kong cinema at all, you know that's really saying something!",
      popularity: 0.4765,
      poster_path: '/Al2MEAUxS5VATrebnuwQE0JsL1E.jpg',
      release_date: '1983-02-12',
      title: 'Twinkle Twinkle Little Star',
      video: false,
      vote_average: 1.0,
      vote_count: 1
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [16],
      id: 773873,
      original_language: 'zh',
      original_title: '星際大騙局之登月計劃',
      overview:
        'In 1969, Apollo 11 landed on the moon. Despite all the conspiracy theories around it, The US successfully showed the world what a powerful country can accomplish. 50 years later, people in Taiwan are struggling between an identity crisis and economic fluctuations, hoping for something or someone that would save the day.  This desire is why you are hired to be a national hero – the very first Taiwanese who lands on the moon.',
      popularity: 0.1141,
      poster_path: '/qJQE7WJTMfsNWjNZf6IyTuNp2Dz.jpg',
      release_date: '2020-09-03',
      title: 'Great Hoax: The Moon Landing',
      video: false,
      vote_average: 0.0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/eCqIpFpYIcZpCBexU3y8BfZKR7f.jpg',
      genre_ids: [10751, 35, 878],
      id: 552524,
      original_language: 'en',
      original_title: 'Lilo & Stitch',
      overview: 'The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.',
      popularity: 130.711,
      poster_path: '/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg',
      release_date: '2025-05-21',
      title: 'Lilo & Stitch',
      video: false,
      vote_average: 7.2,
      vote_count: 28
    },
    {
      adult: false,
      backdrop_path: '/zzzoRNVSaUv6e1hpADjUDeM3EvY.jpg',
      genre_ids: [878, 28, 12],
      id: 13475,
      original_language: 'en',
      original_title: 'Star Trek',
      overview:
        'The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.',
      popularity: 8.479,
      poster_path: '/lV5OpzAss1z06YNagOVap1I35mH.jpg',
      release_date: '2009-05-06',
      title: 'Star Trek',
      video: false,
      vote_average: 7.426,
      vote_count: 10022
    },
    {
      adult: false,
      backdrop_path: '/l33oR0mnvf20avWyIMxW02EtQxn.jpg',
      genre_ids: [12, 18, 878],
      id: 157336,
      original_language: 'en',
      original_title: 'Interstellar',
      overview:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      popularity: 35.8526,
      poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      release_date: '2014-11-05',
      title: 'Interstellar',
      video: false,
      vote_average: 8.455,
      vote_count: 37142
    },
    {
      adult: false,
      backdrop_path: '/w102m4HoCP5uxhW8Yh7Hv7QShix.jpg',
      genre_ids: [16, 10751, 35],
      id: 11544,
      original_language: 'en',
      original_title: 'Lilo & Stitch',
      overview:
        'As Stitch, a runaway genetic experiment from a faraway planet, wreaks havoc on the Hawaiian Islands, he becomes the mischievous adopted alien "puppy" of an independent little girl named Lilo and learns about loyalty, friendship, and ʻohana, the Hawaiian tradition of family.',
      popularity: 52.2852,
      poster_path: '/m13Vbzv7R2GMAl3GXFrkmMEgCFQ.jpg',
      release_date: '2002-06-21',
      title: 'Lilo & Stitch',
      video: false,
      vote_average: 7.541,
      vote_count: 6465
    },
    {
      adult: false,
      backdrop_path: '/5rYnygKCkmqWuMv1O5yAnzGF8gV.jpg',
      genre_ids: [12, 878, 28],
      id: 339964,
      original_language: 'en',
      original_title: 'Valerian and the City of a Thousand Planets',
      overview:
        'In the 28th century, Valerian and Laureline are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and cultures. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe.',
      popularity: 8.119,
      poster_path: '/vlc95gl3PtrjxSEuM8RhTtSm2xU.jpg',
      release_date: '2017-07-20',
      title: 'Valerian and the City of a Thousand Planets',
      video: false,
      vote_average: 6.628,
      vote_count: 7618
    },
    {
      adult: false,
      backdrop_path: '/8iGYeG3Co5LROEx0Uf8NhH1xCTg.jpg',
      genre_ids: [16, 10749, 878, 10751],
      id: 818350,
      original_language: 'en',
      original_title: 'Blush',
      overview:
        'When a horticulturalist-astronaut crashes onto a desolate planet, he encounters an ethereal visitor and discovers the joy of building a new life—realizing the universe has delivered something astonishing.',
      popularity: 1.1146,
      poster_path: '/eOnRPzGjmGwmoqtznGv1gx22JWh.jpg',
      release_date: '2021-06-13',
      title: 'Blush',
      video: false,
      vote_average: 7.832,
      vote_count: 158
    },
    {
      adult: false,
      backdrop_path: '/8XdXSbjYaXlhUuqbWdnmLGc0bvb.jpg',
      genre_ids: [878, 12, 28],
      id: 986210,
      original_language: 'en',
      original_title: 'Space Wars: Quest for the Deepstar',
      overview:
        'A father and daughter team of space scavengers race against a band of evil mercenaries to reach a legendary lost freighter called the Deepstar. Along their trek through the universe, they encounter monsters, aliens, robots, and something even worse.',
      popularity: 1.2633,
      poster_path: '/r4BLXXsaavI3tgSNDd4upxsxc5O.jpg',
      release_date: '2023-04-21',
      title: 'Space Wars: Quest for the Deepstar',
      video: false,
      vote_average: 4.304,
      vote_count: 51
    },
    {
      adult: false,
      backdrop_path: '/cAOaUTJzUG8vfXcThFNIC5tUMig.jpg',
      genre_ids: [28, 878, 12],
      id: 841,
      original_language: 'en',
      original_title: 'Dune',
      overview:
        'In the year 10,191, the most precious substance in the universe is the spice Melange. The spice extends life. The spice expands consciousness. The spice is vital to space travel.  The spice exists on only one planet in the entire universe, the vast desert planet Arrakis, also known as Dune.  Its native inhabitants, the Fremen, have long held a prophecy that a man would come, a messiah who would lead them to true freedom.',
      popularity: 7.9994,
      poster_path: '/4kJmUCE7mkVJjXa7A0g2rY4IGTm.jpg',
      release_date: '1984-12-14',
      title: 'Dune',
      video: false,
      vote_average: 6.183,
      vote_count: 3176
    },
    {
      adult: false,
      backdrop_path: '/zZUuNeCzA5W6YJweyFLxBN6xTHx.jpg',
      genre_ids: [878, 53, 27],
      id: 190847,
      original_language: 'en',
      original_title: 'The Last Days on Mars',
      overview:
        'On the last day of the first manned mission to Mars, a crew member of Tantalus Base believes he has made an astounding discovery – fossilized evidence of bacterial life. Unwilling to let the relief crew claim all the glory, he disobeys orders to pack up and goes out on an unauthorized expedition to collect further samples. But a routine excavation turns to disaster when the porous ground collapses and he falls into a deep crevice. His devastated colleagues attempt to recover his body. However, when another vanishes, they start to suspect that the life-form they have discovered is not without danger.',
      popularity: 1.5505,
      poster_path: '/3AoI1jrCO6j90N0w3gF67vWTntE.jpg',
      release_date: '2013-08-11',
      title: 'The Last Days on Mars',
      video: false,
      vote_average: 5.472,
      vote_count: 839
    },
    {
      adult: false,
      backdrop_path: '/vsjuHP9RQZJgYUvvSlO3mjJpXkq.jpg',
      genre_ids: [878, 28, 12, 53],
      id: 200,
      original_language: 'en',
      original_title: 'Star Trek: Insurrection',
      overview:
        'When an alien race and factions within Starfleet attempt to take over a planet that has "regenerative" properties, it falls upon Captain Picard and the crew of the Enterprise to defend the planet\'s people as well as the very ideals upon which the Federation itself was founded.',
      popularity: 2.7646,
      poster_path: '/xQCMAHeg5M9HpDIqanYbWdr4brB.jpg',
      release_date: '1998-12-11',
      title: 'Star Trek: Insurrection',
      video: false,
      vote_average: 6.435,
      vote_count: 1251
    },
    {
      adult: false,
      backdrop_path: '/p1XtUnWJrmVNqyhYJGIatMNt8C1.jpg',
      genre_ids: [16, 878, 10402, 12],
      id: 11049,
      original_language: 'en',
      original_title: 'Interstella 5555: The 5tory of the 5ecret 5tar 5ystem',
      overview:
        'Four talented alien musicians are kidnapped by a record producer who disguises them as humans. Shep, a space pilot in love with bass player Stella, follows them to Earth. Reprogrammed to forget their real identities and renamed The Crescendolls, the group quickly becomes a huge success playing soulless corporate pop. At a concert, Shep manages to free all the musicians except Stella, and the band sets out to rediscover who they really are — and to rescue Stella.',
      popularity: 1.8227,
      poster_path: '/n0K6mjU8aVnag2mi93FuvJsjZi.jpg',
      release_date: '2003-05-28',
      title: 'Interstella 5555: The 5tory of the 5ecret 5tar 5ystem',
      video: false,
      vote_average: 7.8,
      vote_count: 480
    },
    {
      adult: false,
      backdrop_path: '/AeDS2MKGFy6QcjgWbJBde0Ga6Hd.jpg',
      genre_ids: [878, 18],
      id: 419704,
      original_language: 'en',
      original_title: 'Ad Astra',
      overview:
        'The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.',
      popularity: 2.9223,
      poster_path: '/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg',
      release_date: '2019-09-17',
      title: 'Ad Astra',
      video: false,
      vote_average: 6.114,
      vote_count: 6793
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [18, 878],
      id: 1051046,
      original_language: 'de',
      original_title: 'Almost Home',
      overview:
        'When they learn of an outbreak of a dangerous virus shortly before their long-awaited return to Earth, a teenager and his mother struggle to decide whether to land or return to space aboard their confined spaceship.',
      popularity: 0.236,
      poster_path: '/A628eXzXaYaAtFibYxMfmtuRhED.jpg',
      release_date: '2022-07-19',
      title: 'Almost Home',
      video: false,
      vote_average: 0.0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/qEIbecsWGdcdVtk06pqsWt32y56.jpg',
      genre_ids: [878, 28, 12],
      id: 540247,
      original_language: 'en',
      original_title: 'Jurassic Galaxy',
      overview:
        "In the near future, a ship of space explorers crash land on an unknown planet. They're soon met with some of their worst fears as they discover the planet is inhabited by monstrous dinosaurs.",
      popularity: 0.4794,
      poster_path: '/l2F4yWfLs21lrUyEh4bNOzjTEsb.jpg',
      release_date: '2018-08-20',
      title: 'Jurassic Galaxy',
      video: false,
      vote_average: 5.127,
      vote_count: 213
    },
    {
      adult: false,
      backdrop_path: '/k3PqsPLkKLDyjZupZ6gqZHPxMv3.jpg',
      genre_ids: [28, 12, 878],
      id: 54138,
      original_language: 'en',
      original_title: 'Star Trek Into Darkness',
      overview:
        'When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis.  With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one man weapon of mass destruction. As our heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.',
      popularity: 6.3497,
      poster_path: '/7XrRkhMa9lQ71RszzSyVrJVvhyS.jpg',
      release_date: '2013-05-05',
      title: 'Star Trek Into Darkness',
      video: false,
      vote_average: 7.322,
      vote_count: 9236
    },
    {
      adult: false,
      backdrop_path: '/8HUsm0xA1tEL1VMS7HuHJwJPTuH.jpg',
      genre_ids: [16, 35, 10751, 10770],
      id: 21316,
      original_language: 'en',
      original_title: 'Leroy & Stitch',
      overview:
        'Lilo, Stitch, Jumba, and Pleakley have finally caught all of Jumba\'s genetic experiments and found the one true place where each of them belongs. Stitch, Jumba and Pleakley are offered positions in the Galactic Alliance, turning them down so they can stay on Earth with Lilo, but Lilo realizes her alien friends have places where they belong – and it\'s finally time to say "aloha".',
      popularity: 14.6623,
      poster_path: '/8ddTcTllI5U1Gq2EvGYE2CBprOS.jpg',
      release_date: '2006-06-23',
      title: 'Leroy & Stitch',
      video: false,
      vote_average: 6.552,
      vote_count: 544
    },
    {
      adult: false,
      backdrop_path: '/f53Jujiap580mgfefID0T0g2e17.jpg',
      genre_ids: [16, 10751, 878, 35, 10770],
      id: 857702,
      original_language: 'en',
      original_title: 'LEGO Star Wars Terrifying Tales',
      overview:
        'Poe Dameron and BB-8 must face the greedy crime boss Graballa the Hutt, who has purchased Darth Vader’s castle and is renovating it into the galaxy’s first all-inclusive Sith-inspired luxury hotel.',
      popularity: 1.5298,
      poster_path: '/fYiaBZDjyXjvlY6EDZMAxIhBO1I.jpg',
      release_date: '2021-10-01',
      title: 'LEGO Star Wars Terrifying Tales',
      video: false,
      vote_average: 6.857,
      vote_count: 255
    },
    {
      adult: false,
      backdrop_path: '/fMM8DSqVVqAPLxgadLSo1AwzytA.jpg',
      genre_ids: [28, 878, 53],
      id: 522964,
      original_language: 'en',
      original_title: 'Incoming',
      overview:
        "The International Space Station is now a prison - the ultimate black site. No one's getting out. And no one knows it's there. But when the imprisoned terrorists take over the Station and turn it into a missile aimed at Moscow, only a shuttle pilot and a rookie doctor can stop them. Their task is complicated by a rogue CIA agent (Scott Adkins) who has his own plans for the station and the terrorists within.",
      popularity: 0.8595,
      poster_path: '/xeGX5JspkJLBupB8qciJhaEc4C7.jpg',
      release_date: '2018-05-04',
      title: 'Incoming',
      video: false,
      vote_average: 4.3,
      vote_count: 91
    }
  ],
  total_pages: 5,
  total_results: 83
};

const Search = async ({ searchParams }: SearchParamsType) => {
  const params = await searchParams;
  const { query } = params;
  const loading = false;
  return (
    <div className="pt-20">
      <section>
        <div className="container-sm">keyword: {query}</div>
      </section>
      <ListArea
        title={`${mock?.total_results !== undefined ? `${mock?.total_results} ` : ''}Search Results`}
        list={mock.results}
        loading={loading}
      />
    </div>
  );
};

export default Search;
