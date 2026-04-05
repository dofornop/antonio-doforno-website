import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flag-stripe" />
      <div className="footer__inner container">
        <div className="footer__name">António Joaquim Pereira Alves do Forno</div>
        <div className="footer__dates">March 29, 1935 – October 12, 2025</div>
        <div className="footer__place">Adoufe, Portugal → Chatham, Ontario, Canada</div>
        <p className="footer__quote">
          "Um autêntico forno em chama ardente."
          <span>— A true furnace, always burning bright.</span>
        </p>
      </div>
    </footer>
  );
}
