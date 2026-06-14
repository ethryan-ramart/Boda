import './EnvelopeIntro.css';

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export default function EnvelopeIntro({ onOpen }: EnvelopeIntroProps) {
  const handleClick = () => {
    const intro = document.querySelector('.envelope-intro');
    intro?.classList.add('opening');
    setTimeout(onOpen, 2000);
  };

  return (
    <div className="envelope-intro" onClick={handleClick}>
      {/* Imagen de fondo del Hero */}
      <div className="hero-background">
        <img src="/images/portada.jpg" alt="Invitación de Boda" />
      </div>

      {/* Capa de blur encima */}
      <div className="blur-overlay"></div>

      {/* Texto central A & L */}
      <div className="central-text" style={{
        filter: 'brightness(0) saturate(100%) invert(35%) sepia(28%) saturate(1089%) hue-rotate(359deg) brightness(80%) contrast(88%)'
      }}>
        <img src="/images/Logo.png" alt="Logo" />
      </div>

      {/* Texto de instrucción */}
      <p className="tap-instruction">Toca para abrir</p>
    </div>
  );
}
