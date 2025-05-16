import React, { useEffect, useState } from 'react';
import './Home.css';

import Team from '../../components/Team/Team'
import Statistics from '../../components/Statistics/Statistics';
import WhyAttend from '../../components/WhyAttend/WhyAttend';
import Schedule from '../../components/Schedule/Schedule';
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton';
import Welcome from '../../components/Welcome/Welcome';
import EventInfo from '../../components/EventInfo/EventInfo';
import EventTheme from '../../components/EventTheme/EventTheme';
import SpeakerModal from '../../components/SpeakerModal/SpeakerModal';

const speakerss = [
  {
    id: 1,
    name: 'Emmanuella Zandi  ',
    title: 'Directrice Générale (FONAREV)',
    image: '/images/speakers/emmanuella-zandi.jpeg',
    slogan: "",
    bio: "Directrice Générale Adjointe du Fonds National de Réparation des Victimes des Violences Sexuelles liées aux Conflits et des Victimes des Crimes contre la paix et la sécurité de l'humanité (FONAREV)*  Emmanuella Zandi naît à Goma, dans le Nord-Kivu en République Démocratique du Congo, une région en proie aux conflits armés. À sept ans, elle subit des violences sexuelles extrêmes commises par des militaires, un traumatisme qui marque durablement son enfance.  Dès treize ans, elle s'engage dans les médias en animant une émission radio sur les droits des enfants. Cette expérience précoce forge sa détermination à dénoncer les violences faites aux jeunes filles.  Elle fonde l'ONG Ma Voisine, un mouvement d'émancipation féminine qui accompagne plus de 5 000 victimes de violences sexuelles à travers la RDC. Parallèlement, elle lance GenderRise with Zandi, un programme qui promeut l'épanouissement complet des jeunes filles.  Son engagement lui vaut plusieurs reconnaissances :  Elle est nommée Ambassadrice de la Paix par l'ONU en RDC ; Elle reçoit le titre d'Activiste Nationale de la Jeunesse pour l'Égalité des Genres ;  Elle est honorée du titre de Doctor Honoris Causa et par le CPVT (Tunisie) et l'IARPA (Septembre 2024).  En 2021, elle intègre une commission présidentielle pour la création du FONAREV. Deux ans plus tard, en 2023, elle en devient la Directrice Générale Adjointe, œuvrant quotidiennement pour la réparation des victimes.  Le parcours d'Emmanuella Zandi incarne la force de transformation personnelle. Victime devenue défenseure des droits humains, elle démontre qu'un destin brisé peut se muer en une puissante force de changement. Son histoire personnelle se confond désormais avec celle de milliers de femmes qu'elle aide à se reconstruire.  Aujourd'hui, à travers ses fonctions et ses engagements, elle continue d'écrire une page importante de l'histoire des droits des femmes en Afrique.",
  },
 

  {
    id: 2,
    name: 'Alain Kahasha Ntumwa',
    title: 'Ingénieur Civil Electricien ',
    image: '/images/speakers/alain-kahasha.jpeg',
    slogan: "",
    bio: "Alain Kahasha  Ntuwa  est ingénieur Civil Electricien et détenteur d’une Maitrise en Télécommunications de la Faculté Polytechnique de Mons. À ce jour il cumule plus de 25 ans d’expériences professionnelles diverses et variées tant au niveau national qu’international notamment comme Administrateur Indépendant à la Banque Centrale du Congo depuis 2021.Directeur Général au Niger, en RDC, au Gabon et au Congo Brazzaville de 2010 à 2023 pour Airtel (Ex Celtel/Zain).Directeur de plusieurs régions et départements pour Vodacom en RDC où il lance le réseau dans plusieurs zones du pays en 2003.Responsable Commercial en RDC pour The Coca-Cola Company. Ingénieur de Production et Ingénieur Technicien pour British American Tobacco RDC (BAT) En 2023, Alain Kahasha  NTUMWA a participé à la création du Think Tank MANSSAH avec d’autres panafricains."
  },

  {
    id: 3,
    name: 'Mme  Gisele Lutundula ',
    title: 'Directrice Générale Adjointe Chez First Bank SA',
    image: '/images/speakers/lutundula.jpg',
    bio: "Avec plus de 16 ans d’expérience dans le secteur bancaire en République Démocratique du Congo dans la gestion de la trésorerie, le commercial, l’analyse économique des marchés (devises, obligations et monnaie), la gestion du segment banque grande entreprise, les opérations bancaires internationales (financement du commerce) et nationales, le service à la clientèle, Mme Gisèle Lutundula Putshu a une expérience variée dans le secteur bancaire.Mme Lutundula est titulaire d’une licence en économie de l’Université Catholique du Congo et d’un Master of Business Administration (MBA) de la Frankfurt School of Finance and Management. Elle a également suivi des programmes spécialisés tels qu’ International cash & Treasury management à EuroFinance Londres, Market risk Management Program de FDLH, Trade Finances, Treasury ALM & FX risk Management pour n’en citer que quelques-uns. Mme Lutundula Putshu Gisèle est heureuse en ménage et mère de 4 beaux enfants..",
  },
  {
    id: 4,
    name: ' Yvonne Chika NABINTU  ',
    title: 'Avocate et cheffe d’entreprise et administratrice de société.  ',
    image: '/images/speakers/yvonne-chika.jpeg',
    bio: "Yvonne Chika NABINTU  est avocate inscrite au barreau de Matadi, cheffe d’entreprise et administratrice de société. Titulaire d’un MBA de la Frankfurt School of Finance and Management et d’une licence en droit public international de l’Université de Kinshasa, elle cumule une solide expertise en leadership, ressources humaines et gouvernance. Fondatrice et dirigeante de Hodari Manpower and Services depuis 2019, elle a acquis une solide expérience en tant que Directrice des Ressources Humaines et du Juridique, notamment chez Total RDC (où elle était également membre du comité de direction) et chez Orange.",
  },


  {
    id: 5,
    name: 'Blanchine Mazanga',
    title: 'Specialiste en gestion RH',
    image: '/images/speakers/blanchine-mazanga.jpeg',
    bio: "Détentrice d'un MBA( Beulah Heights University, 2018), Femme multi casquettes avec plus de 23 ans d'expérience professionnelle dans le domaine de la gestion opérationnelle avec une spécialisation en gestion RH.14 ans d'expérience entrepreneuriale avec sa structure Source Creative Training ( Source creative en abrégé) au travers de laquelle elle offre des services de renforcement de capacités aux particuliers et aux organisations en tant que formatrice, coach, mentor, conférencière-motivatrice Bergère principale du ministère chrétien international Camp des précieuses (CDP) et Servante de Dieu au sein du corps de ChristLeader et activiste en société.",
  },

  {
    id: 6,
    name: 'Marc Tshibasu',
    title: "Leader congolais reconnus dans L'innovation numerique et developpement des talents",
    image: '/images/speakers/IMG-20250218-WA0022.jpg',
    bio: "Marc TSHIBASU est un leader congolais reconnu dans l’innovation numérique et le développement des talents. Actuellement à la tête de l’Orange Digital Center en RDC, il pilote  un hub d’innovation qui offre gratuitement des formations et un accompagnement auxstart ups afin de stimuler l’entrepreneuriat technologique dans tout le pays.Fort d'une expérience de plus de 15 ans dans les secteurs des télécommunications et des biensde consommation, il a occupé des postes clés chez Nestlé, British American Tobacco etOrange RDC, où il a dirigé des initiatives majeures en matière de formation, de gestion destalents et de transformation digitale.Alumni du programme YALI (Young African Leaders Initiative) depuis 2010, Marc est unacteur engagé dans la structuration de l'écosystème tech congolais. Il œuvre pour l'émergencede startups locales dans des secteurs stratégiques tels que l'agritech, la santé, la fintech etl'environnement, en favorisant l'inclusion des femmes et des jeunes dans l'économienumériqueSes plus grands succès ont été le déploiement en 2018 en RDC en tant que premier paysafricain de la plate-forme d’apprentissage en ligne du groupe Orange Learning et de l’OrangeHR Global ERP MyJOB."
  },
  {
    id: 7,
    name: 'Patrick Olondo wa SHILO',
    title: 'réalisateur, auteur, directeur de la photographie et coloriste',
    image: '/images/speakers/powshilo.jpg',
    bio: "Le parcours de Patrick Olondo wa SHILO, réalisateur, auteur, directeur de la photographie et coloriste, est marqué par une solide formation à l'Académie des Beaux-Arts de Kinshasa et à la SAE de Cape Town (animation 3D). Dès 2007, il s'illustre dans la réalisation de publicités, clips et courts-métrages. Son implication dans la seconde unité de la série Amazon Prime Video « The Widow » (en RDC, 2018) témoigne de son envergure. La reconnaissance internationale s'ensuit en 2020 et 2021 avec les multiples récompenses obtenues par « Lies of eyes », un court-métrage produit et réalisé par lui dans des festivals prestigieux (European Cinematography Awards, New York Cinematography Awards (NYCA), Asia Cinematography Awards, RapidLion, The South African Intenational Fim Festival, Ananse Cinema inetrnational Film Festival, Silicon Valley Africa (SVAFF), Festival International de Cinéma de Kinshasa (FICKIN 2021). Son expertise s'étend à divers genres et techniques audiovisuels. Coloriste utilisant Davinci Resolve, Patrick Olondo Wa SHILO étend son expériebce sur divers autres domaines, styles et techniques partant de la publicité, court-métrage, long-métrage, documentaire, clip musical, film d’entreprises et tant d’autres.",
  },
  {
    id: 8,
    name: 'Déborah Tshidibi Sabanga ',
    title: 'Juriste',
    image: '/images/speakers/deborah-sabanga.jpeg',
    slogan: "",
    bio: "Déborah Tshidibi SABANGA  est une jeune juriste congolaise originaire de Tshikapa. Diplômée en droit avec mention distinction de l’Université de Kinshasa (2024), elle se distingue par son excellence oratoire et ses performances en concours de plaidoirie. Finaliste du concours Tshibangu Kalala (2023), elle reçoit en 2024 le prix de la sixième meilleure plaidoirie au concours Charles Rousseau à Bruxelles, puis celui de meilleur orateur en finale du concours de procès simulé devant la CPI à La Haye. Ces distinctions lui valent une reconnaissance académique et institutionnelle notamment un satisfecit au département de droit international public et relations internationales ainsi qu’une médaille d’ambassadrice de la jeunesse estudiantine remise par le recteur de l’UNIKIN. "
  },
  {
    id: 9,
    name: 'Zoga Gomba Rigaud',
    title: 'Conférencier, motivateur et pasteur',
    image: '/images/speakers/rig.jpeg',
    slogan: "",
    bio: "Zaga Gomba Rigaud est un leader accompli et une figure inspirante. Titulaire de deux licences, l’une en sciences de l’information et de la communication et l’autre en relations publiques internationales, il a également obtenu un master 1 en communication pour le développement et un master 2 en communication institutionnelle et politique. Fort de plus de vingt ans d’expérience, il s’est distingué dans les domaines de la communication, de la gestion des conflits régionaux et internationaux, et plus récemment : dans la lutte contre la criminalité transnationale organisée.Porté par une profonde conscience citoyenne et un amour indéfectible pour le Congo, Rigaud croit fermement en un avenir radieux pour son pays où la jeunesse jouera un rôle central. Il consacre sa vie à inspirer les autres, les encourager à croire en Dieu, en eux-mêmes et en leur capacité à transformer leur potentiel en leviers de développement personnel et collectif. Pour lui, le progrès passe par une prise de conscience, de soi et par l’exploitation maximale des talents de chacun au service de la nation. "
  },
  


];

