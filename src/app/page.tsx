import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Camera,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const whatsapp =
  "https://wa.me/5516991115518?text=Olá%2C%20Elis.%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20entender%20qual%20atendimento%20é%20mais%20indicado%20para%20mim.";

const therapies = [
  {
    number: "01",
    name: "Radiestesia",
    text: "Uma leitura do campo energético para identificar desequilíbrios e orientar um processo de harmonização individual.",
  },
  {
    number: "02",
    name: "Reiki",
    text: "Uma prática de imposição de mãos voltada ao relaxamento, à presença e ao equilíbrio do fluxo de energia.",
  },
  {
    number: "03",
    name: "Barras de Access",
    text: "Toques suaves em pontos específicos da cabeça que favorecem relaxamento e abertura para novas possibilidades.",
  },
  {
    number: "04",
    name: "Cone Hindu",
    text: "Prática integrativa tradicional utilizada como apoio ao relaxamento e à sensação de bem-estar.",
  },
  {
    number: "05",
    name: "MTVSS",
    text: "Técnica corporal de Access Consciousness aplicada de forma individual, conforme as necessidades do momento.",
  },
];

const steps = [
  ["Conversa inicial", "Você conta o que está vivendo e o que deseja cuidar agora."],
  ["Escolha da abordagem", "Elis orienta a prática mais coerente com o seu momento."],
  ["Sessão individual", "O atendimento acontece com presença, respeito e escuta atenta."],
];

function WhatsAppIcon() {
  return <MessageCircle aria-hidden="true" size={19} strokeWidth={1.8} />;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark"><Leaf size={18} /></span>
          <span>
            <strong>Elis Regina Borges</strong>
            <small>Terapia Holística</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#terapias">Terapias</a>
          <a href="#sobre">Sobre</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">
          Agendar conversa <ArrowRight size={16} />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><Menu /><span>Menu</span></summary>
          <nav>
            <a href="#terapias">Terapias</a>
            <a href="#sobre">Sobre</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#localizacao">Localização</a>
            <a href={whatsapp}>Agendar pelo WhatsApp</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="location-line"><Sparkles size={15} /> Terapia holística em Franca/SP</p>
            <h1>Equilibre sua energia. Retome seu centro.</h1>
            <p className="hero-lead">
              Um cuidado que acolhe corpo, mente, emoções e campo energético.
              Encontre a terapia ideal para viver com mais leveza, presença e harmonia.
            </p>
            <div className="hero-actions">
              <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Conversar com Elis
              </a>
              <a className="text-link" href="#terapias">
                Descobrir as terapias <ArrowDown size={17} />
              </a>
            </div>
            <ul className="trust-list" aria-label="Informações de atendimento">
              <li><Check /> Cuidado energético individual</li>
              <li><Check /> Presencial e online</li>
              <li><Check /> Orientação antes da sessão</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="energy-art" aria-label="Representação de equilíbrio energético">
              <span className="energy-ring energy-ring-one" />
              <span className="energy-ring energy-ring-two" />
              <span className="energy-ring energy-ring-three" />
              <div className="lotus-mark">
                <Leaf />
                <Leaf />
                <Leaf />
              </div>
              <p>equilíbrio</p>
              <small>corpo · mente · energia</small>
            </div>
            <div className="portrait-note">
              <Sparkles size={18} />
              <span><strong>Corpo, mente e energia</strong> cuidados como um todo</span>
            </div>
          </div>
          <a className="scroll-cue" href="#terapias" aria-label="Continuar para as terapias">
            <span>Descubra</span><ArrowDown size={16} />
          </a>
        </section>

        <section className="therapy-section" id="terapias">
          <div className="section-intro">
            <p className="overline">Terapias holísticas</p>
            <h2>Caminhos para harmonizar o seu ser.</h2>
            <p>
              Cada técnica atua de uma forma, mas todas partem do mesmo princípio:
              olhar para você por inteiro e respeitar o seu momento.
            </p>
          </div>
          <div className="therapy-list">
            {therapies.map((therapy) => (
              <article className="therapy-row" key={therapy.name}>
                <span>{therapy.number}</span>
                <Sparkles className="therapy-symbol" aria-hidden="true" />
                <h3>{therapy.name}</h3>
                <p>{therapy.text}</p>
                <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Perguntar sobre ${therapy.name}`}>
                  <ChevronRight />
                </a>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <p>Não sabe qual terapia sua energia está pedindo agora?</p>
            <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">
              Receber uma orientação <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="about-photo">
            <div className="about-symbol" aria-hidden="true">
              <span className="moon" />
              <Sparkles />
              <Leaf />
            </div>
            <p>Elis Regina Borges<br /><span>Terapeuta Holística</span></p>
          </div>
          <div className="about-copy">
            <p className="overline">A terapeuta</p>
            <h2>Um encontro entre sensibilidade, energia e propósito.</h2>
            <p className="about-lead">
              Elis acredita que o equilíbrio começa quando corpo, emoções, mente e
              energia voltam a conversar em harmonia.
            </p>
            <p>
              Em cada sessão, ela une práticas holísticas e escuta acolhedora para
              compreender o que está por trás do cansaço, da sobrecarga e da sensação
              de desconexão. O atendimento é individual, intuitivo e conduzido com
              profundo respeito à sua história.
            </p>
            <blockquote>
              “Quando a energia encontra equilíbrio, a vida volta a fluir com mais leveza.”
            </blockquote>
            <a className="text-link text-link-dark" href={whatsapp} target="_blank" rel="noreferrer">
              Falar diretamente com Elis <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="process-section" id="como-funciona">
          <div className="process-heading">
            <p className="overline">Sua jornada</p>
            <h2>Como começa o seu cuidado</h2>
          </div>
          <div className="steps">
            {steps.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
            Dar o primeiro passo <ArrowRight size={17} />
          </a>
        </section>

        <section className="decision-section">
          <div>
            <Leaf size={29} />
            <p>Seu corpo sente. Sua energia comunica.</p>
            <h2>Talvez seja hora de se ouvir por inteiro.</h2>
          </div>
          <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> Quero conversar
          </a>
        </section>
      </main>

      <footer id="localizacao">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark brand-mark-light"><Leaf size={20} /></span>
            <h2>Elis Regina Borges</h2>
            <p>Terapia holística em Franca/SP para cuidar de corpo, mente, emoções e energia.</p>
            <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp <ArrowRight size={17} />
            </a>
          </div>
          <div className="footer-links">
            <div>
              <h3>Navegação</h3>
              <a href="#terapias">Terapias</a>
              <a href="#sobre">Sobre Elis</a>
              <a href="#como-funciona">Como funciona</a>
            </div>
            <div>
              <h3>Contato</h3>
              <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> (16) 99111-5518</a>
              <a href="mailto:elisreginaoliveira.terapeuta@gmail.com"><Mail size={16} /> Enviar e-mail</a>
              <a href="https://www.instagram.com/elisreginaoliveira.terapeuta/" target="_blank" rel="noreferrer"><Camera size={16} /> Instagram</a>
              <p><MapPin size={16} /> Jardim Lima, Franca/SP</p>
            </div>
          </div>
        </div>
        <div className="map-wrap">
          <iframe
            title="Localização do atendimento em Franca, São Paulo"
            src="https://www.google.com/maps?q=-20.5369792,-47.411132&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="footer-bottom">
          <p>© 2026 Elis Regina Borges. Todos os direitos reservados.</p>
          <p>Práticas integrativas complementam, mas não substituem acompanhamento médico ou psicológico.</p>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
        <WhatsAppIcon />
        <span>Agendar</span>
      </a>
    </>
  );
}
