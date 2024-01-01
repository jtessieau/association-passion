import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="landing">
        <Navbar></Navbar>
        <div className="landing-content">
          <div className="landing-title">
            Association PASSION
          </div>
          <p>
            Projet Assiociatif de Soutien et de Solidarité Internationale des
            futures Orthophonistes de Nice
          </p>
        </div>
      </div>
    </header>
  );
}
