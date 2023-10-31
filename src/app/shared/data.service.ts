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
    { name: 'Decades', id: 'years', key: 'decades' },
  ];

  private eightiesData: any = [
    {
      index: 1,
      name: 'Michael Jackson',
      title: 'King of Pop',
      description:
        "Known as the 'King of Pop,' Michael Jackson was one of the most iconic and influential artists of the 1980s. His album 'Thriller' remains the best-selling album of all time.",
      image: 'assets/img/80s/michael_jackson.webp',
    },
    {
      index: 2,
      name: 'Madonna',
      title: 'Queen of Pop',
      description:
        "Madonna, known as the 'Queen of Pop,' emerged as a major pop icon in the 1980s. She released a string of hit albums and became a symbol of female empowerment in pop music.",
      image: 'assets/img/80s/madonna.webp',
    },
    {
      index: 3,
      name: 'Prince',
      title: 'Prince of Pop',
      description:
        "Prince was a musical genius known for his eclectic style and innovative approach to music. His albums, including 'Purple Rain,' are considered classics of the 1980s.",
      image: 'assets/img/80s/prince.webp',
    },
    {
      index: 4,
      name: 'Whitney Houston',
      title: 'The Voice',
      description:
        "Whitney Houston's powerful voice and numerous chart-topping hits made her one of the biggest pop stars of the 1980s.",
      image: 'assets/img/80s/whitney_houston.webp',
    },
    {
      index: 5,
      name: 'George Michael',
      title: 'Pop Sensation',
      description:
        "George Michael, both as a solo artist and with the duo Wham!, had a significant impact on 80s pop music. Hits like 'Careless Whisper' and 'Faith' remain popular to this day.",
      image: 'assets/img/80s/george_michael.webp',
    },

    {
      index: 6,
      name: 'Tina Turner',
      title: 'Queen of Rock & Roll',
      description:
        "Tina Turner's comeback in the 1980s with the album 'Private Dancer' and its hit singles cemented her status as a pop legend.",
      image: 'assets/img/80s/tina_turner.webp',
    },
    {
      index: 7,
      name: 'Janet Jackson',
      title: 'Pop Legend',
      description:
        'Janet Jackson made a significant impact in the 1980s with her innovative music and memorable hits.',
      image: 'assets/img/80s/janet_jackson.webp',
    },
    {
      index: 8,
      name: 'Elton John',
      title: 'Rock Icon',
      description:
        'Elton John, a rock and pop legend, continued to create timeless music in the 1980s and beyond.',
      image: 'assets/img/80s/elton_john.webp',
    },
    {
      index: 9,
      name: 'Dolly Parton',
      title: 'Queen of Country',
      description:
        "Dolly Parton's country music and charismatic personality made her a beloved figure in the 1980s.",
      image: 'assets/img/80s/dolly_parton.webp',
    },
    {
      index: 10,
      name: 'Lionel Richie',
      title: 'Soulful Artist',
      description:
        "Lionel Richie's soulful tunes and timeless ballads defined the music of the 1980s.",
      image: 'assets/img/80s/lionel_richie.webp',
    },
  ];

  private ninetiesData: any = [
    {
      index: 1,
      name: 'Mariah Carey',
      title: 'Songbird Supreme/Queen of Christmas',
      description:
        'Known for her incredible vocal range and chart-topping hits, Mariah Carey is often regarded as one of the most legendary artists of the 1990s.',
      image: 'assets/img/90s/mariah_carey.webp',
    },
    {
      index: 2,
      name: 'Tupac Shakur',
      title: 'Hip-Hop Icon',
      description:
        "Tupac's influence on the hip-hop genre and his enduring legacy place him near the top of the list of 1990s legends.",
      image: 'assets/img/90s/tupac_shakur.webp',
    },
    {
      index: 3,
      name: 'Celine Dion',
      title: 'Vocal Powerhouse',
      description:
        'With her powerful ballads, Celine Dion made a significant impact on the music scene in the 1990s.',
      image: 'assets/img/90s/celine_dion.webp',
    },
    {
      index: 4,
      name: 'Britney Spears',
      title: 'Princess of Pop',
      description:
        'As a pop icon of the late 1990s and early 2000s, Britney Spears left an indelible mark on the pop music landscape.',
      image: 'assets/img/90s/britney_spears.webp',
    },
    {
      index: 5,
      name: 'Christina Aguilera',
      title: 'Vocal Powerhouse',
      description:
        'Her impressive vocal talent and success in both pop and R&B solidify her as a notable figure of the 1990s.',
      image: 'assets/img/90s/christina_aguilera.webp',
    },
    {
      index: 6,
      name: 'Jennifer Lopez',
      title: 'Queen of Latin Pop',
      description:
        "J.Lo's success in music, film, and fashion made her a prominent figure of the late 1990s and beyond.",
      image: 'assets/img/90s/jennifer_lopez.webp',
    },
    {
      index: 7,
      name: 'Jay-Z',
      title: 'King of Rap',
      description:
        'Jay-Z, with his lyrical prowess and business acumen, became a dominant force in the 1990s and continues to be a major influence in the music industry.',
      image: 'assets/img/90s/jay_z.webp',
    },
    {
      index: 8,
      name: 'Snoop Dogg',
      title: 'West Coast Rapper',
      description:
        "Snoop Dogg's contributions to West Coast hip-hop in the 1990s are iconic and continue to resonate with fans.",
      image: 'assets/img/90s/snoop_dogg.webp',
    },
    {
      index: 9,
      name: 'Shania Twain',
      title: 'Queen of Country Pop',
      description:
        "Shania Twain's crossover success in country and pop music during the 1990s is noteworthy.",
      image: 'assets/img/90s/shania_twain.webp',
    },
    {
      index: 10,
      name: 'Cher',
      title: 'Goddess of Pop',
      description:
        "Cher, while a legendary artist with a long and diverse career, may be considered 'least' in the context of the 1990s, as her chart-topping hits and prominence in that specific decade were not as pronounced as some of the others.",
      image: 'assets/img/90s/cher.webp',
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
    },
    {
      index: 2,
      name: 'Eminem',
      title: 'Rap God',
      description:
        "Eminem, known as the 'Rap God,' was a rap icon of the 2000s, celebrated for his lyrical skills and groundbreaking music.",
      image: 'assets/img/2000s/eminem.webp',
    },
    {
      index: 3,
      name: 'Rihanna',
      title: 'R&B Princess',
      description:
        "Rihanna's immense success in both pop and R&B music during the 2000s and beyond has solidified her as a prominent figure in the industry.",
      image: 'assets/img/2000s/rihanna.webp',
    },
    {
      index: 4,
      name: 'Justin Timberlake',
      title: 'King of 90s Teen Pop',
      description:
        'Justin Timberlake transitioned from *NSYNC to solo stardom, making a significant mark on pop and R&B music in the 2000s.',
      image: 'assets/img/2000s/justin_timberlake.webp',
    },
    {
      index: 5,
      name: 'Usher',
      title: 'King of R&B',
      description:
        'Usher was a dominant force in R&B music during the 2000s, with numerous chart-topping hits and a legion of fans.',
      image: 'assets/img/2000s/usher.webp',
    },
    {
      index: 6,
      name: 'Ye (Kanye West)',
      title: 'Hip-Hop Innovator',
      description:
        "Kanye West's groundbreaking approach to hip-hop and acclaimed albums like 'The College Dropout' left a significant mark in the 2000s.",
      image: 'assets/img/2000s/kanye_west.webp',
    },
    {
      index: 7,
      name: '50 Cent',
      title: 'Rap Star',
      description:
        "50 Cent's debut album 'Get Rich or Die Tryin'' and his impact on hip-hop culture during the 2000s solidified his place in the industry.",
      image: 'assets/img/2000s/50_cent.webp',
    },
    {
      index: 8,
      name: 'P!nk',
      title: 'Pop-Rock Artist',
      description:
        "P!nk's versatility in pop and rock music during the 2000s earned her a dedicated fan base and commercial success.",
      image: 'assets/img/2000s/pink.webp',
    },
    {
      index: 9,
      name: 'Missy Elliott',
      title: 'Hip-Hop Innovator',
      description:
        "Missy Elliott's unique style and influence in hip-hop are widely recognized, and her work during the 2000s was pivotal.",
      image: 'assets/img/2000s/missy_elliott.webp',
    },
    {
      index: 10,
      name: 'Avril Lavigne',
      title: 'Queen of Pop Punk',
      description:
        "Avril Lavigne's pop-punk music and her role in shaping the pop-punk scene in the 2000s should be acknowledged.",
      image: 'assets/img/2000s/avril_lavigne.webp',
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
    },
    {
      index: 2,
      name: 'Taylor Swift',
      title: 'The Music Industry',
      description:
        "Taylor Swift is a pop icon and a prolific songwriter with numerous hit songs and albums, such as '1989' and 'Red.'",
      image: 'assets/img/2010s/taylor_swift.webp',
    },
    {
      index: 3,
      name: 'Lady Gaga',
      title: 'Pop Chameleon',
      description:
        "Lady Gaga's unique style and pop hits, such as 'Poker Face' and 'Bad Romance,' have made her a pop culture phenomenon.",
      image: 'assets/img/2010s/lady_gaga.webp',
    },
    {
      index: 4,
      name: 'Bruno Mars',
      title: 'Versatile Star',
      description:
        "Bruno Mars is known for his versatility in music, from pop to R&B. Hits like 'Uptown Funk' and 'Just the Way You Are' made him a standout artist.",
      image: 'assets/img/2010s/bruno_mars.webp',
    },
    {
      index: 5,
      name: 'Drake',
      title: 'Hip-Hop Superstar',
      description:
        "Drake's hip-hop and R&B music has dominated the charts. Albums like 'Take Care' and 'Views' were major successes.",
      image: 'assets/img/2010s/drake.webp',
    },
    {
      index: 6,
      name: 'Kendrick Lamar',
      title: 'Rap Prodigy',
      description:
        "Kendrick Lamar is a rap prodigy known for his thought-provoking lyrics and acclaimed albums, including 'good kid, m.A.A.d city.'",
      image: 'assets/img/2010s/kendrick_lamar.webp',
    },
    {
      index: 7,
      name: 'Justin Bieber',
      title: 'King of Teen Pop',
      description:
        "Justin Bieber's journey from teen sensation to a successful pop artist is marked by hits like 'Baby' and 'Sorry.'",
      image: 'assets/img/2010s/justin_bieber.webp',
    },
    {
      index: 8,
      name: 'Nicki Minaj',
      title: 'The Queen of Rap',
      description:
        'Nicki Minaj is a dominant force in hip-hop with a series of successful albums and iconic verses in various collaborations.',
      image: 'assets/img/2010s/nicki_minaj.webp',
    },
    {
      index: 9,
      name: 'Ariana Grande',
      title: 'Vocal Powerhouse',
      description:
        "Ariana Grande's incredible vocal range and pop hits, such as 'Problem' and 'Thank U, Next,' have made her a standout artist.",
      image: 'assets/img/2010s/ariana_grande.webp',
    },
    {
      index: 10,
      name: 'Katy Perry',
      title: 'Pop Superstar',
      description:
        "Katy Perry is known for her chart-topping pop hits, including 'Firework' and 'Roar,' and her commercial success during the 2010s.",
      image: 'assets/img/2010s/katy_perry.webp',
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
    },
    {
      index: 2,
      name: 'the Weeknd',
      title: 'R&B Star',
      description:
        "the Weeknd's blend of R&B and pop led to chart-topping hits and acclaim. Albums like 'After Hours' were major successes.",
      image: 'assets/img/2020s/the_weeknd.webp',
    },
    {
      index: 3,
      name: 'Olivia Rodrigo',
      title: 'Breakout Star',
      description:
        "Olivia Rodrigo made a significant impact with her debut album 'SOUR' and the hit single 'drivers license.'",
      image: 'assets/img/2020s/olivia_rodrigo.webp',
    },
    {
      index: 4,
      name: 'Harry Styles',
      title: 'Versatile Popstar',
      description:
        'Harry Styles transitioned from One Direction to a successful solo career, showcasing his versatility and style.',
      image: 'assets/img/2020s/harry_styles.webp',
    },
    {
      index: 5,
      name: 'Cardi B',
      title: 'Hip-Hop Icon',
      description:
        'Cardi B is a hip-hop icon known for her chart-topping tracks and impact on the genre.',
      image: 'assets/img/2020s/cardi_b.webp',
    },
    {
      index: 6,
      name: 'Doja Cat',
      title: 'Pop/Rap Innovator',
      description:
        "Doja Cat's unique style and hit songs like 'Say So' have established her as a pop innovator.",
      image: 'assets/img/2020s/doja_cat.webp',
    },
    {
      index: 7,
      name: 'Post Malone',
      title: 'Rockstar',
      description:
        "Post Malone blends genres, creating hits like 'Rockstar' and 'Circles,' and achieving immense success.",
      image: 'assets/img/2020s/post_malone.webp',
    },
    {
      index: 8,
      name: 'Megan Thee Stallion',
      title: 'Rap Sensation',
      description:
        'Megan Thee Stallion is a rising rap sensation with a string of hits and a powerful presence in the industry.',
      image: 'assets/img/2020s/megan_thee_stallion.webp',
    },
    {
      index: 9,
      name: 'Miley Cyrus',
      title: 'Pop Rock Star',
      description:
        "Miley Cyrus has evolved into a pop rock star with her album 'Plastic Hearts' and hit singles like 'Midnight Sky.'",
      image: 'assets/img/2020s/miley_cyrus.webp',
    },
    {
      index: 10,
      name: 'Dua Lipa',
      title: 'Pop Superstar',
      description:
        'Dua Lipa is a pop superstar with a string of chart-topping hits and an influential presence in the music industry.',
      image: 'assets/img/2020s/dua_lipa.webp',
    },
  ];

  private years: Array<string> = [
    '80s',
    '90s',
    '2000s',
    '2010s',
    '2020s',
    'Honrable Mentions',
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
      default:
        return [];
    }
  }
}
