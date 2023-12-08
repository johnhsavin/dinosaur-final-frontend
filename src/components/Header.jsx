import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  return (

    <header onClick={handleClick} className="header-with-background">
      <h1 className="header-text">The Dino Hunters</h1>
      <p className="header-paragraph">Roar into Adventure!
      </p>
    </header>
  );
}
