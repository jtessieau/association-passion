import Link from "next/link";
import "./VintedShop.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

export default function VintedShop() {
    return (
        <section id="vinted-shop">
            <h2>Boutique Vinted</h2>
            <p>
                Pour nous soutenir, nous vendons des petites créations
                confectionnées par nos soins tout au long de l&apos;année !
                Vous y trouverez bracelets, chouchous, attrapes-rêves...
                Il est possible de ne pas passer par la plateforme et de
                nous commander des créations par MP sur instagram ou
                facebook. Nous les enverrons par la poste ou nous vous
                les remettrons en main propre si vous êtes près de notre
                bureau !
            </p>

            <Link href="https://www.vinted.fr/member/43451531-associationpassion" target="_blank" className="btn-shop">
                <FontAwesomeIcon icon={faAngleDoubleRight} className="faIcon"/>
                <div className="btn-shop-label">Visitez notre boutique Vinted</div>
                <FontAwesomeIcon icon={faAngleDoubleLeft} className="faIcon"/>
            </Link>
        </section>
    )
}