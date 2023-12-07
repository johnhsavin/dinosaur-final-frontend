import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  return (

    <header onClick={handleClick}>
      <h1>The Dino Hunters</h1>
      <p>The Adventures of Rex, Rappy, and Rizzo
      </p>
    </header>
  );
}
