import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <>
      <div className="bg-sky-300">Footer</div>
      { !location.pathname.includes('hazard') && <Link to="/hazard" className="button">Information</Link> }
      { location.pathname.includes('hazard') && <Link to="/" className="button">Weather</Link> }
    </>

  );
}

export default Footer;