const Home = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  useEffect(() => {
    if (typeof window.bootstrap !== 'undefined') {
      const carousel = document.getElementById('header-carousel');
      new window.bootstrap.Carousel(carousel, {
        interval: 5000
      });
    }
  }, []);

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };
  const handleCloseModal = () => {
    setSelectedSpeaker(null);
  };

  return (
    <>
   
      <div className="home">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="hero-slide hero-slide-home">
                <div className="carousel-content">
                  <div className="text-content">
                    <div className="text-white text-uppercase mb-3 animated slideInDown">  
                    <img src="/images/tedx2.png" alt="logo-tedx-socimat" className="logo-tedx"/></div>
                    <h1 className="text-white mb-4 animated slideInDown fontSize">Des idées prêtes à<br />révolutionner le monde.</h1>
                    <a href="/" className="btn btn-primary animated slideInDown">
                      LIRE PLUS
                    </a>
                  </div>
                  <div className="image-content">
                    <img src="/images/tedx1.png" alt="TEDx Logo" className="tedx-logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="hero-slide hero-slide-home">
                <div className="carousel-content">
                  <div className="text-content">
                  <div className="text-white text-uppercase mb-3 animated slideInDown">  
                    <img src="/images/tedx2.png" alt="logo-tedx-socimat" className="logo-tedx"/></div>
                    
                    <h1 className="text-white mb-4 animated slideInDown">Dans un esprit d'idées<br />dignes d'être partagées.</h1>
                    <a href="/" className="btn btn-primary animated slideInDown">
                      LIRE PLUS
                    </a>
                  </div>
                  <div className="image-content">
                    <img src="/images/tedx-removebg.png" alt="TEDx Event" className="tedx-logo" />
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> 
      <Welcome />
      <EventInfo />
      <EventTheme />
      <section className="speakers-section">
        <div className="speakers-container">
          <h2 className="section-title">Nos Intervenants</h2>
          <div className="speakers-grid">
            {speakerss.map(speakers => (
              <div key={speakers.id} className="speaker-card" onClick={() => handleSpeakerClick(speakers)} style={{ cursor: 'pointer' }}>
                <div className="speaker-image" 
                >
                  <img src={speakers.image} alt={speakers.name}    
                  style={
                    ( speakers.id === 4 ||  speakers.id === 8)
                      ? {
              
                          width: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center center',
                          transform: 'translateY(-20px)', // remonte visuellement la tête
                    
                        }
                      : {
                        }
                  } />
                </div>
                <div className="speaker-info">
                  <h3>{speakers.name}</h3>
                  <h4>{speakers.title}</h4>
                  <p>{speakers.slogan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SpeakerModal speaker={selectedSpeaker} onClose={handleCloseModal} />
      </section>
   
      <WhyAttend />
      <Schedule />
      <Statistics />
      <Team />
   
    </>
  );
};

export default Home;
