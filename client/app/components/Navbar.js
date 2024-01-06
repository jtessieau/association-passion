import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image
          className="logo"
          src="/assets/logo/logo-3.png"
          alt="logo"
          sizes="100vw"
          width={478}
          height={80}
        />
      </Link>

      <div className="navbar-nav">
        <Link className="nav-item nav-link" href="#association">
          L&apos;association
        </Link>
        <Link className="nav-item nav-link" href="#actions">
          Nos actions
        </Link>
        <Link className="nav-item nav-link" href="#members">
          Les membres
        </Link>
        <Link className="nav-item nav-link" href="#shop">
          Boutique
        </Link>
        <Link className="nav-item nav-link" href="/events">
          Evènements
        </Link>
      </div>
    </nav>
  );
}
