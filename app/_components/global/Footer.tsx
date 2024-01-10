import "@/app/_components/global/Footer.scss"
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <h2>Nous contacter</h2>
            <div className="icon">
                <Link href="https://www.facebook.com/passionnice06/" target="_blank" className="facebook-link">
                    Facebook
                </Link>
                <Link href="https://www.instagram.com/association.passion/" target="_blank"
                      className={"instagram-link"}>
                    Instagram
                </Link>
                <Link href="mailto:association.passion06@gmail.com" className={"mail-link"}>
                    Mail
                </Link>
            </div>
        </footer>
    )
}