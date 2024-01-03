import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <h2>Nous contacter</h2>
      <div className="icon">
        <Link href="https://www.facebook.com/passionnice06/" target="_blank">
          <i className="fab fa-facebook fa-3x"></i>
        </Link>
        <Link href="https://www.instagram.com/association.passion/" target="_blank">
          <i className="fab fa-instagram fa-3x"></i>
        </Link>
        <Link href="mailto:association.passion06@gmail.com">
          <i className="far fa-envelope fa-3x"></i>
        </Link>
      </div>
    </footer >
  )
}