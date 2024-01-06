import Link from "next/link";

export default function Shop() {
  return (
    <section id="shop">
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

      <div className="shop-link">
        <Link href="https://www.vinted.fr/member/43451531-associationpassion" target="_blank">
          <i className="fas fa-angle-double-right d-none d-md-inline"></i>
          Visitez notre boutique Vinted
          <i className="fas fa-angle-double-left d-none d-md-inline"></i>
        </Link>
      </div>
    </section>
  )
}