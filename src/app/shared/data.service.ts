import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private description: string =
    "Explore the discography of Pop Royalty icons to enrich your knowledge of their legacy in music history.<br> Here, you have the opportunity to explore a wide spectrum of musical knowledge, encompassing rich information about the world of music.<br>From the glamorous 80s to the colorful 90s, spanning through the glitzy 2000s, the unique 2010s, and into the recent 2020s.<br> As for what the future holds, well, it's anyone's guess.<br>";

  private currentDate: any = this.datePipe.transform(
    new Date(),
    'MMMM d, yyyy'
  );

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
        "Michael Jackson, often referred to as the 'King of Pop,' stands out as one of the most iconic and influential musicians in the history of popular music. His journey began as a child performer with his family group, The Jackson 5, before he achieved tremendous success as a solo artist. His prime years spanned the '80s and '90s, and throughout his career, he released 10 studio albums and left an indelible cultural impact. To this day, he remains unparalleled in his influence on the music industry.",
      image: 'assets/img/80s/michael_jackson.webp',
      link: 'https://en.wikipedia.org/wiki/Michael_Jackson',
      spotifyLink: 'https://open.spotify.com/artist/3fMbdgg4jU18AjLCKBhRSm',
      appleMusicLink: 'https://music.apple.com/us/artist/michael-jackson/32940',
      monumental_album: 'Thriller (1982)',
      album_description:
        "Michael Jackson's most monumental album is undoubtedly 'Thriller'. This iconic record not only defined an era but set new standards for the entire music industry. 'Thriller' became the best-selling album of all time, a title it still holds, and featured some of Jackson's most unforgettable tracks, including 'Billie Jean,' 'Beat It', and the title track, 'Thriller'. The album's innovative music videos, especially the one for 'Thriller' revolutionized the music video genre and remain legendary. Michael Jackson's extraordinary talent and charisma shone through every note and dance move on this record, making it a timeless masterpiece and a cultural phenomenon that transcends generations. 'Thriller' continues to be a testament to the enduring impact of the King of Pop on the world of music and entertainment.",
      album_image: 'assets/img/covers/thriller.webp',
    },
    {
      index: 2,
      name: 'Madonna',
      title: 'Queen of Pop',
      description:
        "Madonna, often referred to as the 'Queen of Pop,' is a music icon known for her groundbreaking contributions to the pop music industry. Her career began in the 80s, and as of 2023, she continues to tour the world with a career spanning over 40 years. Madonna is celebrated for her ability to continuously reinvent herself and push the boundaries of music, fashion, and culture. Her influence extends beyond music, as she has also found success as an actress, author, and entrepreneur. Madonna remains a symbol of female empowerment and stands as a pop culture legend.",
      image: 'assets/img/80s/madonna.webp',
      link: 'https://en.wikipedia.org/wiki/Madonna',
      spotifyLink: 'https://open.spotify.com/artist/6tbjWDEIzxoDsBA1FuhfPW',
      appleMusicLink: 'https://music.apple.com/us/artist/madonna/20044',
      monumental_album: 'Ray of Light (1998)',
      album_description:
        "While it's hard to pick between 'Like A Prayer' and her 14 albums catalog, I decided to feature - 'Ray of Light', released in 1998, it marked a pivotal moment in her career. The album showcases a shift in her musical style towards electronic and techno-Pop sounds, setting the stage for a new era of innovation in Pop music. It features hit singles like the title track 'Ray of Light' and 'Frozen', which are celebrated for their mesmerizing beats and ethereal vocals. Madonna's exploration of spirituality, self-discovery, and the rapid pace of life in the late 20th century adds depth to the album. 'Ray of Light' is recognized not only for its groundbreaking music but also for its lasting impact on the Pop culture landscape.",
      album_image: 'assets/img/covers/ray_of_light.webp',
    },
    {
      index: 3,
      name: 'Prince',
      title: 'Prince of 80s Pop',
      description:
        "Prince was a pioneering artist who transcended musical boundaries throughout his prolific career, which spanned from the late 1970s until his untimely passing in 2016. He left an indelible mark on the music industry, known for his exceptional talent, innovative style, and flamboyant persona. Beyond his musical prowess, Prince was also a prolific songwriter and multi-instrumentalist, often playing nearly all the instruments on his albums. His artistry, combining rock, funk, R&B, and pop, made him a true musical chameleon. Prince's influence on subsequent generations of artists and his ability to shape the cultural landscape affirm his status as a legendary figure in the realm of music and entertainment.",
      image: 'assets/img/80s/prince.webp',
      link: 'https://en.wikipedia.org/wiki/Prince_(musician)',
      spotifyLink: 'https://open.spotify.com/artist/5a2EaR3hamoenG9rDuVn8j',
      appleMusicLink: 'https://music.apple.com/us/artist/prince/155814',
      monumental_album: 'Purple Rain (1984)',
      album_description:
        "Prince's legendary 6th studio album, which also served as the soundtrack to the film of the same name. This iconic album is a masterful blend of rock, Pop, funk, and R&B, showcasing Prince's immense musical talents. The album's title track, 'Purple Rain' is a timeless classic and an anthem of its era. Other standout tracks like 'When Doves Cry' and 'Let's Go Crazy' further solidify its place in music history. 'Purple Rain' not only marked a high point in Prince's career but also in the broader landscape of popular music, leaving an indelible mark and earning its status as one of the greatest albums ever created.",
      album_image: 'assets/img/covers/purple_rain.webp',
    },
    {
      index: 4,
      name: 'Whitney Houston',
      title: 'The Voice',
      description:
        "Whitney Houston was a legendary American singer known for her powerful and soulful voice. She achieved worldwide fame with her self-titled debut album in 1985 and became one of the best-selling music artists of all time. Her rendition of 'I Will Always Love You' is one of the best-selling singles in history. While her career was marked by success, she also faced personal struggles, including substance abuse. Despite her tragic passing in 2012, Whitney Houston's remarkable talent and contributions to music continue to be celebrated and remembered",
      image: 'assets/img/80s/whitney_houston.webp',
      link: 'https://en.wikipedia.org/wiki/Whitney_Houston',
      spotifyLink: 'https://open.spotify.com/artist/6XpaIBNiVzIetEPCWDvAFP',
      appleMusicLink: 'https://music.apple.com/us/artist/whitney-houston/13952',
      monumental_album: 'The Bodyguard: Original Soundtrack Album (1992)',
      album_description:
        "'The Bodyguard: Original Soundtrack Album' is not only one of the best-selling soundtracks of all time but also a cultural touchstone. Featuring the unforgettable ballad 'I Will Always Love You,' the album's massive success played a pivotal role in defining Whitney Houston's career and solidifying her status as one of the greatest vocalists in the world. The soundtrack's popularity extended far beyond music, thanks to its association with the hit film 'The Bodyguard' making it a historic moment in the music industry and a testament to Houston's unparalleled vocal prowess.",
      album_image: 'assets/img/covers/the_bodyguard.webp',
    },
    {
      index: 5,
      name: 'George Michael',
      title: 'Pop Sensation',
      description:
        "George Michael was a highly influential British singer, songwriter, and pop icon. He rose to fame as a member of the 80s pop duo Wham! and later embarked on a successful solo career. Known for his soulful voice and memorable hits like 'Careless Whisper' and 'Faith', George Michael made a significant impact on the music industry. Beyond his musical talents, he was also recognized for his philanthropic efforts and activism. His legacy lives on through his timeless music and his enduring influence on the pop music landscape.",
      image: 'assets/img/80s/george_michael.webp',
      link: 'https://en.wikipedia.org/wiki/George_Michael',
      spotifyLink: 'https://open.spotify.com/artist/19ra5tSw0tWufvUp8GotLo',
      appleMusicLink: 'https://music.apple.com/us/artist/george-michael/894337',
      monumental_album: 'Faith (1987)',
      album_description:
        "'Faith' not only marked his transition from Wham! to a highly successful solo career but also solidified his status as a Pop music icon. The album's title track, 'Faith' is one of his most recognizable and enduring songs. The album was critically acclaimed and commercially successful, earning George Michael a Grammy Award for Album of the Year. 'Faith' is celebrated for its combination of pop, R&B, and rock influences, showcasing his versatility as an artist. It remains a timeless classic and a testament to George Michael's impact on the music industry.",
      album_image: 'assets/img/covers/faith.webp',
    },
    {
      index: 6,
      name: 'Tina Turner',
      title: 'Queen of Rock & Roll',
      description:
        "Tina Turner, the legendary American-Swiss singer, is a true icon in the world of music. With a career spanning over six decades, she's known for her electrifying performances and powerful vocals. Tina's life story, from her humble beginnings to international stardom, is one of resilience and triumph. Hits like 'What's Love Got to Do with It' and 'Proud Mary' have solidified her status as the 'Queen of Rock & Roll.' Beyond her musical accomplishments, Tina Turner's enduring influence and fearless spirit continue to inspire generations of artists and fans alike.",
      image: 'assets/img/80s/tina_turner.webp',
      link: 'https://en.wikipedia.org/wiki/Tina_Turner',
      spotifyLink: 'https://open.spotify.com/artist/1zuJe6b1roixEKMOtyrEak',
      appleMusicLink: 'https://music.apple.com/us/artist/tina-turner/488075',
      monumental_album: 'Private Dancer (1984)',
      album_description:
        "'Private Dancer' is considered a pivotal moment in her career. It not only marked her comeback but also established her as a solo artist. The title track, 'What's Love Got to Do with It', became an anthem and earned her multiple Grammy Awards. 'Private Dancer' showcased Tina Turner's powerful and soulful voice, and it remains a classic in the realms of rock and Pop music. The album's success and impact on her career are a testament to Tina Turner's enduring influence as the 'Queen of Rock & Roll.'",
      album_image: 'assets/img/covers/private_dancer.webp',
    },
    {
      index: 7,
      name: 'Janet Jackson',
      title: 'Pop Legend',
      description:
        'Janet Jackson, a renowned American singer, songwriter, and actress, is celebrated for her immense impact on the world of music and entertainment. With a career that spans decades, she has consistently pushed boundaries and set trends in the industry. Known for her powerful vocals and iconic dance moves, Janet has delivered numerous hit songs and memorable performances. Her contributions extend beyond music to include acting and philanthropic work, making her an influential figure in popular culture.',
      image: 'assets/img/80s/janet_jackson.webp',
      link: 'https://en.wikipedia.org/wiki/Janet_Jackson',
      spotifyLink: 'https://open.spotify.com/artist/4qwGe91Bz9K2T8jXTZ815W',
      appleMusicLink: 'https://music.apple.com/us/artist/janet-jackson/1272779',
      monumental_album: 'Rhythm Nation 1814 (1989)',
      album_description:
        "Janet's 4th socially conscious and musically innovative album had a profound impact on both Pop culture and the music industry. Known for its fusion of pop, R&B, and funk, the album featured iconic tracks like 'Rhythm Nation' and 'Escapade.' What made this album particularly significant was its exploration of important social issues, advocating for unity, tolerance, and social change. 'Rhythm Nation 1814' earned Janet Jackson critical acclaim and cemented her status as a Pop icon. Its influence continues to be felt in the music and entertainment world, and it remains a timeless classic.",
      album_image: 'assets/img/covers/rhythm_nation_1814.webp',
    },
    {
      index: 8,
      name: 'Elton John',
      title: 'Rock Icon',
      description:
        "Sir Elton John, the legendary British singer, songwriter, and pianist, is an iconic figure in the music industry. With a career spanning several decades, he's known for his incredible musical talent, flamboyant style, and heartfelt lyrics. Elton has delivered countless chart-topping hits and is celebrated for his powerful live performances. Beyond music, he's also recognized for his philanthropic efforts and contributions to various social causes, making him a beloved and influential artist around the world",
      image: 'assets/img/80s/elton_john.webp',
      link: 'https://en.wikipedia.org/wiki/Elton_John',
      spotifyLink: 'https://open.spotify.com/artist/3PhoLpVuITZKcymswpck5b',
      appleMusicLink: 'https://music.apple.com/us/artist/elton-john/54657',
      monumental_album: 'Goodbye Yellow Brick Road (1973)',
      album_description:
        "The double album is a masterpiece that solidified his status as a music legend. It featured some of his most iconic songs, including 'Bennie and the Jets', 'Candle in the Wind', and the title track 'Goodbye Yellow Brick Road'. The album showcased Elton's versatility, spanning rock, pop, and ballads, and was a massive commercial success. It received critical acclaim and has remained a classic in the rock and Pop music genres. Its impact on the music world is immeasurable, and it continues to be celebrated and adored by fans worldwide.",
      album_image: 'assets/img/covers/goodbye_yellow_brick_road.webp',
    },
    {
      index: 9,
      name: 'Dolly Parton',
      title: 'Queen of Country',
      description:
        "Dolly Parton, the iconic American singer, songwriter, and actress, is a beloved figure in the world of country music and entertainment. With a career spanning decades, she's known for her distinctive voice, songwriting skills, and magnetic stage presence. Dolly has produced a multitude of chart-topping hits, making her one of the most celebrated country artists in history. Her warm-hearted personality, philanthropic endeavors, and contributions to film and television have endeared her to audiences around the world.",
      image: 'assets/img/80s/dolly_parton.webp',
      link: 'https://en.wikipedia.org/wiki/Dolly_Parton',
      spotifyLink: 'https://open.spotify.com/artist/32vWCbZh0xZ4o9gkz4PsEU',
      appleMusicLink: 'https://music.apple.com/us/artist/dolly-parton/535066',
      monumental_album: 'Coat of Many Colors (1971)',
      album_description:
        "Dolly has so many albums but her 8th is a poignant and heartfelt collection of songs that reflect her humble upbringing in the Smoky Mountains of Tennessee. The title track, 'Coat of Many Colors,' is one of her most beloved songs, and the album resonates with themes of love, family, and resilience. Dolly's storytelling and emotional depth shine in this album, making it a timeless classic in country music. It's an expression of her genuine and heartfelt artistry and remains a cherished work that captures the essence of Dolly Parton's music. It's worth mentioning two of Dolly's massive hits: her original rendition of 'I Will Always Love You,' famously covered by Whitney Houston, and her iconic single 'Jolene' from the album of the same name.",
      album_image: 'assets/img/covers/coat_of_many_colors.webp',
    },
    {
      index: 10,
      name: 'Lionel Richie',
      title: 'Soulful Artist',
      description:
        "Lionel Richie, the legendary American singer, songwriter, and music producer, has had an illustrious career that spans several decades. He is renowned for his soulful and romantic ballads that have touched the hearts of millions worldwide. Lionel's smooth vocals and timeless hits have made him an enduring figure in the world of R&B and pop music. Lionel Richie's contribution to the music industry has left an indelible mark, and he remains a beloved artist celebrated for his emotive and memorable songs.",
      image: 'assets/img/80s/lionel_richie.webp',
      link: 'https://en.wikipedia.org/wiki/Lionel_Richie',
      spotifyLink: 'https://open.spotify.com/artist/3gMaNLQm7D9MornNILzdSl',
      appleMusicLink: 'https://music.apple.com/us/artist/lionel-richie/48397',
      monumental_album: "Can't Slow Down (1983)",
      album_description:
        "His sophomore album is a timeless masterpiece that defines the pinnacle of his solo career. 'Can't Slow Down' features a collection of hit songs, including 'All Night Long (All Night)', 'Hello', 'Stuck on You', and 'Penny Lover'. The album combines R&B, pop, and soul elements to create a musical journey of love, romance, and celebration. It received widespread critical acclaim and became a commercial phenomenon, earning Lionel Richie multiple Grammy Awards, including Album of the Year. The album's success firmly established Lionel Richie as one of the most influential artists in the 1980s and solidified his place in music history. 'Can't Slow Down' remains a classic, and its enduring popularity continues to resonate with fans, making it a defining work in Lionel Richie's illustrious career.",
      album_image: 'assets/img/covers/cant_slow_down.webp',
    },
  ];

  private ninetiesData: any = [
    {
      index: 1,
      name: 'Mariah Carey',
      title: 'Queen of Christmas',
      description:
        "Mariah Carey, with her remarkable vocal prowess and extensive songwriting talents, has left an indelible mark on the music industry. Her career has spanned decades, earning her numerous accolades, including multiple Grammy Awards. Mariah's ability to effortlessly transition between various music genres, from pop to R&B and even holiday classics, showcases her versatility as an artist. Her influence on both aspiring artists and the charts is a testament to her enduring significance in the world of music",
      image: 'assets/img/90s/mariah_carey.webp',
      link: 'https://en.wikipedia.org/wiki/Mariah_Carey',
      spotifyLink: 'https://open.spotify.com/artist/4iHNK0tOyZPYnBU7nGAgpQ',
      appleMusicLink: 'https://music.apple.com/us/artist/mariah-carey/91853',
      monumental_album: 'Daydream (1995)',
      album_description:
        "Mariah's 5th iconic album marked a significant moment in her career and in the music industry as a whole. 'Daydream' featured some of her most iconic and enduring songs, including 'Fantasy', 'One Sweet Day' (a collaboration with Boyz II Men), and 'Always Be My Baby'. The album showcased Mariah's remarkable vocal range and her ability to seamlessly blend pop, R&B, and hip-hop influences. 'Daydream' received widespread critical acclaim and commercial success, solidifying Mariah Carey's status as one of the greatest artists of her generation. Its impact and influence continue to resonate with fans, making it a timeless classic and a defining work in her illustrious career. In addition, it's worth mentioning the successes of other albums, such as 'Music Box' (1993),  'Butterfly' (1997), and 'The Emancipation of Mimi' (2005).",
      album_image: 'assets/img/covers/daydream.webp',
    },
    {
      index: 2,
      name: '2Pac',
      title: 'Hip-Hop Icon',
      description:
        'Tupac Shakur, widely known as 2Pac, was an influential figure in the world of hip-hop and beyond. His music often explored themes of social injustice, inequality, and personal struggles, making him a voice for those who felt unheard. His impactful career was cut tragically short, but his legacy endures through his music and the lasting influence he had on the genre.',
      image: 'assets/img/90s/tupac_shakur.webp',
      link: 'https://en.wikipedia.org/wiki/Tupac_Shakur',
      spotifyLink: 'https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh',
      appleMusicLink: 'https://music.apple.com/us/artist/2pac/105998',
      monumental_album: 'All Eyez on Me (1996)',
      album_description:
        "The double album not only marked his return from incarceration but also showcased his extraordinary talent and lyrical prowess. It included iconic tracks like 'California Love', 'How Do U Want It', and '2 of Amerikaz Most Wanted'. The album's themes ranged from party anthems to thought-provoking commentary on society and life. 'All Eyez on Me' remains one of the best-selling hip-hop albums of all time and is celebrated for its impact on the genre, solidifying Tupac's status as a legendary artist in the world of Rap and hip-hop.",
      album_image: 'assets/img/covers/all_eyez_on_me.webp',
    },
    {
      index: 3,
      name: 'Céline Dion',
      title: 'Vocal Powerhouse',
      description:
        'Céline Dion is a vocal powerhouse who made a significant impact on the music scene in the 1990s. Her exceptional vocal range and emotive delivery have earned her a place among the most legendary artists of her time. With chart-topping hits and iconic ballads, Céline Dion remains a beloved figure in the world of music.',
      image: 'assets/img/90s/celine_dion.webp',
      link: 'https://en.wikipedia.org/wiki/Céline_Dion',
      spotifyLink: 'https://open.spotify.com/artist/4S9EykWXhStSc15wEx8QFK',
      appleMusicLink:
        'https://music.apple.com/us/artist/c%C3%A9line-dion/63729',
      monumental_album: 'Falling into You (1996)',
      album_description:
        "The album propelled her to international superstardom and remains one of her best-known and best-selling works. 'Falling into You' features some of her most famous songs, including 'Because You Loved Me' and 'It's All Coming Back to Me Now'. The album received critical acclaim and won two Grammy Awards, including Album of the Year. It solidified Céline Dion's status as one of the greatest vocalists of her generation and marked a pivotal moment in her career. Céline has so many albums in various languages; it's worth mentioning 'Let's Talk About Love' (1997) (known for the iconic track 'My Heart Will Go On' from the movie 'Titanic') and my personal favorite recently released 'Courage' (2019)",
      album_image: 'assets/img/covers/falling_into_you.webp',
    },
    {
      index: 4,
      name: 'Britney Spears',
      title: 'Princess of Pop',
      description:
        "Britney Spears, widely known as the 'Princess of Pop', rose to fame in the late 1990s and early 2000s and became a cultural phenomenon. She released 9 studio albums and saw the most shining and dark sides of a pop star's life. Her unique blend of catchy pop tunes, iconic music videos, and electrifying performances established her as a pivotal figure in the pop music landscape",
      image: 'assets/img/90s/britney_spears.webp',
      link: 'https://en.wikipedia.org/wiki/Britney_Spears',
      spotifyLink: 'https://open.spotify.com/artist/26dSoYclwsYLMAKD3tpOr4',
      appleMusicLink: 'https://music.apple.com/us/artist/britney-spears/217005',
      monumental_album: 'Blackout (2007)',
      album_description:
        "Britney's 5th album is her most monumental album. Despite a tumultuous period in her personal life, this record became a game-changer in Pop music. 'Blackout' marked a departure from her previous work, featuring edgier and more experimental sounds, which earned it critical acclaim. Songs like 'Gimme More' and 'Piece of Me' showcased a new, confident Britney. The album's influence can be heard in the works of later Pop artists, solidifying her status as a Pop culture icon. Her iconic discography includes her transition album from girl to woman 'In The Zone' (2003), the successful 'Oops!… I Did it Again' (2000), and the latest 'Glory' (2016)",
      album_image: 'assets/img/covers/blackout.webp',
    },
    {
      index: 5,
      name: 'Christina Aguilera',
      title: 'Vocal Powerhouse',
      description:
        'Christina Aguilera, known for her incredible vocal talent and powerful performances, has been a prominent figure in the music industry since her debut in the late 1990s. With a career spanning genres like pop, R&B, and soul, she has consistently demonstrated her versatility as an artist.',
      image: 'assets/img/90s/christina_aguilera.webp',
      link: 'https://en.wikipedia.org/wiki/Christina_Aguilera',
      spotifyLink: 'https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS',
      appleMusicLink:
        'https://music.apple.com/us/artist/christina-aguilera/259398',
      monumental_album: 'Stripped (2002)',
      album_description:
        "This record marked a significant shift in her career, as she embraced a more mature and introspective image. 'Stripped' is known for its bold and unapologetic themes, exploring empowerment, self-acceptance, and vulnerability. Hit singles like 'Beautiful' and 'Dirrty' showcased her vocal prowess and fearlessness. The album's impact on Pop culture and its contribution to discussions about self-expression and authenticity solidify its place as a defining moment in Christina Aguilera's career.",
      album_image: 'assets/img/covers/stripped.webp',
    },
    {
      index: 6,
      name: 'Jennifer Lopez',
      title: 'Queen of Latin Pop',
      description:
        "Jennifer Lopez, often referred to as J.Lo, is a multitalented artist who has made a significant impact on the entertainment industry. With a successful career in music, film, and fashion, she became a prominent figure in the late 1990s and continued to rise to superstardom. Her Latin roots and captivating stage presence have earned her the title of 'Queen of Latin Pop'.",
      image: 'assets/img/90s/jennifer_lopez.webp',
      link: 'https://en.wikipedia.org/wiki/Jennifer_Lopez',
      spotifyLink: 'https://open.spotify.com/artist/2DlGxzQSjYe5N6G9nkYghR',
      appleMusicLink: 'https://music.apple.com/us/artist/jennifer-lopez/463009',
      monumental_album: 'J.Lo (2001)',
      album_description:
        "Jennifer's sophomore album stands out as one of her most iconic and memorable works. With hit singles like 'Love Don't Cost a Thing' and 'I'm Real', it solidified her status as a music superstar. The album's blend of R&B, pop, and dance influences, along with Lopez's captivating music videos, made it a defining moment in her career and a classic of the early 2000s.",
      album_image: 'assets/img/covers/jlo.webp',
    },
    {
      index: 7,
      name: 'Jay-Z',
      title: 'King of Rap',
      description:
        "Jay-Z, born Shawn Corey Carter, is a legendary figure in the world of hip-hop and rap. With his extraordinary lyrical prowess and entrepreneurial acumen, he not only became a dominant force in the 1990s but continues to be a major influence in the music industry. His contributions to rap music and his remarkable career have solidified his status as the 'King of Rap'.",
      image: 'assets/img/90s/jay_z.webp',
      link: 'https://en.wikipedia.org/wiki/Jay-Z',
      spotifyLink: 'https://open.spotify.com/artist/3nFkdlSjzX9mRTtwJOzDYB',
      appleMusicLink: 'https://music.apple.com/us/artist/jay-z/1352449404',
      monumental_album: 'The Blueprint (2001)',
      album_description:
        "With 13 albums under his belt, Jay-Z's album 'The Blueprint' is widely regarded as one of the greatest hip-hop albums ever created. With classic tracks like 'Izzo (H.O.V.A.)' and 'Renegade', it showcased his impeccable lyrical skills and cemented his legacy in Rap history. The album's production, mainly by a young Kanye West, featured soulful beats and sampling, contributing to its iconic status. It's worth mentioning his debut album 'Reasonable Doubt' (1996) and his 8th album 'The Black Album' (2003) as monumental milestones in his long career.",
      album_image: 'assets/img/covers/the_blueprint.webp',
    },
    {
      index: 8,
      name: 'Snoop Dogg',
      title: 'West Coast Rapper Legend',
      description:
        'Snoop Dogg is a prominent American rapper, songwriter, and actor known for his iconic contributions to hip-hop. He emerged in the 1990s with his distinctive West Coast gangsta rap style and a laid-back, charismatic persona.',
      image: 'assets/img/90s/snoop_dogg.webp',
      link: 'https://en.wikipedia.org/wiki/Snoop_Dogg',
      spotifyLink: 'https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG',
      appleMusicLink: 'https://music.apple.com/us/artist/snoop-dogg/21769',
      monumental_album: 'Doggystyle (1993)',
      album_description:
        "Snoop's debut album played a pivotal role in shaping the landscape of hip-hop. It showcased Snoop's unique flow, clever wordplay, and charisma, with standout tracks like 'Gin and Juice' and 'Who Am I? (What's My Name?)'. 'Doggystyle' is not only a timeless classic but also a cultural cornerstone that solidified Snoop Dogg's status as a Rap legend and continues to influence generations of artists.",
      album_image: 'assets/img/covers/doggystyle.webp',
    },
    {
      index: 9,
      name: 'Shania Twain',
      title: 'Queen of Country Pop',
      description:
        'Shania Twain is a Canadian-American country-pop singer, songwriter, and actress known for her remarkable contributions to the music industry. She has captivated audiences worldwide with her powerful voice and chart-topping hits.',
      image: 'assets/img/90s/shania_twain.webp',
      link: 'https://en.wikipedia.org/wiki/Shania_Twain',
      spotifyLink: 'https://open.spotify.com/artist/5e4Dhzv426EvQe3aDb64jL',
      appleMusicLink: 'https://music.apple.com/us/artist/shania-twain/129974',
      monumental_album: 'Come On Over (1997)',
      album_description:
        "This record catapulted her to international superstardom. It became at the time the best-selling country album of all time and featured a series of hits like 'Man! I Feel Like a Woman!', 'You're Still the One', and 'That Don't Impress Me Much'. 'Come On Over' not only showcased Twain's powerful vocals but also her ability to seamlessly blend country and pop, making it a landmark album in her career and in the country music genre.",
      album_image: 'assets/img/covers/come_on_over.webp',
    },
    {
      index: 10,
      name: 'Cher',
      title: 'Goddess of Pop',
      description:
        'Cher is an iconic American singer, actress, and entertainer known for her versatility and enduring presence in the entertainment industry. Her career spans several decades, and she has achieved success in various music genres and film.',
      image: 'assets/img/90s/cher.webp',
      link: 'https://en.wikipedia.org/wiki/Cher',
      spotifyLink: 'https://open.spotify.com/artist/72OaDtakiy6yFqkt4TsiFt',
      appleMusicLink: 'https://music.apple.com/us/artist/cher/106158',
      monumental_album: 'Believe (1998)',
      album_description:
        "This album marked a significant transformation in her career. With a career spanning from the 1960s to the present day, her discography includes over 25 albums, with each release contributing to her enduring legacy. The title track, 'Believe', became a massive hit and introduced auto-tune as a vocal effect in mainstream music. The album, with its dance-Pop sound, not only rejuvenated Cher's career but also influenced the Pop music landscape. 'Believe' showcased her ability to adapt to changing musical trends and cemented her status as a Pop icon. I must mention more iconic albums - 'Heart of Stone' (1989), 'Gypsys, Tramps and Thieves' (1971), and 'Cher' (1966). Cher continues to enchant audiences with her music, even releasing a Christmas album in 2023, proving that her influence on the industry is as strong as ever.",
      album_image: 'assets/img/covers/believe.webp',
    },
  ];

  private twoThousandsData: any = [
    {
      index: 1,
      name: 'Beyoncé',
      title: 'Queen Bey',
      description:
        "Beyoncé is an iconic artist often referred to as 'Queen Bey.' Her remarkable career has been defined by powerful vocals, influential music, and a captivating stage presence. She has made a significant impact on the music industry and is celebrated for her versatility as a singer, songwriter, and performer. From being in the legendary girl group 'Destiny's Child' to building herself and becoming one of the most hardworking and talented stars of these days, Beyoncé's journey is a testament to her dedication and artistry.",
      image: 'assets/img/2000s/beyonce.webp',
      link: 'https://en.wikipedia.org/wiki/Beyonc%C3%A9',
      spotifyLink: 'https://open.spotify.com/artist/6vWDO969PvNqNYHIOW5v0m',
      appleMusicLink: 'https://music.apple.com/us/artist/beyonc%C3%A9/1419227',
      monumental_album: 'I Am... Sasha Fierce (2008)',
      album_description:
        "Picking one Beyoncé's album is impossible - from the artistic 'Lemonade' (2016) to the game-changing self title (2013), to the one who shaped her beginning 'B'Day' (2006) to the latest already legendary 'Renaissance' (2022), I chose to feature her 3rd album, it marked a pivotal moment in her artistic journey. The album's unique concept introduced Beyoncé's alter ego, Sasha Fierce, allowing her to explore different facets of her personality and creativity. This duality is reflected in the music, with one disc showcasing her vulnerability and introspection, while the other unleashes her fierce and confident side. The album gave us timeless hits like 'Single Ladies (Put a Ring on It)', an anthem of female empowerment, and it earned her multiple Grammy Awards. 'I Am... Sasha Fierce' not only solidified Beyoncé's status as an influential artist but also demonstrated her ability to push boundaries and innovate within the music industry, making it a true masterpiece of her career.",
      album_image: 'assets/img/covers/i_am_sasha_fierce.webp',
    },
    {
      index: 2,
      name: 'Eminem',
      title: 'Rap God',
      description:
        "Eminem, often known as the 'Rap God', is a legendary figure in the world of hip-hop. With a career marked by his exceptional lyrical skills, provocative storytelling, and the ability to tackle complex and personal topics, Eminem has left an indelible mark on the genre. His journey from a struggling underground rapper to a global superstar is a testament to his talent and determination.",
      image: 'assets/img/2000s/eminem.webp',
      link: 'https://en.wikipedia.org/wiki/Eminem',
      spotifyLink: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR',
      appleMusicLink: 'https://music.apple.com/us/artist/eminem/111051',
      monumental_album: 'The Marshall Mathers LP (2000)',
      album_description:
        "The groundbreaking record not only established him as a dominant force in the music industry but also pushed the boundaries of hip-hop. It was praised for its candid and often controversial lyrics, tackling subjects like his troubled upbringing and newfound fame. The album's iconic tracks, including 'Stan' and 'The Real Slim Shady', showcased Eminem's storytelling prowess and lyrical dexterity. 'The Marshall Mathers LP' received critical acclaim and became one of the best-selling albums of the 21st century, solidifying Eminem's place in hip-hop history. It's worth mentioning the iconic albums 'The Eminem Show' (2002) and 'The Slim Shady LP' (1999) among others.",
      album_image: 'assets/img/covers/the_marshall_mathers_lp.webp',
    },
    {
      index: 3,
      name: 'Rihanna',
      title: 'R&B Princess',
      description:
        "Rihanna has established herself as an international music sensation. Her distinctive blend of pop and R&B has garnered her a massive following. She's not only celebrated for her soulful voice but also for her fashion-forward style and business ventures. With a diverse discography spanning multiple genres, Rihanna's evolution as an artist is nothing short of remarkable.",
      image: 'assets/img/2000s/rihanna.webp',
      link: 'https://en.wikipedia.org/wiki/Rihanna',
      spotifyLink: 'https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H',
      appleMusicLink: 'https://music.apple.com/us/artist/rihanna/63346553',
      monumental_album: 'Good Girl Gone Bad (2007)',
      album_description:
        "Rihanna's musical journey has been nothing short of extraordinary, with iconic albums like her latest release, 'Anti' (2016), and the chart-topping 'Loud' (2010). However, it was her 3rd album that truly transformed her career. 'Good Girl Gone Bad' marked her transition from a wholesome image to a more rebellious and edgy persona. This pivotal release included smash hits like 'Umbrella', 'Shut Up and Drive' & 'Don't Stop the Music'. and The album's incredible success catapulted her to global stardom and cemented her status as an R&B powerhouse. 'Good Girl Gone Bad' stands as a defining work in Rihanna's career, a testament to her musical versatility and undeniable talent.",
      album_image: 'assets/img/covers/good_girl_gone_bad.webp',
    },
    {
      index: 4,
      name: 'Justin Timberlake',
      title: 'Prince of 90s Pop',
      description:
        'Justin Timberlake, known for his early days in the iconic boy band *NSYNC, made a remarkable transition to solo stardom. His career has been defined by a fusion of pop and R&B influences, as well as his smooth vocals and captivating stage presence.',
      image: 'assets/img/2000s/justin_timberlake.webp',
      link: 'https://en.wikipedia.org/wiki/Justin_Timberlake',
      spotifyLink: 'https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7',
      appleMusicLink:
        'https://music.apple.com/us/artist/justin-timberlake/398128',
      monumental_album: 'FutureSex/LoveSounds (2006)',
      album_description:
        "Justin's sophomore album marked a significant departure from his previous work with a more mature and edgier sound. Along produces Timbaland & Danja, it featured chart-topping hits like 'SexyBack' and 'My Love' and showcased his versatility as an artist. The album's innovative production and Timberlake's charismatic performances solidified his status as a solo superstar in the music industry.",
      album_image: 'assets/img/covers/future_sex_love_sounds.webp',
    },
    {
      index: 5,
      name: 'Usher',
      title: 'King of R&B',
      description:
        "Usher, often referred to as the 'King of R&B', has left an indelible mark on the music industry. With a career spanning decades, he has consistently delivered chart-topping hits and showcased his exceptional talent as a singer, songwriter, and performer. Usher's smooth vocals and captivating dance moves have made him an icon in the world of contemporary R&B and pop music.",
      image: 'assets/img/2000s/usher.webp',
      link: 'https://en.wikipedia.org/wiki/Usher_(musician)',
      spotifyLink: 'https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj',
      appleMusicLink: 'https://music.apple.com/us/artist/usher/15885',
      monumental_album: 'Confessions (2004)',
      album_description:
        "Usher's 4th album marked a significant point in his career. The record is renowned for its introspective lyrics, exploring themes of love, infidelity, and personal experiences. It includes chart-topping hits like 'Yeah!' and 'Burn', which solidified Usher's status as an R&B powerhouse. 'Confessions' received critical acclaim and commercial success, becoming one of the best-selling albums of the 2000s and a defining work in Usher's illustrious career.",
      album_image: 'assets/img/covers/confessions.webp',
    },
    {
      index: 6,
      name: 'Ye (Kanye West)',
      title: 'Hip-Hop Innovator',
      description:
        "Ye (formaly known as Kanye West), a visionary artist and producer, has left an indelible mark on the music industry. Renowned for his genre-defying approach and outspoken personality, Kanye has consistently pushed the boundaries of hip-hop and popular music. His albums showcase a dynamic evolution, from the soulful 'The College Dropout' (2004) to the experimental 'Yeezus' (2013) and the introspective 'My Beautiful Dark Twisted Fantasy' (2010)",
      image: 'assets/img/2000s/kanye_west.webp',
      link: 'https://en.wikipedia.org/wiki/Kanye_West',
      spotifyLink: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x',
      appleMusicLink: 'https://music.apple.com/us/artist/kanye-west/2715720',
      monumental_album: 'My Beautiful Dark Twisted Fantasy (2010)',
      album_description:
        "The album is a sonic masterpiece that weaves together intricate production, profound lyricism, and a star-studded cast of collaborators. It explores themes of fame, love, and mental health, cementing Kanye's reputation as a groundbreaking artist willing to confront the complexities of the human experience through his music. From the soulful introspection of 'Runaway' to the grandiose orchestration of 'Power'.Kanye West's musical opus features hits like 'All of the Lights', a vibrant exploration of fame, and 'Monster', a collaborative masterpiece with artists like Jay-Z and Nicki Minaj. Each song contributes to the album's narrative, creating a rich tapestry of sound that resonates with listeners on a visceral level.",
      album_image: 'assets/img/covers/my_beautiful_dark_twisted_fantasy.webp',
    },
    {
      index: 7,
      name: '50 Cent',
      title: 'Rap Star',
      description:
        '50 Cent is an iconic American rapper, actor, and entrepreneur. Hailing from Queens, New York, he rose to fame in the early 2000s. Known for his gritty lyrics and compelling storytelling, 50 Cent became a prominent figure in the hip-hop scene.',
      image: 'assets/img/2000s/50_cent.webp',
      link: 'https://en.wikipedia.org/wiki/50_Cent',
      spotifyLink: 'https://open.spotify.com/artist/3q7HBObVc0L8jNeTe5Gofh',
      appleMusicLink: 'https://music.apple.com/us/artist/50-cent/112058',
      monumental_album: "Get Rich or Die Tryin' (2003)",
      album_description:
        "The album not only marked his debut but also served as a cultural phenomenon. Its impact was far-reaching, making 50 Cent a household name and solidifying his status as one of the most influential figures in hip-hop. The album's success was not only attributed to its commercial achievements with singles like 'In Da Club' and '21 Questions', but also to its raw and authentic portrayal of 50 Cent's life, struggles, and determination, resonating with audiences worldwide. 'Get Rich or Die Tryin'' remains a cornerstone in the genre, reflecting an era in hip-hop that defined 50 Cent's enduring legacy.",
      album_image: 'assets/img/covers/get_rich_or_die_tryin.webp',
    },
    {
      index: 8,
      name: 'P!nk',
      title: 'Pop-Rock Artist',
      description:
        "P!nk is a Grammy-winning American singer, songwriter, and performer known for her powerful vocals and eclectic musical style. She rose to fame in the early 2000s with hits like 'Get the Party Started' and has since established herself as a versatile artist, seamlessly blending pop, rock, and R&B influences in her music. P!nk is also recognized for her dynamic stage presence and commitment to addressing social and personal issues through her lyrics.",
      image: 'assets/img/2000s/pink.webp',
      link: 'https://en.wikipedia.org/wiki/Pink_(singer)',
      spotifyLink: 'https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR',
      appleMusicLink: 'https://music.apple.com/us/artist/p-nk/4488522',
      monumental_album: "I'm Not Dead (2006)",
      album_description:
        "This album truly showcases P!nk's evolution as an artist, establishing her as a fearless voice in the music industry. The fusion of rock, pop, and R&B influences creates a dynamic and diverse musical landscape, complemented by a range of tracks that explore personal and socio-political themes. P!nk's trademark candidness is evident, particularly in standout songs like 'Stupid Girls,' where she confronts societal expectations, and 'Who Knew,' a poignant reflection on life's unpredictability. The title track, 'I'm Not Dead,' serves as a powerful anthem, affirming P!nk's resilience and determination. This work solidifies her reputation as an artist with both substance and staying power. It's worth noting that some of her previous albums, 'M!ssundaztood' (2001) and 'Funhouse' (2008), are equally monumental, contributing to P!nk's legacy in the music industry.",
      album_image: 'assets/img/covers/im_not_dead.webp',
    },
    {
      index: 9,
      name: 'Missy Elliott',
      title: 'Hip-Hop Innovator',
      description:
        "Missy Elliott is a living icon. For thirty years, she's been directing the global soundscape, visually reinventing herself and redefining pop music. Missy's career is multifaceted, as she's charted new creative territory through songwriting, rapping, singing, and producing, with style and grace. Her influence is broad - Elliott has inspired or collaborated with a number of heavy hitters, including Janet Jackson, Mariah Carey, Beyoncé, and the late Whitney Houston. No matter the time, her music and videos are always relevant, making her a cross-generational rap star with enough talent to keep her legacy alive for eons.",
      image: 'assets/img/2000s/missy_elliott.webp',
      link: 'https://en.wikipedia.org/wiki/Missy_Elliott',
      spotifyLink: 'https://open.spotify.com/artist/2wIVse2owClT7go1WT98tk',
      appleMusicLink: 'https://music.apple.com/us/artist/missy-elliott/162802',
      monumental_album: 'Under Construction (2002)',
      album_description:
        "A pivotal album in Missy Elliott's illustrious career. This project showcases Missy's unparalleled ability to fuse innovative production with her trademark lyrical prowess. The album features a dynamic range of tracks that blend Hip-Hop, R&B, and electronic elements seamlessly. Notable singles like 'Work It' and 'Gossip Folks' became anthems of the early 2000s, characterized by their infectious beats and Missy's confident and playful delivery. 'Under Construction' not only solidified Missy Elliott's reputation as a trendsetter but also demonstrated her commitment to pushing the boundaries of musical expression. The album's critical acclaim and commercial success underscore its significance as a testament to Missy's enduring influence on the evolving landscape of hip-hop and popular music.",
      album_image: 'assets/img/covers/under_construction.webp',
    },
    {
      index: 10,
      name: 'Avril Lavigne',
      title: 'Queen of Pop Punk',
      description:
        'Avril Lavigne is a Canadian singer, songwriter, and actress who gained fame in the early 2000s with her energetic pop-punk sound and rebellious image. Known for her distinctive voice and relatable lyrics, Avril has maintained a significant presence in the music industry. Her studio albums showcase her evolution as an artist, blending elements of pop, punk, and rock.',
      image: 'assets/img/2000s/avril_lavigne.webp',
      link: 'https://en.wikipedia.org/wiki/Avril_Lavigne',
      spotifyLink: 'https://open.spotify.com/artist/0p4nmQO2msCgU4IF37Wi3j',
      appleMusicLink: 'https://music.apple.com/us/artist/avril-lavigne/459885',
      monumental_album: 'Let Go (2002)',
      album_description:
        "The debut album catapulted Avril to international fame with hits like 'Complicated' and 'Sk8er Boi,' 'Let Go' encapsulates Avril's raw, rebellious spirit and resonated with a generation. The album's success not only established her as a leading force in pop-punk but also showcased her songwriting prowess. Noteworthy follow-up albums include 'Under My Skin' (2004) and 'The Best Damn Thing' (2007), each contributing to Avril's musical journey and showcasing her ability to evolve while maintaining her distinctive style. ",
      album_image: 'assets/img/covers/let_go.webp',
    },
  ];

  private tensData: any = [
    {
      index: 1,
      name: 'Adele',
      title: 'Soulful Legend',
      description:
        "Adele is a British singer-songwriter renowned for her soulful voice and emotional ballads. Adele's captivating performances and powerful vocal range have made her a global music icon.",
      image: 'assets/img/2010s/adele.webp',
      link: 'https://en.wikipedia.org/wiki/Adele',
      spotifyLink: 'https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY',
      appleMusicLink: 'https://music.apple.com/us/artist/adele/262836961',
      monumental_album: '21 (2011)',
      album_description:
        "Adele's sophomore album, earned widespread acclaim and numerous accolades, including six Grammy Awards. The emotionally rich tracks, marked by Adele's poignant lyrics and powerful vocals, resonated globally. '21' not only dominated charts with hits like 'Rolling in the Deep', 'Someone Like You' & 'Set Fire to the Rain' but also solidified Adele's status as a soulful legend, showcasing her ability to connect with listeners on a profound level. The album's impact transcends its commercial success, making it a defining chapter in Adele's musical legacy. In fact, ever since, with the next age series albums '25' (2015) & '30' (2021), Adele hasn't stopped delivering iconic bodies of work.",
      album_image: 'assets/img/covers/21.webp',
    },
    {
      index: 2,
      name: 'Taylor Swift',
      title: 'The Music Industry',
      description:
        "Taylor Swift is a highly acclaimed American singer-songwriter known for her exceptional storytelling, versatile musical style, and cultural impact. Swift began her career as a country artist, quickly gaining recognition for her authentic lyrics and catchy melodies. Over the years, she transitioned into pop music, demonstrating her ability to evolve while maintaining a strong connection with her audience. With chart-topping and record-breaking albums and hit singles, Taylor Swift has become one of the most influential figures in the music industry. Beyond her musical achievements, she is celebrated for her advocacy and bold approach to addressing personal and societal issues. Taylor Swift's impact on the music landscape is undeniable, making her the top global icon of 2023 and a role model for aspiring artists.",
      image: 'assets/img/2010s/taylor_swift.webp',
      link: 'https://en.wikipedia.org/wiki/Taylor_Swift',
      spotifyLink: 'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02',
      appleMusicLink:
        'https://music.apple.com/us/artist/taylor-swift/159260351',
      monumental_album: 'folklore (2020)',
      album_description:
        "Choosing one album for Taylor is impossible, from '1989' (2014)/'1989 (Taylor's Version)' (2023), to 'Reputation' (2017) and many more, my standout has to be 'folklore'. Representing a departure from her signature Pop sound to explore indie folk and alternative styles. Released in the pandemic, the album received widespread critical acclaim, surprising fans with its introspective and storytelling approach. 'folklore' features hits like 'Cardigan' and 'The 1', showcasing Swift's versatility as a songwriter and her ability to craft narratives that resonate with listeners. The album, known for its dreamy atmosphere and rich storytelling, earned Taylor Swift multiple accolades, including the Grammy Award for Album of the Year. 'folklore' not only demonstrated Swift's artistic depth but also solidified her capacity to successfully venture into new musical territories.",
      album_image: 'assets/img/covers/folklore.webp',
    },
    {
      index: 3,
      name: 'Lady Gaga',
      title: 'Pop Chameleon',
      description:
        "Lady Gaga is a globally renowned American singer, songwriter, and actress. Known for her distinctive voice, eclectic fashion sense, and avant-garde approach to music, Gaga has become a cultural icon and a trailblazer in the pop music industry. From her debut with 'The Fame' and 'The Fame Monster' to the experimentation of 'Born This Way,' the electro-pop drama of 'ARTPOP,' the soulful journey in 'Joanne,' and the infectious pop vibes of 'Chromatica,' Lady Gaga's musical journey is a testament to her versatility. Her future in the industry looks promising and bright.",
      image: 'assets/img/2010s/lady_gaga.webp',
      link: 'https://en.wikipedia.org/wiki/Lady_Gaga',
      spotifyLink: 'https://open.spotify.com/artist/1HY2Jd0NmPuamShAr6KMms',
      appleMusicLink: 'https://music.apple.com/us/artist/lady-gaga/277293880',
      monumental_album: 'The Fame Monster (2009)',
      album_description:
        "The iconic 'The Fame Monster' is an extension of her debut album 'The Fame' (2008). It features eight new tracks that delve into darker and more complex themes, including fame, love, and fear. The album includes iconic songs like 'Bad Romance' and 'Alejandro,' showcasing Gaga's ability to blend catchy Pop melodies with provocative lyrics. 'The Fame Monster' not only solidified Lady Gaga's status as a Pop sensation but also demonstrated her versatility and willingness to push creative boundaries, earning her critical acclaim and a dedicated fan base (little monsters).",
      album_image: 'assets/img/covers/the_fame_monster.webp',
    },
    {
      index: 4,
      name: 'Bruno Mars',
      title: 'Versatile Star',
      description:
        'Bruno Mars is an American singer, songwriter, and record producer. With his dynamic voice, charismatic performances, and versatile musical style, Mars has become a prominent figure in the contemporary music scene. He has received numerous accolades, including multiple Grammy Awards, and is celebrated for his ability to seamlessly blend various genres into his music, from pop and R&B to funk and soul.',
      image: 'assets/img/2010s/bruno_mars.webp',
      link: 'https://en.wikipedia.org/wiki/Bruno_Mars',
      spotifyLink: 'https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C',
      appleMusicLink: 'https://music.apple.com/us/artist/bruno-mars/278873078',
      monumental_album: '24K Magic (2016)',
      album_description:
        "The album is a celebration of funk, R&B, and Pop influences. With hit singles like '24K Magic' and 'That's What I Like,' Mars showcases his exceptional vocal range and pays homage to the sounds of the '80s and '90s. The album's energetic and infectious tracks, coupled with Mars' charisma, garnered widespread acclaim. '24K Magic' not only solidified Bruno Mars as a contemporary Pop icon but also earned him multiple Grammy Awards, including Album of the Year.",
      album_image: 'assets/img/covers/24k_magic.webp',
    },
    {
      index: 5,
      name: 'Drake',
      title: 'Hip-Hop Superstar',
      description:
        'Drake is a Canadian rapper, singer, and songwriter who has left an indelible mark on the music industry. Known for his introspective lyrics, smooth delivery, and ability to seamlessly navigate between Rap and R&B, Drake has become one of the best-selling music artists globally. His influence extends beyond music, with successful ventures in acting and entrepreneurship.',
      image: 'assets/img/2010s/drake.webp',
      link: 'https://en.wikipedia.org/wiki/Drake_(musician)',
      spotifyLink: 'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4',
      appleMusicLink: 'https://music.apple.com/us/artist/drake/271256',
      monumental_album: 'Take Care (2011)',
      album_description:
        "The album delves into themes of fame, love, and self-reflection. With hits like 'Headlines' and the title track 'Take Care' featuring Rihanna, Drake skillfully combines emotional depth with catchy beats. The album earned critical acclaim for its genre-blurring approach, solidifying Drake's status as a dominant force in contemporary hip-hop and R&B. 'Take Care' won the Grammy Award for Best Rap Album and has since become a defining work in Drake's discography.",
      album_image: 'assets/img/covers/take_care.webp',
    },
    {
      index: 6,
      name: 'Kendrick Lamar',
      title: 'Rap Prodigy',
      description:
        'Kendrick Lamar is an American rapper, songwriter, and record producer widely regarded as one of the most influential figures in Hip-Hop. Known for his thought-provoking lyrics, intricate storytelling, and social commentary, Kendrick Lamar has earned acclaim for pushing the boundaries of the genre and addressing complex issues in his music.',
      image: 'assets/img/2010s/kendrick_lamar.webp',
      link: 'https://en.wikipedia.org/wiki/Kendrick_Lamar',
      spotifyLink: 'https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg',
      appleMusicLink:
        'https://music.apple.com/us/artist/kendrick-lamar/368183298',
      monumental_album: 'To Pimp a Butterfly (2015)',
      album_description:
        "While it's almost impossible to pick between Kendrick's latest four albums ['good kid, m.A.A.d city' (2012), 'To Pimp a Butterfly' (2015), 'DAMN.' (2017) & 'Mr. Morale & the Big Steppers' (2022)], his third album is a powerful exploration of race, identity, and the social challenges facing the African American community. Featuring tracks like 'Alright' and 'The Blacker the Berry', the album is celebrated for its poetic lyricism and fusion of jazz, funk, and hip-hop elements. 'To Pimp a Butterfly' received widespread critical acclaim, earning Lamar several Grammy Awards and cementing his reputation as a visionary artist in the Rap genre.",
      album_image: 'assets/img/covers/to_pimp_a_butterfly.webp',
    },
    {
      index: 7,
      name: 'Justin Bieber',
      title: 'King of Teen Pop',
      description:
        'Justin Bieber is a Canadian singer, songwriter, and pop sensation. Rising to fame as a teenager, Bieber has evolved into a global music phenomenon known for his smooth vocals, catchy melodies, and impactful presence in the entertainment industry.',
      image: 'assets/img/2010s/justin_bieber.webp',
      link: 'https://en.wikipedia.org/wiki/Justin_Bieber',
      spotifyLink: 'https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s',
      appleMusicLink:
        'https://music.apple.com/us/artist/justin-bieber/320569549',
      monumental_album: 'Purpose (2015)',
      album_description:
        "This album marks a significant transition in Bieber's career, showcasing a more mature and introspective artist. With hits like 'Sorry' and 'What Do You Mean?', 'Purpose' explores themes of love, redemption, and personal growth. The album received widespread acclaim for its emotional depth and infectious Pop sound, solidifying Bieber's status as a Pop icon. 'Purpose' not only dominated charts but also earned Bieber his first Grammy Award for Best Dance Recording.",
      album_image: 'assets/img/covers/purpose.webp',
    },
    {
      index: 8,
      name: 'Nicki Minaj',
      title: 'The Queen of Rap',
      description:
        'Nicki Minaj, a Trinidadian-American rapper, singer, and songwriter, has undeniably left an indelible mark on the music industry. Renowned for her bold persona, lightning-fast verses, and diverse collaborations across genres, Minaj has become a trailblazing force in rap. Her impact extends beyond musical prowess; she made female rap accessible, seamlessly blending Pop and Rap to create a commercially successful fusion. After over 15 years in the game, Nicki Minaj has not only maintained her relevance but has solidified her position as the undisputed Queen of Rap, a testament to her enduring influence and innovation in the ever-evolving landscape of hip-hop.',
      image: 'assets/img/2010s/nicki_minaj.webp',
      link: 'https://en.wikipedia.org/wiki/Nicki_Minaj',
      spotifyLink: 'https://open.spotify.com/artist/0hCNtLu0JehylgoiP8L4Gh',
      appleMusicLink: 'https://music.apple.com/us/artist/nicki-minaj/278464538',
      monumental_album: 'Pink Friday (2010)',
      album_description:
        "Nicki Minaj's debut album, 'Pink Friday,' served as a powerful launchpad propelling her into the mainstream spotlight. Boasting chart-toppers like 'Super Bass' and 'Moment 4 Life,' the album is a testament to Minaj's versatility, seamlessly blending Rap, Pop, and R&B elements. Beyond showcasing her prowess as a rapper, 'Pink Friday' highlighted Minaj's knack for crafting infectious and memorable hooks. The critical acclaim it garnered firmly established Nicki Minaj as a formidable presence in the music industry. As she gears up for the release of her fifth album, 'Pink Friday 2,' it appears that Minaj's impactful musical journey is poised to continue dominating the scene in 2024.",
      album_image: 'assets/img/covers/pink_friday.webp',
    },
    {
      index: 9,
      name: 'Ariana Grande',
      title: 'Vocal Powerhouse',
      description:
        'Ariana Grande is an American singer, songwriter, and actress. Renowned for her powerful vocals, Grande has become a pop sensation and cultural icon. From her early days as a Nickelodeon star to her evolution into a chart-topping artist, she has consistently captivated audiences with her impressive vocal range and distinctive style',
      image: 'assets/img/2010s/ariana_grande.webp',
      link: 'https://en.wikipedia.org/wiki/Ariana_Grande',
      spotifyLink: 'https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR',
      appleMusicLink:
        'https://music.apple.com/us/artist/ariana-grande/412778295',
      monumental_album: 'Thank U, Next (2019)',
      album_description:
        "The album came at a pivotal moment in Grande's personal life and showcased her resilience and artistic growth. Featuring the hit singles 'Thank U, Next' and '7 Rings', the album explores themes of self-love, empowerment, and heartbreak. 'Thank U, Next' not only topped charts but also received critical acclaim, solidifying Ariana Grande as a pop powerhouse and earning her multiple Grammy nominations.",
      album_image: 'assets/img/covers/thank_u_next.webp',
    },
    {
      index: 10,
      name: 'Katy Perry',
      title: 'Pop Superstar',
      description:
        "Katy Perry is an American singer, songwriter, and television judge. Recognized for her catchy pop anthems and vibrant persona, Perry has become a global pop sensation. From her breakthrough with 'I Kissed a Girl' to her chart-topping hits like 'Teenage Dream' and 'Roar', she has consistently delivered infectious tunes and eye-catching visuals that have resonated with audiences worldwide.",
      image: 'assets/img/2010s/katy_perry.webp',
      link: 'https://en.wikipedia.org/wiki/Katy_Perry',
      spotifyLink: 'https://open.spotify.com/artist/6jJ0s89eD6GaHleKKya26X',
      appleMusicLink: 'https://music.apple.com/us/artist/katy-perry/64387566',
      monumental_album: 'Teenage Dream (2010)',
      album_description:
        "The album catapulted Katy Perry to superstardom with a string of chart-topping singles, including 'California Gurls', 'Firework', and the title track 'Teenage Dream'. Perry's ability to craft catchy, anthemic pop songs resonated with a wide audience, making 'Teenage Dream' a commercial success. The album received critical acclaim for its infectious energy and became a defining chapter in Perry's career, earning her numerous awards and nominations. Notably, Katy Perry's 'Teenage Dream' album achieved a historic milestone by tying Michael Jackson's 'Bad' album for 5 consecutive #1 singles on the Billboard Hot 100 chart, solidifying her status among music legends.",
      album_image: 'assets/img/covers/teenage_dream.webp',
    },
  ];

  private twentiesData: any = [
    {
      index: 1,
      name: 'Billie Eilish',
      title: 'Pop Sensation',
      description:
        "Billie Eilish is an American singer-songwriter who rose to prominence with her distinctive style and captivating vocals. Her music often explores themes of identity, love, and mental health. Eilish gained widespread acclaim for her debut album, 'When We All Fall Asleep, Where Do We Go?' (2019), which marked a groundbreaking moment in contemporary pop music. With her unique approach to sound and visuals, Billie Eilish has become a trailblazer for the next generation of artists.",
      image: 'assets/img/2020s/billie_eilish.webp',
      link: 'https://en.wikipedia.org/wiki/Billie_Eilish',
      spotifyLink: 'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH',
      appleMusicLink:
        'https://music.apple.com/us/artist/billie-eilish/1065981054',

      monumental_album: 'When We All Fall Asleep, Where Do We Go? (2019)',
      album_description:
        "This album not only showcased Eilish's prodigious talent but also defined a new era in pop music. It features hit tracks like 'Bad Guy' and 'When the Party's Over', demonstrating Eilish's ability to seamlessly blend genres and create a sonic landscape that resonates with a diverse audience. The album earned Eilish multiple Grammy Awards, including Album of the Year, making her the youngest person and the first woman to win the category. 'When We All Fall Asleep, Where Do We Go?' solidified Billie Eilish as a boundary-pushing artist and cultural phenomenon.",
      album_image:
        'assets/img/covers/when_we_all_fall_asleep_where_do_we_go.webp',
    },
    {
      index: 2,
      name: 'the Weeknd',
      title: 'R&B Star',
      description:
        'The Weeknd, Abel Makkonen Tesfaye, is a Canadian singer, songwriter, and record producer known for his soulful voice and genre-blending music. The Weeknd gained international recognition with his distinctive style that fuses R&B, Pop, and electronic elements. His enigmatic persona and chart-topping hits have made him a prominent figure in the contemporary music scene.',
      image: 'assets/img/2020s/the_weeknd.webp',
      link: 'https://en.wikipedia.org/wiki/The_Weeknd',
      spotifyLink: 'https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ',
      appleMusicLink: 'https://music.apple.com/us/artist/the-weeknd/479756766',
      monumental_album: 'After Hours (2020)',
      album_description:
        "This album is a masterful exploration of themes such as love, heartbreak, and the dark side of fame. With hit singles like 'Blinding Lights', 'Heartless', and 'Save Your Tears', The Weeknd crafted a cohesive and cinematic experience that resonated globally. 'After Hours' received critical acclaim, earning numerous awards and nominations. The album's atmospheric production and The Weeknd's soulful vocals solidified his status as a contemporary R&B icon, marking a pivotal moment in his career.",
      album_image: 'assets/img/covers/after_hours.webp',
    },
    {
      index: 3,
      name: 'Olivia Rodrigo',
      title: 'Breakout Star',
      description:
        "Olivia Rodrigo is an American singer-songwriter and actress who skyrocketed to fame with her powerful vocals and relatable songwriting. Emerging as a prominent figure in the music industry, Rodrigo first gained widespread recognition for her debut single, 'drivers license', which captivated audiences with its emotional depth and authenticity. Rodrigo's artistry is marked by a blend of pop and alternative influences, establishing her as a voice for the younger generation.",
      image: 'assets/img/2020s/olivia_rodrigo.webp',
      link: 'https://en.wikipedia.org/wiki/Olivia_Rodrigo',
      spotifyLink: 'https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG',
      appleMusicLink:
        'https://music.apple.com/us/artist/olivia-rodrigo/979458609',
      monumental_album: 'SOUR (2021)',
      album_description:
        "'SOUR' quickly became a cultural phenomenon, featuring emotionally charged tracks like 'good 4 u' and 'deja vu'. 'SOUR' explores themes of heartbreak, self-disalbum_imagey, and the complexities of young love, resonating with a wide audience. Rodrigo's ability to express raw emotion and vulnerability in her lyrics, combined with her impressive vocal range, has solidified her as a rising star in the music industry. 'SOUR' received critical acclaim, and Olivia Rodrigo's impact on the pop music landscape continues to grow.",
      album_image: 'assets/img/covers/sour.webp',
    },
    {
      index: 4,
      name: 'Harry Styles',
      title: 'Versatile Popstar',
      description:
        'Harry Styles is an English singer, songwriter, and actor known for his charismatic personality and eclectic musical style. Rising to prominence as a member of the globally acclaimed boy band One Direction, Styles embarked on a successful solo career, showcasing his versatility and distinctive fashion sense. With a musical journey that spans pop, rock, and folk influences, Styles has become a prominent figure in the contemporary music scene.',
      image: 'assets/img/2020s/harry_styles.webp',
      link: 'https://en.wikipedia.org/wiki/Harry_Styles',
      spotifyLink: 'https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3',
      appleMusicLink:
        'https://music.apple.com/us/artist/harry-styles/471260289',
      monumental_album: 'Fine Line (2019)',
      album_description:
        "While it's still too soon to determine which album has a greater impact, whether it's 'Fine Line (2019)' or 'Harry's House (2022)', his sophomore album marked a significant departure from his pop roots, delving into a more mature and introspective sound. With hit singles like 'Watermelon Sugar' and 'Adore You', 'Fine Line' explores themes of love, self-disalbum_imagey, and personal growth. The album received widespread critical acclaim for its experimentation with various genres, including rock and psychedelic pop. Styles' charismatic presence and the album's sonic richness solidified 'Fine Line' as a defining work in his solo career, earning him accolades and further establishing him as a solo artist with a unique musical identity.",
      album_image: 'assets/img/covers/fine_line.webp',
    },
    {
      index: 5,
      name: 'Cardi B',
      title: 'Hip-Hop Icon',
      description:
        "Cardi B, the Bronx-born rapper, songwriter, and actress, has undeniably left a lasting impact on the Hip-Hop scene. Renowned for her fearless and unapologetic style, Cardi B catapulted to fame with the explosive single 'Bodak Yellow' and has since become a prominent force in the music and entertainment industry. In 2018, Cardi B made significant strides in breaking commercial barriers within the female rap landscape. While Nicki Minaj was dominating the genre and Iggy Azalea was on the rise in 2014, Cardi B emerged as a standout figure. Her ability to break through and make 'money moves' not only solidified her commercial success but also marked a pivotal moment in her career, showcasing her influence and impact in the music industry.",
      image: 'assets/img/2020s/cardi_b.webp',
      link: 'https://en.wikipedia.org/wiki/Cardi_B',
      spotifyLink: 'https://open.spotify.com/artist/4kYSro6naA4h99UJvo89HB',
      appleMusicLink: 'https://music.apple.com/us/artist/cardi-b/956078923',
      monumental_album: 'Invasion of Privacy (2018)',
      album_description:
        "With only one studio album, Cardi's debut showcases her confident and energetic delivery, addressing themes of success, relationships, and empowerment. With hit tracks like 'Bodak Yellow', 'I Like It', and 'Be Careful', the album received widespread acclaim for its bold lyricism and dynamic production. 'Invasion of Privacy' not only earned Cardi B the Grammy Award for Best Rap Album but also solidified her status as a trailblazer in the Rap genre, breaking barriers for women in Hip-Hop. The album's commercial success and critical acclaim marked a pivotal moment in Cardi B's career, establishing her as a force to be reckoned with in the music industry.",
      album_image: 'assets/img/covers/invasion_of_privacy.webp',
    },
    {
      index: 6,
      name: 'Doja Cat',
      title: 'Pop/Rap Innovator',
      description:
        'Doja Cat is a dynamic American singer, rapper, and songwriter known for her versatile musical style and captivating stage presence. Emerging as a prominent figure in the contemporary music scene, Doja Cat has become celebrated for her genre-blending approach and unapologetic creativity.',
      image: 'assets/img/2020s/doja_cat.webp',
      link: 'https://en.wikipedia.org/wiki/Doja_Cat',
      spotifyLink: 'https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5',
      appleMusicLink: 'https://music.apple.com/us/artist/doja-cat/830588310',
      monumental_album: 'Planet Her (2021)',
      album_description:
        "Doja's 3rd album solidified her position in the music industry with its eclectic mix of pop, R&B, and Hip-Hop influences. Featuring hit tracks like 'Kiss Me More', 'Woman', and 'Need to Know', 'Planet Her' received widespread acclaim for its infectious energy and Doja Cat's ability to seamlessly navigate different musical styles. The album's success marked a turning point in her career, establishing her as a boundary-pushing artist with a unique voice in contemporary music.",
      album_image: 'assets/img/covers/planet_her.webp',
    },
    {
      index: 7,
      name: 'Post Malone',
      title: 'Rap Rockstar',
      description:
        'Post Malone is an American singer, rapper, and songwriter recognized for his genre-blending musical style that fuses elements of Hip-Hop, Pop, and Rock. With his distinctive voice and unique approach to music, Post Malone has risen to prominence as a chart-topping artist in the contemporary music landscape.',
      image: 'assets/img/2020s/post_malone.webp',
      link: 'https://en.wikipedia.org/wiki/Post_Malone',
      spotifyLink: 'https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60',
      appleMusicLink: 'https://music.apple.com/us/artist/post-malone/966309175',
      monumental_album: 'beerbongs & bentleys (2018)',
      album_description:
        "Post's sophomore studio album showcased his versatility and ability to seamlessly traverse different genres. With hit singles like 'Rockstar' and 'Psycho', the album dominated charts and earned widespread acclaim for its melodic hooks and introspective lyrics. 'beerbongs & bentleys' solidified Post Malone's status as a contemporary music icon, marking a significant chapter in his career and contributing to his widespread recognition in the global music scene.",
      album_image: 'assets/img/covers/beerbongs_and_bentleys.webp',
    },
    {
      index: 8,
      name: 'Megan Thee Stallion',
      title: 'Rap Sensation',
      description:
        'Megan Thee Stallion is an American rapper, singer, and songwriter known for her powerful and assertive presence in the Hip-Hop industry. With her charismatic delivery and unapologetic lyricism, Megan Thee Stallion has become a prominent figure in contemporary Rap, earning acclaim for her contributions to the genre.',
      image: 'assets/img/2020s/megan_thee_stallion.webp',
      link: 'https://en.wikipedia.org/wiki/Megan_Thee_Stallion',
      spotifyLink: 'https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK',
      appleMusicLink:
        'https://music.apple.com/us/artist/megan-thee-stallion/1258989914',
      monumental_album: 'Good News (2020)',
      album_description:
        "This debut studio album features a collection of tracks that showcase her bold and confident style, with hits like 'Savage' and 'Body'. 'Good News' received widespread praise for its infectious beats and Megan Thee Stallion's skillful flow, earning her critical acclaim and commercial success. The album marked a significant moment in her career, solidifying her position as a Rap sensation and a trailblazer for women in the genre. While Megan shines in her mixtapes, the singles from the album made a shooting impact on her career",
      album_image: 'assets/img/covers/good_news.webp',
    },
    {
      index: 9,
      name: 'Miley Cyrus',
      title: 'Pop Rock Star',
      description:
        'Miley Cyrus is an American singer, songwriter, and actress who has evolved from her Disney Channel roots into a versatile and boundary-pushing artist. Known for her dynamic voice and fearless persona, Miley Cyrus has navigated various musical genres throughout her career, leaving a lasting impact on the music industry.',
      image: 'assets/img/2020s/miley_cyrus.webp',
      link: 'https://en.wikipedia.org/wiki/Miley_Cyrus',
      spotifyLink: 'https://open.spotify.com/artist/5YGY8feqx7naU7z4HrwZM6',
      appleMusicLink: 'https://music.apple.com/us/artist/miley-cyrus/137057909',
      monumental_album: 'Bangerz (2013)',
      album_description:
        "While I debated whether to place Miley in the 2010s or 2020s, her latest single 'Flowers' (2023) has truly elevated her legacy. However, Miley's 4th studio album was her peak era and marked a significant departure from her previous Pop sound, embracing a more mature and edgy image. With hit singles like 'Wrecking Ball' and 'We Can't Stop', 'Bangerz' received widespread acclaim for its bold experimentation with Hip-Hop and R&B elements. The album not only showcased Miley Cyrus's artistic evolution but also solidified her as a Pop icon with the ability to reinvent her musical identity.",
      album_image: 'assets/img/covers/bangerz.webp',
    },
    {
      index: 10,
      name: 'Dua Lipa',
      title: 'Pop Superstar',
      description:
        'Dua Lipa is a British singer and songwriter recognized for her captivating voice and contributions to the Pop and dance music genres. Rising to international prominence, Dua Lipa has become a symbol of contemporary Pop, known for her chart-topping hits and energetic performances.',
      image: 'assets/img/2020s/dua_lipa.webp',
      link: 'https://en.wikipedia.org/wiki/Dua_Lipa',
      spotifyLink: 'https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we',
      appleMusicLink: 'https://music.apple.com/us/artist/dua-lipa/1031397873',
      monumental_album: 'Future Nostalgia (2020)',
      album_description:
        "Dua's sophomore studio album marked a significant moment in her career, showcasing a fusion of retro and modern sounds. With tracks like 'Don't Start Now' and 'Levitating', 'Future Nostalgia' received widespread acclaim for its infectious beats, empowering lyrics, and Dua Lipa's commanding vocals. The album not only solidified her as a pop sensation but also earned her critical acclaim and numerous accolades, including Grammy Awards. 'Future Nostalgia' stands as a defining work in Dua Lipa's discography, demonstrating her versatility and impact on the Pop music landscape.",
      album_image: 'assets/img/covers/future_nostalgia.webp',
    },
  ];

  private honorableMentions: any = [
    {
      index: 1,
      name: 'Elvis Presley',
      title: 'King of Rock and Roll (50s)',
      description:
        "Widely known as the 'King of Rock and Roll,' Elvis Presley revolutionized the music industry in the 1950s. Born in Tupelo, Mississippi, in 1935, Elvis's charismatic stage presence, combined with his distinctive voice and energetic performances, propelled him to iconic status. With a career spanning genres from rockabilly and blues to gospel and ballads, Elvis became a cultural phenomenon, leaving an indelible mark on the history of popular music",
      image: 'assets/img/honorable_mentions/elvis_presley.webp',
      link: 'https://en.wikipedia.org/wiki/Elvis_Presley',
      spotifyLink: 'https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE',
      appleMusicLink: 'https://music.apple.com/il/artist/elvis-presley/197443',
      monumental_album: 'Elvis Presley (1956)',
      album_description:
        "Elvis's self-titled debut album marked the beginning of a musical revolution. With tracks like 'Heartbreak Hotel', 'Blue Suede Shoes', and 'Hound Dog', the album showcased Elvis's electrifying fusion of Rock, Blues, and Country. It not only defined the sound of the emerging Rock & Roll genre but also catapulted Elvis into superstardom. His raw energy, coupled with the innovative production, captured the spirit of rebellion and teenage angst, making 'Elvis Presley' an enduring classic that continues to influence generations of musicians.",
      album_image: 'assets/img/covers/elvis_presley.webp',
    },
    {
      index: 2,
      name: 'Bob Marley',
      title: 'Reggae Legend (70s)',
      description:
        "Bob Marley, a legendary reggae musician, is known for his iconic songs like 'No Woman, No Cry' and 'One Love'. Born in Jamaica in 1945, Marley's profound influence on reggae music and his messages of peace and social justice have left an indelible mark on the world. His soulful voice and rhythmic beats continue to resonate globally, making him a symbol of musical and cultural unity.",
      image: 'assets/img/honorable_mentions/bob_marley.webp',
      link: 'https://en.wikipedia.org/wiki/Bob_Marley',
      spotifyLink: 'https://open.spotify.com/artist/2QsynagSdAqZj3U9HgDzjD',
      appleMusicLink: 'https://music.apple.com/us/artist/bob-marley/121982',
      monumental_album: 'Exodus (1977)',
      album_description:
        "This album stands as one of Bob Marley's most significant and influential albums. Recorded in the aftermath of an assassination attempt on Marley's life, the album carries a powerful message of resilience, hope, and liberation. With tracks like 'Jamming,' 'One Love/People Get Ready', and the title track 'Exodus', Marley's songwriting reaches new heights, delivering a musical journey that blends reggae, ska, and rock influences. The album became a symbol of the Rastafari movement and garnered international acclaim for its socially conscious lyrics and infectious rhythms. 'Exodus' not only solidified Bob Marley and The Wailers' status as global music icons but also remains a timeless masterpiece in the history of reggae music.",
      album_image: 'assets/img/covers/exodus.webp',
    },
    {
      index: 3,
      name: 'David Bowie',
      title: 'Rock Innovator (80s)',
      description:
        "A visionary in the world of music and fashion, David Bowie left an indelible mark on the global cultural landscape. As a singer, songwriter, and actor, Bowie's career spanned over five decades, during which he continually reinvented himself and his sound. From the glam rock Ziggy Stardust era to the experimental sounds of Berlin and beyond, Bowie's artistic evolution showcased his boundless creativity and fearless exploration of new musical territories.",
      image: 'assets/img/honorable_mentions/david_bowie.webp',
      link: 'https://en.wikipedia.org/wiki/David_Bowie',
      spotifyLink: 'https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy',
      appleMusicLink: 'https://music.apple.com/us/artist/david-bowie/551695',
      monumental_album:
        'The Rise and Fall of Ziggy Stardust and the Spiders from Mars (1972)',
      album_description:
        "Bowie's 5th studio album is a landmark in the history of Rock music. It introduced the world to Ziggy Stardust, Bowie's fictional androgynous alter ego. The concept album tells the story of Ziggy, a Rock star from space, and addresses themes of fame, love, and the apocalypse. With iconic tracks like 'Starman' and 'Suffragette City', the album's blend of glam Rock, Soul, and avant-garde elements captivated audiences and solidified Bowie's status as a musical innovator. The cultural impact of Ziggy Stardust endures, making it one of the most influential albums in the Rock genre.",
      album_image:
        'assets/img/covers/the_rise_and_fall_of_ziggy_stardust_and_the_spiders_from_mars.webp',
    },
    {
      index: 4,
      name: 'The Notorious B.I.G.',
      title: 'Hip-Hop Icon (90s)',
      description:
        "The Notorious B.I.G., also known as Biggie Smalls, was a towering figure in Hip-Hop during the 90s. His distinctive flow, vivid storytelling, and larger-than-life persona made him a legend in the genre. Biggie's impact on Hip-Hop culture is immeasurable, and his influence continues to resonate with artists and fans worldwide.",
      image: 'assets/img/honorable_mentions/notorious_big.webp',
      link: 'https://en.wikipedia.org/wiki/The_Notorious_B.I.G.',
      spotifyLink: 'https://open.spotify.com/artist/5me0Irg2ANcsgc93uaYrpb',
      appleMusicLink:
        'https://music.apple.com/us/artist/the-notorious-b-i-g/5499810',
      monumental_album: 'Ready to Die (1994)',
      album_description:
        "The album showcased Biggie's lyrical prowess and storytelling abilities. Tracks like 'Juicy' and 'Big Poppa' became anthems of the East Coast Hip-Hop scene. 'Ready to Die' not only solidified Biggie's status as a Hip-Hop icon but also left an enduring impact on the genre, influencing future generations of artists.",
      album_image: 'assets/img/covers/ready_to_die.webp',
    },
    {
      index: 5,
      name: 'Alicia Keys',
      title: 'Soulful Songstress (2000s)',
      description:
        "Alicia Keys has left an indelible mark on the music industry with her powerful vocals and emotive songwriting. Known for hits like 'Fallin'' and 'No One', Keys has garnered multiple Grammy Awards and critical acclaim throughout her career. Her ability to blend R&B, Soul, and classical influences showcases her versatility and enduring appeal.",
      image: 'assets/img/honorable_mentions/alicia_keys.webp',
      link: 'https://en.wikipedia.org/wiki/Alicia_Keys',
      spotifyLink: 'https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa',
      appleMusicLink: 'https://music.apple.com/us/artist/alicia-keys/316069',
      monumental_album: 'Songs in A Minor (2001)',
      album_description:
        "Alicia's debut album not only established her as a prodigious talent but also earned her five Grammy Awards, including Best New Artist and Song of the Year for 'Fallin''. 'Songs in A Minor' showcases Keys' piano skills, soulful voice, and thoughtful lyrics, making it a timeless classic that laid the foundation for her illustrious career.",
      album_image: 'assets/img/covers/songs_in_a_minor.webp',
    },
    {
      index: 6,
      name: 'Shakira',
      title: 'Queen of Latin Music (2000s)',
      description:
        "Shakira is a Colombian singer, songwriter, and dancer who has captivated global audiences with her infectious blend of pop and Latin rhythms. Renowned for chart-toppers like 'Hips Don't Lie' and 'Waka Waka', Shakira's dynamic performances and distinctive voice have solidified her as a cross-genre sensation.",
      image: 'assets/img/honorable_mentions/shakira.webp',
      link: 'https://en.wikipedia.org/wiki/Shakira',
      spotifyLink: 'https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp',
      appleMusicLink: 'https://music.apple.com/us/artist/shakira/889327',
      monumental_album: 'Laundry Service (2001)',
      album_description:
        "The album marked a pivotal moment in her career. The album, featuring hits like 'Whenever, Wherever' and 'Underneath Your Clothes', showcased Shakira's evolution as an artist. Known for its eclectic mix of Rock, Pop, and Latin influences, the album earned critical acclaim, multiple awards, and heightened international recognition, establishing Shakira as a force to be reckoned with in the music industry.",
      album_image: 'assets/img/covers/laundry_service.webp',
    },
    {
      index: 7,
      name: 'Lil Wayne',
      title: 'Rap Icon (2000s)',
      description:
        "Lil Wayne, Weezy F, has left an indelible mark on the Hip-Hop landscape with his distinctive style and lyrical prowess. Born Dwayne Michael Carter Jr., Lil Wayne began his career at a young age and quickly rose to prominence. With hits like 'Lollipop' and 'A Milli', he became known for his clever wordplay and unique flow, solidifying his status as one of the genre's most influential figures.",
      image: 'assets/img/honorable_mentions/lil_wayne.webp',
      link: 'https://en.wikipedia.org/wiki/Lil_Wayne',
      spotifyLink: 'https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865',
      appleMusicLink: 'https://music.apple.com/us/artist/lil-wayne/5869117',
      monumental_album: 'Tha Carter III (2008)',
      album_description:
        "Weezy 6th album is a landmark in his career. The album, featuring chart-topping singles like 'Lollipop' and 'A Milli', showcased Lil Wayne's versatility and innovation within the Hip-Hop game. With its diverse range of tracks, memorable collaborations, and Wayne's unparalleled lyricism, 'Tha Carter III' earned critical acclaim, numerous awards, including Grammy Awards, and became a commercial success. This album not only defined Lil Wayne's legacy in Hip-Hop but also contributed to shaping the genre's landscape during that era.",
      album_image: 'assets/img/covers/the_carter_iii.webp',
    },
    {
      index: 8,
      name: 'Ed Sheeran',
      title: 'Modern Pop Star (2010s)',
      description:
        "Ed Sheeran has captured the hearts of audiences worldwide with his soulful voice and heartfelt songwriting. He rose to fame with his acoustic Pop and Folk-influenced sound. Hits like 'Shape of You' and 'Thinking Out Loud' have solidified his position as one of the leading figures in contemporary Pop music.",
      image: 'assets/img/honorable_mentions/ed_sheeran.webp',
      link: 'https://en.wikipedia.org/wiki/Ed_Sheeran',
      spotifyLink: 'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V',
      appleMusicLink: 'https://music.apple.com/us/artist/ed-sheeran/183313439',
      monumental_album: '÷ (Divide) (2017)',
      album_description:
        "The album is a testament to his songwriting prowess and musical versatility. Featuring a mix of acoustic Pop, R&B, and Folk influences, the album includes chart-topping singles like 'Shape of You' and 'Perfect' '÷ (Divide)' received widespread acclaim for its emotional depth, catchy melodies, and Sheeran's ability to connect with listeners on a personal level. The album's success catapulted Ed Sheeran into global stardom, earning him numerous awards and accolades, including Grammy Awards, and establishing him as a prominent figure in the contemporary music scene",
      album_image: 'assets/img/covers/divide.webp',
    },
    {
      index: 9,
      name: 'Chris Brown',
      title: 'R&B King (2010s)',
      description:
        "Chris Brown has left an indelible mark on the music industry with his exceptional singing, dancing, and songwriting abilities. He gained widespread recognition early in his career with hits like 'Run It!' and 'Yo'. Chris Brown's versatility extends across genres, showcasing his talents in R&B, Pop, and Hip-Hop.",
      image: 'assets/img/honorable_mentions/chris_brown.webp',
      link: 'https://en.wikipedia.org/wiki/Chris_Brown',
      spotifyLink: 'https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z',
      appleMusicLink: 'https://music.apple.com/us/artist/chris-brown/95705522',
      monumental_album: 'Exclusive (2007)',
      album_description:
        "Chris' sophomore album played a pivotal role in establishing him as a force to be reckoned with in the music industry. The album features hit singles like 'Kiss Kiss' and 'With You', showcasing Brown's vocal range and his ability to seamlessly blend R&B and Pop elements. 'Exclusive' received critical acclaim for its catchy tunes and marked a significant chapter in Chris Brown's career, solidifying his status as an influential figure in contemporary R&B and Pop music.",
      album_image: 'assets/img/covers/exclusive.webp',
    },
    {
      index: 10,
      name: 'Selena Gomez',
      title: 'Pop Star (2010s)',
      description:
        "Selena Gomez has undergone a remarkable transition from her Disney days to becoming a chart-topping solo artist. She rose to fame as the lead singer of Selena Gomez & the Scene before pursuing a solo career. Known for her sultry vocals and charismatic stage presence, Gomez has captivated audiences with hits like 'Good for You', 'Lose You to Love Me', and 'Come & Get It'.",
      image: 'assets/img/honorable_mentions/selena_gomez.webp',
      link: 'https://en.wikipedia.org/wiki/Selena_Gomez',
      spotifyLink: 'https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx',
      appleMusicLink:
        'https://music.apple.com/us/artist/selena-gomez/280215834',
      monumental_album: 'Revival (2015)',
      album_description:
        "The album marked a pivotal moment in her career as a solo artist. Departing from her previous Pop-Rock sound with Selena Gomez & the Scene, 'Revival' showcased a more mature and sophisticated Pop sound. The album explores themes of self-empowerment, love, and personal growth, reflecting Gomez's own experiences. The singles 'Good For You', 'Hands To Myself', and 'Same Old Love' found Gomez as the Pop star she aimed to be.",
      album_image: 'assets/img/covers/revival.webp',
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

  private legals: any = {
    'terms-of-use': {
      title: 'Terms of Use',
      subtitle: 'Last updated: ' + this.currentDate,
      content: `Welcome to 'Pop Royals' Website, referred to as the 'Website.'<br>By accessing or using this Website, you are indicating your agreement to comply with and be bound by the following terms and conditions, known as the 'Terms of Use.' We kindly request that you carefully review these Terms of Use before utilizing the Website.<br><br>1. Acceptance of Terms:<br>By accessing or using the Website, you are acknowledging that you have read, comprehended, and consented to abide by these Terms of Use. If you do not concur with these Terms of Use, please refrain from using the Website.<br><br>2. Intellectual Property:<br>All content available on this Website, including text, images, graphics, videos, and logos, is the exclusive property of Bar Golod and is protected by copyright, trademark, and other intellectual property laws. Any reproduction, modification, distribution, or utilization of the Website's content requires the explicit written permission of Bar Golod.<br><br>3. Use of the Website:<br>You are obligated to use the Website solely for lawful purposes and in a manner that does not contravene any applicable laws or regulations. Prohibited activities include:<br>- Engaging in any illegal or harmful actions while using the Website.<br>- Attempting to gain unauthorized access to any part of the Website or its related systems.<br>- Transmitting content that is harmful, offensive, or infringes upon the rights of others.<br><br>4. Disclaimer:<br>The content provided on this Website is intended solely for informational purposes. Bar Golod disclaims any representations or warranties, whether express or implied, regarding the accuracy, completeness, or suitability of the content. Your use of the Website is entirely at your own risk.<br><br>5. Links to Third-Party Websites:<br>The Website may include links to third-party websites for your convenience. Please be aware that Bar Golod neither endorses nor exercises control over the content or privacy practices of these third-party websites. We bear no responsibility for the content or privacy policies of these external sites.<br><br>6. Changes to Terms:<br>Bar Golod retains the right to amend these Terms of Use at any time. Such modifications will become effective immediately upon posting on the Website. Your continued use of the Website after any alterations constitutes your acceptance of the updated Terms of Use.<br><br>7. Termination:<br>Bar Golod maintains the right to terminate or suspend your access to the Website at any time and without prior notice, for any reason, including if you violate these Terms of Use.<br><br>8. Contact Information:<br>Should you have any inquiries or concerns regarding these Terms of Use, please do not hesitate to contact us at bargolod@gmail.com.<br><br>9. Governing Law:<br>These Terms of Use are governed by and construed in accordance with the laws of Israel, without consideration of its conflict of law principles. By using this Website, you consent to the exclusive jurisdiction of the courts located within Israel for the resolution of any disputes arising from or related to these Terms of Use.`,
    },

    'privacy-policy': {
      title: 'Privacy Policy',
      subtitle: 'Last updated: ' + this.currentDate,
      content: `Welcome to 'Pop Royals' Website, known as the 'Website.' Our Privacy Policy provides insights into how Bar Golod acquires, utilizes, and safeguards your personal data during your use of the Website.<br><br>Data Collection:<br>We gather personal information voluntarily submitted by you, such as through contact forms or newsletter subscriptions. This may encompass details like your name, email address, and additional information of your choice.<br><br>Utilization of Your Data:<br>Your personal data serves various purposes, including responding to inquiries, delivering updates or newsletters, and enhancing the Website's content and functionality.<br><br>Cookies and Tracking Technologies:<br>We employ cookies and akin tracking technologies to capture insights into your browsing activities on our Website. You can tailor your browser settings to decline cookies or receive notifications about their transmission.<br><br>Links to Third-Party Websites:<br>Our Website features links to third-party websites. We don't govern the privacy practices of these external sites and bear no responsibility for their content or privacy policies. We advocate reviewing the privacy policies of these third-party websites.<br><br>Security Measures:<br>We undertake reasonable precautions to shield your personal data from unauthorized access or disclosure. Nonetheless, it's essential to recognize that no online data transmission or storage is entirely foolproof, and we cannot ensure absolute security.<br><br>Privacy Policy Updates:<br>Periodically, we may revise this Privacy Policy. Any alterations will be posted on this page, with the latest revision date indicated at the top.<br><br>Contact Information:<br>For inquiries or concerns regarding this Privacy Policy or the handling of your personal data, please reach out to us at bargolod@gmail.com.<br><br>By utilizing this Website, you express your consent to abide by the terms of this Privacy Policy.`,
    },

    accessibility: {
      title: 'Accessibility',
      subtitle: 'Last updated: ' + this.currentDate,
      content: `At 'Pop Royals' Website, we are dedicated to ensuring accessibility for all users, including those with disabilities, fostering inclusivity through user-friendly design, accessibility features, feedback channels, ongoing improvements, and recommendations for modern web browsers and assistive technologies. Reach us at bargolod@gmail.com for assistance or concerns, affirming your support for our commitment to an inclusive online environment.`,
    },
  };

  constructor(private datePipe: DatePipe, private dialog: MatDialog) {}

  public getDescription() {
    return this.description;
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
      case 'Honorable Mentions':
        return this.honorableMentions;
      default:
        return [];
    }
  }

  public getLegal(key: string) {
    return key ? this.legals[key] : null;
  }

  public showDialogFunction(notification: string, message: string) {
    const data = {
      title: 'Notification',
      subtitle: '',
      content: notification + message,
    };

    this.dialog.open(DialogComponent, {
      width: '80%',
      data: data,
    });
  }
}
