import './Story.css';

export default function Story() {
  return (
    <div className="story-page page-content">
      <div className="flag-stripe" />

      <div className="story-header">
        <div className="container">
          <div className="section-label">Biography</div>
          <h1 className="section-title">His Story</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            From the mountains of Trás-os-Montes to the fields of Southwestern Ontario — 
            a life of courage, service, and love.
          </p>
        </div>
      </div>

      <div className="story-body container">

        <article className="story-article">

          <div className="story-portrait">
            <img src={`${process.env.PUBLIC_URL}/images/img_01.jpg`} alt="António do Forno" />
            <div className="story-portrait__caption">
              António Joaquim Pereira Alves do Forno
              <span>Chatham, Ontario</span>
            </div>
          </div>

          <section className="story-section">
            <h2>Origins in Portugal</h2>
            <p>
              António Joaquim Pereira Alves do Forno was born on March 29, 1935, in the village 
              of Adoufe in the municipality of Vila Real, in the mountainous region of 
              Trás-os-Montes in northern Portugal. He was raised in a world shaped by hard 
              work, deep faith, and close community ties.
            </p>
            <p>
              As a young man, he pursued his education at the Seminary of Santa Clara in 
              Vila Real, before later completing further studies at St. Clair College in 
              Ontario. In 1952, he married Rosa Ramos da Costa in Santiago de Alhariz, 
              and together they began building a family that would grow to eight children: 
              Preciosa, Manuel, Dominic, Ernie, Prazeres, Clara, Luie, and Paul.
            </p>
            <p>
              From 1956 to 1958, António served in the Portuguese Army — a formative 
              experience that deepened his sense of duty and discipline. He then served 
              as Treasurer for the Grémio da Lavoura de Valpaços from 1960 to 1966, 
              gaining early experience in community leadership.
            </p>
          </section>

          <div className="story-pull-quote">
            <blockquote>
              "Um autêntico forno em chama ardente."
              <cite>— A true furnace, always burning bright. Written of António in the Portuguese Canadian press.</cite>
            </blockquote>
          </div>

          <div className="story-photo-inline">
            <img src={`${process.env.PUBLIC_URL}/images/img_17.jpg`} alt="António in the Portuguese Army, 1956–1958" />
            <div className="story-photo-inline__caption">António serving in the Portuguese Army, 1956–1958</div>
          </div>

          <section className="story-section">
            <h2>A New Life in Canada</h2>
            <p>
              In 1966, António made the courageous decision to emigrate to Canada — arriving 
              alone in Chatham, Ontario, leaving behind everything familiar in pursuit of a 
              better future for his family. The following year, Rosa and seven of their children 
              joined him, and together they set down roots in what would become their home 
              for the rest of their lives.
            </p>
            <p>
              The early years were defined by determination. António worked in construction 
              and as an operator at Motor Wheel, learning the rhythms of a new country 
              while never losing his connection to Portugal. He quickly became a point of 
              contact and support for other Portuguese immigrants arriving in Southwestern 
              Ontario — helping them navigate the challenges of life in a new land, and 
              often welcoming them into his own home.
            </p>
          </section>

          <section className="story-section">
            <h2>Building the Community</h2>
            <p>
              In 1971, António co-founded the Portuguese Canadian Social Club of Chatham, 
              serving as its first President. The club became a gathering place where the 
              Portuguese community could celebrate their culture, maintain their traditions, 
              and support one another. It remains active to this day.
            </p>
            <p>
              He also helped establish Portuguese language classes in Chatham, Leamington, 
              Wheatley, and surrounding communities — first funded by the Portuguese 
              government, and later by the Canadian government — ensuring that the children 
              of immigrants could learn their language, culture, and history.
            </p>
            <p>
              In 1975, he opened a Portuguese supermarket offering authentic foods and 
              ingredients, followed by the founding of Forno's Travel Agency in 1977. 
              The agency served the Portuguese community across Chatham, Leamington, 
              and Windsor for over 30 years, connecting families with their homeland 
              and serving as a trusted institution in the community.
            </p>
            <p>
              That same year, António was appointed as a Notary Public by the Ontario 
              government, a role he would hold for over 40 years. In this capacity, he 
              helped countless Portuguese Canadian families navigate the documentation 
              and legal needs of life in Canada — a quiet but profound form of service.
            </p>
          </section>

          <div className="story-photo-inline">
            <img src={`${process.env.PUBLIC_URL}/images/img_12.jpg`} alt="Forno's Travel Agency" />
            <div className="story-photo-inline__caption">Forno's Travel Agency — serving the Portuguese community for over 30 years</div>
          </div>

          <section className="story-section">
            <h2>A Voice for the Community</h2>
            <p>
              From approximately 1979 to 2003, António served as a member of the 
              Conselho das Comunidades Portuguesas, representing the Portuguese Canadian 
              community at provincial, federal, and Portuguese government levels. He 
              eventually served as President for Ontario and Manitoba — advocating for 
              the rights and interests of Portuguese Canadians across Southwestern Ontario.
            </p>
            <p>
              He traveled extensively as a volunteer in this role, attending meetings 
              and representing his community's voice at the highest levels of government. 
              His efforts helped expand and protect Portuguese Canadian rights in Canada, 
              and his leadership left a lasting impression on those who worked alongside him.
            </p>
            <p>
              In 1998, his decades of service were recognized with one of the highest 
              honours available to a member of the Portuguese Canadian community — he 
              was named Honorary Consul of Portugal.
            </p>
          </section>

          <section className="story-section">
            <h2>Faith, Family & Later Years</h2>
            <p>
              António's faith was central to his life. He volunteered with the Knights 
              of Columbus for over 40 years, attaining the rank of Fourth Degree Knight 
              in 2003 — the organization's highest honour. He was also instrumental in 
              establishing the Nossa Senhora da Fátima Festa in Chatham in 1979, 
              personally arranging for the Our Lady of Fátima statue to be made in 
              Portugal, blessed at the Shrine of Fátima, and brought to Canada. The 
              festival has continued for over 40 years.
            </p>
            <p>
              In 1989, António's beloved wife Rosa passed away after 37 years of 
              marriage. She had been a cornerstone of the family, and her loss was 
              deeply felt. In 1993, António married Maria Amaral, welcoming her 
              children Rick and Carmen into the family. In 2023, he and Maria 
              celebrated 30 years of marriage — a milestone of love and endurance.
            </p>
            <p>
              António retired from the travel agency in 2009, though he continued 
              his work as Notary Public until 2018. In 2023, he received a Certificate 
              of Exemplary Service to Canada in honour of the Coronation of King 
              Charles III, recognizing his extraordinary lifetime of community contribution.
            </p>
          </section>

          <div className="story-photo-inline">
            <img src={`${process.env.PUBLIC_URL}/images/img_08.jpg`} alt="Medalha de Mérito das Comunidades Portuguesas" />
            <div className="story-photo-inline__caption">Receiving the Medalha de Mérito das Comunidades Portuguesas</div>
          </div>

          <section className="story-section">
            <h2>A Legacy That Endures</h2>
            <p>
              António Joaquim Pereira Alves do Forno passed away on October 12, 2025. 
              He is survived by his wife Maria, his eight children, and a large and 
              loving extended family. He is also survived by the Portuguese Canadian 
              Social Club he founded, the language classes he helped establish, the 
              hundreds of families he helped with documentation and travel, and the 
              countless individuals he welcomed into his home and his heart.
            </p>
            <p>
              In the Portuguese Canadian press, a writer once said of him: 
              <em>"Um autêntico forno em chama ardente"</em> — a true furnace, always 
              burning bright. That flame touched generations, and it does not go out.
            </p>
          </section>

        </article>
      </div>
    </div>
  );
}
