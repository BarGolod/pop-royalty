import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private description: string =
    "Explore the discography of Pop Royalty icons to enrich your knowledge of their legacy in music history.<br><br> Here, you have the opportunity to explore a wide spectrum of musical knowledge, encompassing rich information about the world of music.<br><br>From the glamorous 80s to the colorful 90s, spanning through the glitzy 2000s, the unique 2010s, and into the recent 2020s.<br><br> As for what the future holds, well, it's anyone's guess.<br><br>";

  private disclaimer =
    "But what is <b>Pop Royalty 👑</b> or a <b>musical LEGEND ⭐</b>?<br><br>How do you define it?<br><br>Is it determined by the number of years in the industry?<br><br>Is it based on chart placements, record sales, cultural impact, or notoriety for their actions?<br><br>Is it about being the most artistic, unique, having the best voice, or the most exceptional lyrics?<br><br>Is it related to budget or production value, or is it simply having a talented team and a reputable record label behind them?<br><br>How can we compare generations that had vinyl records and radio to the streaming era?<br><br>Making into this list is a blend of subjective opinions and a track record of success over the years.<br><br>Each decade has chosen 10 stars who reached their prime during that specific decade, even though most careers continued beyond.<br><br>Let's break down what defines a <b>Pop Royalty 👑</b>:<br><br><b>Longevity</b>: Legends maintain successful careers over many years or even decades, with their influence persevering through evolving musical trends and generations.<br><br><b>Innovation</b>: They introduce groundbreaking and innovative elements to their genre or the music industry as a whole, often pushing boundaries and redefining what is possible in music.<br><br><b>Impact</b>: Legends leave a profound mark on the cultural and social landscape. Their music resonates with people on a deep level, often addressing important issues and emotions.<br><br><b>Enduring Popularity</b>: Their music remains popular and relevant long after its initial release, standing the test of time and attracting new generations of fans.<br><br><b>Critical Acclaim</b>: Legends often receive critical acclaim and recognition for their work, including awards, accolades, and industry honors.<br><br><b>Influence</b>: They inspire and influence other artists and musicians. Many contemporary artists frequently cite legends as their inspirations.<br><br><b>Iconic Status</b>: Legends are celebrated not only for their music but also for their image and persona, becoming cultural icons in their own right.<br><br><b>Cultural Significance</b>: Legends may be associated with specific movements, eras, or moments in music history. Their work reflects and shapes the culture of their time.<br><br><b>Record Sales</b>: While not a definitive criterion, many legends achieve high record sales, with some even breaking records for the best-selling albums or singles of all time.<br><br><b>Consistency</b>: Legends consistently produce quality music and maintain their reputation over time, avoiding major controversies or downturns in their careers.<br><br><b>Live Performances</b>: Their live performances are often legendary in their own right, drawing large audiences and creating memorable experiences.<br><br><b>Legacy</b>: Legends leave a lasting legacy not only in terms of their music but also in how they've contributed to the evolution of the music industry itself.";

  private navbarLinks: any = [
    { name: 'Home', id: 'home', key: 'home' },
    { name: '80s', id: 'decades/80s', key: '80s' },
    { name: '90s', id: 'decades/90s', key: '90s' },
    { name: '2000s', id: 'decades/2000s', key: '2000s' },
    { name: '2010s', id: 'decades/2010s', key: '2010s' },
    { name: '2020s', id: 'decades/2020s', key: '2020s' },
    {
      name: 'Honorable Mentions',
      id: 'decades/Honorable Mentions',
      key: 'Honorable Mentions',
    },
  ];

  private eightiesData: any = [
    {
      index: 1,
      name: 'Michael Jackson',
      title: 'King of Pop',
      description:
        "Known as the 'King of Pop,' Michael Jackson was one of the most iconic and influential artists of the 1980s. His album 'Thriller' remains the best-selling album of all time.",
      image: 'assets/img/80s/michael_jackson.webp',
      link: 'https://en.wikipedia.org/wiki/Michael_Jackson',
      spotifyLink: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm',
      appleMusicLink: 'https://music.apple.com/us/artist/michael-jackson/32940',
    },
    {
      index: 2,
      name: 'Madonna',
      title: 'Queen of Pop',
      description:
        "Madonna, known as the 'Queen of Pop,' emerged as a major pop icon in the 1980s. She released a string of hit albums and became a symbol of female empowerment in pop music.",
      image: 'assets/img/80s/madonna.webp',
      link: 'https://en.wikipedia.org/wiki/Madonna',
      spotifyLink: 'https://open.spotify.com/artist/6tbjWDEIzxoDsBA1FuhfPW',
      appleMusicLink: 'https://music.apple.com/us/artist/madonna/20044',
    },
    {
      index: 3,
      name: 'Prince',
      title: 'Prince of Pop',
      description:
        "Prince was a musical genius known for his eclectic style and innovative approach to music. His albums, including 'Purple Rain,' are considered classics of the 1980s.",
      image: 'assets/img/80s/prince.webp',
      link: 'https://en.wikipedia.org/wiki/Prince_(musician)',
      spotifyLink: 'https://open.spotify.com/artist/5a2EaR3hamoenG9rDuVn8j',
      appleMusicLink: 'https://music.apple.com/us/artist/prince/155814',
    },
    {
      index: 4,
      name: 'Whitney Houston',
      title: 'The Voice',
      description:
        "Whitney Houston's powerful voice and numerous chart-topping hits made her one of the biggest pop stars of the 1980s.",
      image: 'assets/img/80s/whitney_houston.webp',
      link: 'https://en.wikipedia.org/wiki/Whitney_Houston',
      spotifyLink: 'https://open.spotify.com/artist/6XpaIBNiVzIetEPCWDvAFP',
      appleMusicLink: 'https://music.apple.com/us/artist/whitney-houston/13952',
    },
    {
      index: 5,
      name: 'George Michael',
      title: 'Pop Sensation',
      description:
        "George Michael, both as a solo artist and with the duo Wham!, had a significant impact on 80s pop music. Hits like 'Careless Whisper' and 'Faith' remain popular to this day.",
      image: 'assets/img/80s/george_michael.webp',
      link: 'https://en.wikipedia.org/wiki/George_Michael',
      spotifyLink: 'https://open.spotify.com/artist/19ra5tSw0tWufvUp8GotLo',
      appleMusicLink: 'https://music.apple.com/us/artist/george-michael/894337',
    },
    {
      index: 6,
      name: 'Tina Turner',
      title: 'Queen of Rock & Roll',
      description:
        "Tina Turner's comeback in the 1980s with the album 'Private Dancer' and its hit singles cemented her status as a pop legend.",
      image: 'assets/img/80s/tina_turner.webp',
      link: 'https://en.wikipedia.org/wiki/Tina_Turner',
      spotifyLink: 'https://open.spotify.com/artist/1zuJe6b1roixEKMOtyrEak',
      appleMusicLink: 'https://music.apple.com/us/artist/tina-turner/488075',
    },
    {
      index: 7,
      name: 'Janet Jackson',
      title: 'Pop Legend',
      description:
        'Janet Jackson made a significant impact in the 1980s with her innovative music and memorable hits.',
      image: 'assets/img/80s/janet_jackson.webp',
      link: 'https://en.wikipedia.org/wiki/Janet_Jackson',
      spotifyLink: 'https://open.spotify.com/artist/4qwGe91Bz9K2T8jXTZ815W',
      appleMusicLink: 'https://music.apple.com/us/artist/janet-jackson/1272779',
    },
    {
      index: 8,
      name: 'Elton John',
      title: 'Rock Icon',
      description:
        'Elton John, a rock and pop legend, continued to create timeless music in the 1980s and beyond.',
      image: 'assets/img/80s/elton_john.webp',
      link: 'https://en.wikipedia.org/wiki/Elton_John',
      spotifyLink: 'https://open.spotify.com/artist/3PhoLpVuITZKcymswpck5b',
      appleMusicLink: 'https://music.apple.com/us/artist/elton-john/54657',
    },
    {
      index: 9,
      name: 'Dolly Parton',
      title: 'Queen of Country',
      description:
        "Dolly Parton's country music and charismatic personality made her a beloved figure in the 1980s.",
      image: 'assets/img/80s/dolly_parton.webp',
      link: 'https://en.wikipedia.org/wiki/Dolly_Parton',
      spotifyLink: 'https://open.spotify.com/artist/32vWCbZh0xZ4o9gkz4PsEU',
      appleMusicLink: 'https://music.apple.com/us/artist/dolly-parton/535066',
    },
    {
      index: 10,
      name: 'Lionel Richie',
      title: 'Soulful Artist',
      description:
        "Lionel Richie's soulful tunes and timeless ballads defined the music of the 1980s.",
      image: 'assets/img/80s/lionel_richie.webp',
      link: 'https://en.wikipedia.org/wiki/Lionel_Richie',
      spotifyLink: 'https://open.spotify.com/artist/3gMaNLQm7D9MornNILzdSl',
      appleMusicLink: 'https://music.apple.com/us/artist/lionel-richie/48397',
    },
  ];

  private ninetiesData: any = [
    {
      index: 1,
      name: 'Mariah Carey',
      title: 'Queen of Christmas',
      description:
        'Known for her incredible vocal range and chart-topping hits, Mariah Carey is often regarded as one of the most legendary artists of the 1990s.',
      image: 'assets/img/90s/mariah_carey.webp',
      link: 'https://en.wikipedia.org/wiki/Mariah_Carey',
      spotifyLink: 'https://open.spotify.com/artist/4iHNK0tOyZPYnBU7nGAgpQ',
      appleMusicLink: 'https://music.apple.com/us/artist/mariah-carey/91853',
    },
    {
      index: 2,
      name: 'Tupac Shakur',
      title: 'Hip-Hop Icon',
      description:
        "Tupac's influence on the hip-hop genre and his enduring legacy place him near the top of the list of 1990s legends.",
      image: 'assets/img/90s/tupac_shakur.webp',
      link: 'https://en.wikipedia.org/wiki/Tupac_Shakur',
      spotifyLink: 'https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh',
      appleMusicLink: 'https://music.apple.com/us/artist/2pac/105998',
    },
    {
      index: 3,
      name: 'Celine Dion',
      title: 'Vocal Powerhouse',
      description:
        'With her powerful ballads, Celine Dion made a significant impact on the music scene in the 1990s.',
      image: 'assets/img/90s/celine_dion.webp',
      link: 'https://en.wikipedia.org/wiki/Celine_Dion',
      spotifyLink: 'https://open.spotify.com/artist/4S9EykWXhStSc15wEx8QFK',
      appleMusicLink:
        'https://music.apple.com/us/artist/c%C3%A9line-dion/63729',
    },
    {
      index: 4,
      name: 'Britney Spears',
      title: 'Princess of Pop',
      description:
        'As a pop icon of the late 1990s and early 2000s, Britney Spears left an indelible mark on the pop music landscape.',
      image: 'assets/img/90s/britney_spears.webp',
      link: 'https://en.wikipedia.org/wiki/Britney_Spears',
      spotifyLink: 'https://open.spotify.com/artist/26dSoYclwsYLMAKD3tpOr4',
      appleMusicLink: 'https://music.apple.com/us/artist/britney-spears/217005',
    },
    {
      index: 5,
      name: 'Christina Aguilera',
      title: 'Vocal Powerhouse',
      description:
        'Her impressive vocal talent and success in both pop and R&B solidify her as a notable figure of the 1990s.',
      image: 'assets/img/90s/christina_aguilera.webp',
      link: 'https://en.wikipedia.org/wiki/Christina_Aguilera',
      spotifyLink: 'https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS',
      appleMusicLink:
        'https://music.apple.com/us/artist/christina-aguilera/259398',
    },
    {
      index: 6,
      name: 'Jennifer Lopez',
      title: 'Queen of Latin Pop',
      description:
        "J.Lo's success in music, film, and fashion made her a prominent figure of the late 1990s and beyond.",
      image: 'assets/img/90s/jennifer_lopez.webp',
      link: 'https://en.wikipedia.org/wiki/Jennifer_Lopez',
      spotifyLink: 'https://open.spotify.com/artist/2DlGxzQSjYe5N6G9nkYghR',
      appleMusicLink: 'https://music.apple.com/us/artist/jennifer-lopez/463009',
    },
    {
      index: 7,
      name: 'Jay-Z',
      title: 'King of Rap',
      description:
        'Jay-Z, with his lyrical prowess and business acumen, became a dominant force in the 1990s and continues to be a major influence in the music industry.',
      image: 'assets/img/90s/jay_z.webp',
      link: 'https://en.wikipedia.org/wiki/Jay-Z',
      spotifyLink: 'https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB',
      appleMusicLink: 'https://music.apple.com/us/artist/jay-z/1352449404',
    },
    {
      index: 8,
      name: 'Snoop Dogg',
      title: 'West Coast Rapper',
      description:
        "Snoop Dogg's contributions to West Coast hip-hop in the 1990s are iconic and continue to resonate with fans.",
      image: 'assets/img/90s/snoop_dogg.webp',
      link: 'https://en.wikipedia.org/wiki/Snoop_Dogg',
      spotifyLink: 'https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG',
      appleMusicLink: 'https://music.apple.com/us/artist/snoop-dogg/21769',
    },
    {
      index: 9,
      name: 'Shania Twain',
      title: 'Queen of Country Pop',
      description:
        "Shania Twain's crossover success in country and pop music during the 1990s is noteworthy.",
      image: 'assets/img/90s/shania_twain.webp',
      link: 'https://en.wikipedia.org/wiki/Shania_Twain',
      spotifyLink: 'https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL',
      appleMusicLink: 'https://music.apple.com/us/artist/shania-twain/129974',
    },
    {
      index: 10,
      name: 'Cher',
      title: 'Goddess of Pop',
      description:
        "Cher, while a legendary artist with a long and diverse career, may be considered 'least' in the context of the 1990s, as her chart-topping hits and prominence in that specific decade were not as pronounced as some of the others.",
      image: 'assets/img/90s/cher.webp',
      link: 'https://en.wikipedia.org/wiki/Cher',
      spotifyLink: 'https://open.spotify.com/artist/72OaDtakiy6yFqkt4TsiFt',
      appleMusicLink: 'https://music.apple.com/us/artist/cher/106158',
    },
  ];

  private twoThousandsData: any = [
    {
      index: 1,
      name: 'Beyoncé',
      title: 'Queen Bey',
      description:
        "Beyoncé, often referred to as 'Queen Bey,' dominated the 2000s with her powerful vocals, influential music, and remarkable stage presence.",
      image: 'assets/img/2000s/beyonce.webp',
      link: 'https://en.wikipedia.org/wiki/Beyonc%C3%A9',
      spotifyLink: 'https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m',
      appleMusicLink: 'https://music.apple.com/us/artist/beyonc%C3%A9/1419227',
    },
    {
      index: 2,
      name: 'Eminem',
      title: 'Rap God',
      description:
        "Eminem, known as the 'Rap God,' was a rap icon of the 2000s, celebrated for his lyrical skills and groundbreaking music.",
      image: 'assets/img/2000s/eminem.webp',
      link: 'https://en.wikipedia.org/wiki/Eminem',
      spotifyLink: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR',
      appleMusicLink: 'https://music.apple.com/us/artist/eminem/111051',
    },
    {
      index: 3,
      name: 'Rihanna',
      title: 'R&B Princess',
      description:
        "Rihanna's immense success in both pop and R&B music during the 2000s and beyond has solidified her as a prominent figure in the industry.",
      image: 'assets/img/2000s/rihanna.webp',
      link: 'https://en.wikipedia.org/wiki/Rihanna',
      spotifyLink: 'https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H',
      appleMusicLink: 'https://music.apple.com/us/artist/rihanna/63346553',
    },
    {
      index: 4,
      name: 'Justin Timberlake',
      title: 'King of 90s Teen Pop',
      description:
        'Justin Timberlake transitioned from *NSYNC to solo stardom, making a significant mark on pop and R&B music in the 2000s.',
      image: 'assets/img/2000s/justin_timberlake.webp',
      link: 'https://en.wikipedia.org/wiki/Justin_Timberlake',
      spotifyLink: 'https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7',
      appleMusicLink:
        'https://music.apple.com/us/artist/justin-timberlake/398128',
    },
    {
      index: 5,
      name: 'Usher',
      title: 'King of R&B',
      description:
        'Usher was a dominant force in R&B music during the 2000s, with numerous chart-topping hits and a legion of fans.',
      image: 'assets/img/2000s/usher.webp',
      link: 'https://en.wikipedia.org/wiki/Usher_(musician)',
      spotifyLink: 'https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj',
      appleMusicLink: 'https://music.apple.com/us/artist/usher/15885',
    },
    {
      index: 6,
      name: 'Ye (Kanye West)',
      title: 'Hip-Hop Innovator',
      description:
        "Kanye West's groundbreaking approach to hip-hop and acclaimed albums like 'The College Dropout' left a significant mark in the 2000s.",
      image: 'assets/img/2000s/kanye_west.webp',
      link: 'https://en.wikipedia.org/wiki/Kanye_West',
      spotifyLink: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x',
      appleMusicLink: 'https://music.apple.com/us/artist/kanye-west/2715720',
    },
    {
      index: 7,
      name: '50 Cent',
      title: 'Rap Star',
      description:
        "50 Cent's debut album 'Get Rich or Die Tryin'' and his impact on hip-hop culture during the 2000s solidified his place in the industry.",
      image: 'assets/img/2000s/50_cent.webp',
      link: 'https://en.wikipedia.org/wiki/50_Cent',
      spotifyLink: 'https://open.spotify.com/artist/3q7HBObVc0L8jNeTe5Gofh',
      appleMusicLink: 'https://music.apple.com/us/artist/50-cent/112058',
    },
    {
      index: 8,
      name: 'P!nk',
      title: 'Pop-Rock Artist',
      description:
        "P!nk's versatility in pop and rock music during the 2000s earned her a dedicated fan base and commercial success.",
      image: 'assets/img/2000s/pink.webp',
      link: 'https://en.wikipedia.org/wiki/Pink_(singer)',
      spotifyLink: 'https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR',
      appleMusicLink: 'https://music.apple.com/us/artist/p-nk/4488522',
    },
    {
      index: 9,
      name: 'Missy Elliott',
      title: 'Hip-Hop Innovator',
      description:
        "Missy Elliott's unique style and influence in hip-hop are widely recognized, and her work during the 2000s was pivotal.",
      image: 'assets/img/2000s/missy_elliott.webp',
      link: 'https://en.wikipedia.org/wiki/Missy_Elliott',
      spotifyLink: 'https://open.spotify.com/artist/2wIVse2owClT7go1WT98tk',
      appleMusicLink: 'https://music.apple.com/us/artist/missy-elliott/162802',
    },
    {
      index: 10,
      name: 'Avril Lavigne',
      title: 'Queen of Pop Punk',
      description:
        "Avril Lavigne's pop-punk music and her role in shaping the pop-punk scene in the 2000s should be acknowledged.",
      image: 'assets/img/2000s/avril_lavigne.webp',
      link: 'https://en.wikipedia.org/wiki/Avril_Lavigne',
      spotifyLink: 'https://open.spotify.com/artist/0p4nmQO2msCgU4IF37Wi3j',
      appleMusicLink: 'https://music.apple.com/us/artist/avril-lavigne/459885',
    },
  ];

  private tensData: any = [
    {
      index: 1,
      name: 'Adele',
      title: 'Soulful Legend',
      description:
        "Adele is known for her powerful vocals and emotional ballads. Her albums, including '21' and '25,' were huge successes.",
      image: 'assets/img/2010s/adele.webp',
      link: 'https://en.wikipedia.org/wiki/Adele',
      spotifyLink: 'https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY',
      appleMusicLink: 'https://music.apple.com/us/artist/adele/262836961',
    },
    {
      index: 2,
      name: 'Taylor Swift',
      title: 'The Music Industry',
      description:
        "Taylor Swift is a pop icon and a prolific songwriter with numerous hit songs and albums, such as '1989' and 'Red.'",
      image: 'assets/img/2010s/taylor_swift.webp',
      link: 'https://en.wikipedia.org/wiki/Taylor_Swift',
      spotifyLink: 'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02',
      appleMusicLink:
        'https://music.apple.com/us/artist/taylor-swift/159260351',
    },
    {
      index: 3,
      name: 'Lady Gaga',
      title: 'Pop Chameleon',
      description:
        "Lady Gaga's unique style and pop hits, such as 'Poker Face' and 'Bad Romance,' have made her a pop culture phenomenon.",
      image: 'assets/img/2010s/lady_gaga.webp',
      link: 'https://en.wikipedia.org/wiki/Lady_Gaga',
      spotifyLink: 'https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms',
      appleMusicLink: 'https://music.apple.com/us/artist/lady-gaga/277293880',
    },
    {
      index: 4,
      name: 'Bruno Mars',
      title: 'Versatile Star',
      description:
        "Bruno Mars is known for his versatility in music, from pop to R&B. Hits like 'Uptown Funk' and 'Just the Way You Are' made him a standout artist.",
      image: 'assets/img/2010s/bruno_mars.webp',
      link: 'https://en.wikipedia.org/wiki/Bruno_Mars',
      spotifyLink: 'https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C',
      appleMusicLink: 'https://music.apple.com/us/artist/bruno-mars/278873078',
    },
    {
      index: 5,
      name: 'Drake',
      title: 'Hip-Hop Superstar',
      description:
        "Drake's hip-hop and R&B music has dominated the charts. Albums like 'Take Care' and 'Views' were major successes.",
      image: 'assets/img/2010s/drake.webp',
      link: 'https://en.wikipedia.org/wiki/Drake_(musician)',
      spotifyLink: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4',
      appleMusicLink: 'https://music.apple.com/us/artist/drake/271256',
    },
    {
      index: 6,
      name: 'Kendrick Lamar',
      title: 'Rap Prodigy',
      description:
        "Kendrick Lamar is a rap prodigy known for his thought-provoking lyrics and acclaimed albums, including 'good kid, m.A.A.d city.'",
      image: 'assets/img/2010s/kendrick_lamar.webp',
      link: 'https://en.wikipedia.org/wiki/Kendrick_Lamar',
      spotifyLink: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg',
      appleMusicLink:
        'https://music.apple.com/us/artist/kendrick-lamar/368183298',
    },
    {
      index: 7,
      name: 'Justin Bieber',
      title: 'King of Teen Pop',
      description:
        "Justin Bieber's journey from teen sensation to a successful pop artist is marked by hits like 'Baby' and 'Sorry.'",
      image: 'assets/img/2010s/justin_bieber.webp',
      link: 'https://en.wikipedia.org/wiki/Justin_Bieber',
      spotifyLink: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
      appleMusicLink:
        'https://music.apple.com/us/artist/justin-bieber/320569549',
    },
    {
      index: 8,
      name: 'Nicki Minaj',
      title: 'The Queen of Rap',
      description:
        'Nicki Minaj is a dominant force in hip-hop with a series of successful albums and iconic verses in various collaborations.',
      image: 'assets/img/2010s/nicki_minaj.webp',
      link: 'https://en.wikipedia.org/wiki/Nicki_Minaj',
      spotifyLink: 'https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh',
      appleMusicLink: 'https://music.apple.com/us/artist/nicki-minaj/278464538',
    },
    {
      index: 9,
      name: 'Ariana Grande',
      title: 'Vocal Powerhouse',
      description:
        "Ariana Grande's incredible vocal range and pop hits, such as 'Problem' and 'Thank U, Next,' have made her a standout artist.",
      image: 'assets/img/2010s/ariana_grande.webp',
      link: 'https://en.wikipedia.org/wiki/Ariana_Grande',
      spotifyLink: 'https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR',
      appleMusicLink:
        'https://music.apple.com/us/artist/ariana-grande/412778295',
    },
    {
      index: 10,
      name: 'Katy Perry',
      title: 'Pop Superstar',
      description:
        "Katy Perry is known for her chart-topping pop hits, including 'Firework' and 'Roar,' and her commercial success during the 2010s.",
      image: 'assets/img/2010s/katy_perry.webp',
      link: 'https://en.wikipedia.org/wiki/Katy_Perry',
      spotifyLink: 'https://open.spotify.com/artist/6jJ0s89eD6GaHleKKya26X',
      appleMusicLink: 'https://music.apple.com/us/artist/katy-perry/64387566',
    },
  ];

  private twentiesData: any = [
    {
      index: 1,
      name: 'Billie Eilish',
      title: 'Pop Sensation',
      description:
        "Billie Eilish achieved massive success with her debut album 'When We All Fall Asleep, Where Do We Go?' and her unique style.",
      image: 'assets/img/2020s/billie_eilish.webp',
      link: 'https://en.wikipedia.org/wiki/Billie_Eilish',
      spotifyLink: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH',
      appleMusicLink:
        'https://music.apple.com/us/artist/billie-eilish/1065981054',
    },
    {
      index: 2,
      name: 'the Weeknd',
      title: 'R&B Star',
      description:
        "the Weeknd's blend of R&B and pop led to chart-topping hits and acclaim. Albums like 'After Hours' were major successes.",
      image: 'assets/img/2020s/the_weeknd.webp',
      link: 'https://en.wikipedia.org/wiki/The_Weeknd',
      spotifyLink: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ',
      appleMusicLink: 'https://music.apple.com/us/artist/the-weeknd/479756766',
    },
    {
      index: 3,
      name: 'Olivia Rodrigo',
      title: 'Breakout Star',
      description:
        "Olivia Rodrigo made a significant impact with her debut album 'SOUR' and the hit single 'drivers license.'",
      image: 'assets/img/2020s/olivia_rodrigo.webp',
      link: 'https://en.wikipedia.org/wiki/Olivia_Rodrigo',
      spotifyLink: 'https://open.spotify.com/artist/20JZFwl6HVl6yg8a4H3ZqK',
      appleMusicLink:
        'https://music.apple.com/us/artist/olivia-rodrigo/979458609',
    },
    {
      index: 4,
      name: 'Harry Styles',
      title: 'Versatile Popstar',
      description:
        'Harry Styles transitioned from One Direction to a successful solo career, showcasing his versatility and style.',
      image: 'assets/img/2020s/harry_styles.webp',
      link: 'https://en.wikipedia.org/wiki/Harry_Styles',
      spotifyLink: 'https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3',
      appleMusicLink:
        'https://music.apple.com/us/artist/harry-styles/471260289',
    },
    {
      index: 5,
      name: 'Cardi B',
      title: 'Hip-Hop Icon',
      description:
        'Cardi B is a hip-hop icon known for her chart-topping tracks and impact on the genre.',
      image: 'assets/img/2020s/cardi_b.webp',
      link: 'https://en.wikipedia.org/wiki/Cardi_B',
      spotifyLink: 'https://open.spotify.com/artist/4kYSro6naA4h99UJvo89HB',
      appleMusicLink: 'https://music.apple.com/us/artist/cardi-b/956078923',
    },
    {
      index: 6,
      name: 'Doja Cat',
      title: 'Pop/Rap Innovator',
      description:
        "Doja Cat's unique style and hit songs like 'Say So' have established her as a pop innovator.",
      image: 'assets/img/2020s/doja_cat.webp',
      link: 'https://en.wikipedia.org/wiki/Doja_Cat',
      spotifyLink: 'https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5',
      appleMusicLink: 'https://music.apple.com/us/artist/doja-cat/830588310',
    },
    {
      index: 7,
      name: 'Post Malone',
      title: 'Rockstar',
      description:
        "Post Malone blends genres, creating hits like 'Rockstar' and 'Circles,' and achieving immense success.",
      image: 'assets/img/2020s/post_malone.webp',
      link: 'https://en.wikipedia.org/wiki/Post_Malone',
      spotifyLink: 'https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60',
      appleMusicLink: 'https://music.apple.com/us/artist/post-malone/966309175',
    },
    {
      index: 8,
      name: 'Megan Thee Stallion',
      title: 'Rap Sensation',
      description:
        'Megan Thee Stallion is a rising rap sensation with a string of hits and a powerful presence in the industry.',
      image: 'assets/img/2020s/megan_thee_stallion.webp',
      link: 'https://en.wikipedia.org/wiki/Megan_Thee_Stallion',
      spotifyLink: 'https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK',
      appleMusicLink:
        'https://music.apple.com/us/artist/megan-thee-stallion/1258989914',
    },
    {
      index: 9,
      name: 'Miley Cyrus',
      title: 'Pop Rock Star',
      description:
        "Miley Cyrus has evolved into a pop rock star with her album 'Plastic Hearts' and hit singles like 'Midnight Sky.'",
      image: 'assets/img/2020s/miley_cyrus.webp',
      link: 'https://en.wikipedia.org/wiki/Miley_Cyrus',
      spotifyLink: 'https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6',
      appleMusicLink: 'https://music.apple.com/us/artist/miley-cyrus/137057909',
    },
    {
      index: 10,
      name: 'Dua Lipa',
      title: 'Pop Superstar',
      description:
        'Dua Lipa is a pop superstar with a string of chart-topping hits and an influential presence in the music industry.',
      image: 'assets/img/2020s/dua_lipa.webp',
      link: 'https://en.wikipedia.org/wiki/Dua_Lipa',
      spotifyLink: 'https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we',
      appleMusicLink: 'https://music.apple.com/us/artist/dua-lipa/1031397873',
    },
  ];

  private honorableMentions: any = [
    {
      index: 1,
      name: 'Bob Marley',
      title: 'Reggae Legend (70s)',
      description:
        "Bob Marley, a legendary reggae musician, is known for his iconic songs like 'No Woman, No Cry' and 'One Love.'",
      image: 'assets/img/honorable_mentions/bob_marley.webp',
      link: 'https://en.wikipedia.org/wiki/Bob_Marley',
      spotifyLink: 'https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD',
      appleMusicLink: 'https://music.apple.com/us/artist/bob-marley/121982',
    },
    {
      index: 2,
      name: 'David Bowie',
      title: 'Rock Innovator (80s)',
      description:
        "David Bowie was a pioneer of rock music with a career marked by iconic albums like 'Space Oddity' and 'Ziggy Stardust.'",
      image: 'assets/img/honorable_mentions/david_bowie.webp',
      link: 'https://en.wikipedia.org/wiki/David_Bowie',
      spotifyLink: 'https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy',
      appleMusicLink: 'https://music.apple.com/us/artist/david-bowie/551695',
    },
    {
      index: 3,
      name: 'The Notorious B.I.G.',
      title: 'Hip-Hop Icon (90s)',
      description:
        "The Notorious B.I.G. (Biggie Smalls) was a seminal figure in hip-hop with hits like 'Juicy' and 'Hypnotize.'",
      image: 'assets/img/honorable_mentions/notorious_big.webp',
      link: 'https://en.wikipedia.org/wiki/The_Notorious_B.I.G.',
      spotifyLink: 'https://open.spotify.com/artist/5me0Irg2ANcsgc93uaYrpb',
      appleMusicLink:
        'https://music.apple.com/us/artist/the-notorious-b-i-g/5499810',
    },
    {
      index: 4,
      name: 'Alicia Keys',
      title: 'Soulful Songstress (2000s)',
      description:
        "Alicia Keys is known for her soulful singing and hit songs like 'Fallin'' and 'No One.'",
      image: 'assets/img/honorable_mentions/alicia_keys.webp',
      link: 'https://en.wikipedia.org/wiki/Alicia_Keys',
      spotifyLink: 'https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa',
      appleMusicLink: 'https://music.apple.com/us/artist/alicia-keys/316069',
    },
    {
      index: 5,
      name: 'Shakira',
      title: 'Queen of Latin Music (2000s)',
      description:
        "Shakira is a Latin pop sensation, known for songs like 'Hips Don't Lie' and 'Waka Waka.'",
      image: 'assets/img/honorable_mentions/shakira.webp',
      link: 'https://en.wikipedia.org/wiki/Shakira',
      spotifyLink: 'https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp',
      appleMusicLink: 'https://music.apple.com/us/artist/shakira/889327',
    },
    {
      index: 6,
      name: 'Lil Wayne',
      title: 'Rap Icon (2000s)',
      description:
        "Lil Wayne is a rap superstar known for his distinctive style and hits like 'Lollipop' and 'A Milli.'",
      image: 'assets/img/honorable_mentions/lil_wayne.webp',
      link: 'https://en.wikipedia.org/wiki/Lil_Wayne',
      spotifyLink: 'https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865',
      appleMusicLink: 'https://music.apple.com/us/artist/lil-wayne/5869117',
    },
    {
      index: 7,
      name: 'Bruno Mars',
      title: 'Versatile Artist (2010s)',
      description:
        "Bruno Mars is a versatile artist with a wide range of hits, including 'Just the Way You Are' and 'Uptown Funk.'",
      image: 'assets/img/honorable_mentions/bruno_mars.webp',
      link: 'https://en.wikipedia.org/wiki/Bruno_Mars',
      spotifyLink: 'https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C',
      appleMusicLink: 'https://music.apple.com/us/artist/bruno-mars/278873078',
    },
    {
      index: 8,
      name: 'Ed Sheeran',
      title: 'Modern Pop Star (2010s)',
      description:
        "Ed Sheeran has become a modern pop sensation with chart-toppers like 'Shape of You' and 'Thinking Out Loud.'",
      image: 'assets/img/honorable_mentions/ed_sheeran.webp',
      link: 'https://en.wikipedia.org/wiki/Ed_Sheeran',
      spotifyLink: 'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V',
      appleMusicLink: 'https://music.apple.com/us/artist/ed-sheeran/183313439',
    },
    {
      index: 9,
      name: 'Chris Brown',
      title: 'R&B King (2010s)',
      description:
        "Chris Brown is a multi-talented entertainer with a string of hits, including 'Forever' and 'With You.'",
      image: 'assets/img/honorable_mentions/chris_brown.webp',
      link: 'https://en.wikipedia.org/wiki/Chris_Brown',
      spotifyLink: 'https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z',
      appleMusicLink: 'https://music.apple.com/us/artist/chris-brown/95705522',
    },
    {
      index: 10,
      name: 'Selena Gomez',
      title: 'Pop Star (2010s)',
      description:
        "Selena Gomez has transitioned from Disney star to pop princess with songs like 'Good for You' and 'Bad Liar.'",
      image: 'assets/img/honorable_mentions/selena_gomez.webp',
      link: 'https://en.wikipedia.org/wiki/Selena_Gomez',
      spotifyLink: 'https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx',
      appleMusicLink:
        'https://music.apple.com/us/artist/selena-gomez/280215834',
    },
  ];

  private years: Array<string> = [
    '80s',
    '90s',
    '2000s',
    '2010s',
    '2020s',
    'Honorable Mentions',
  ];

  constructor() {}

  public getDescription() {
    return this.description;
  }

  public getDisclaimer() {
    return this.disclaimer;
  }

  public getNavbarLinks() {
    return this.navbarLinks;
  }

  public getYears() {
    // const index = this.years.findIndex(
    //   (el: string) => el === 'honorable_mentions'
    // );
    // this.years[index] = 'Honorable Mentions';
    return this.years;
  }

  public getContentForDecade(decade: string) {
    switch (decade) {
      case '80s':
        return this.eightiesData;
      case '90s':
        return this.ninetiesData;
      case '2000s':
        return this.twoThousandsData;
      case '2010s':
        return this.tensData;
      case '2020s':
        return this.twentiesData;
      case 'Honorable Mentions':
        return this.honorableMentions;
      default:
        return [];
    }
  }
}
