import Header from "./components/Header";
import ActionsList from "./components/actions/ActionsList";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import MembersList from "./components/members/MembersList";

import "./globals.scss"

export default function Home() {
  return (
    <>
      <Header></Header>

      <div className="content">
        <ActionsList></ActionsList>
        <MembersList></MembersList>
        <Shop></Shop>
      </div>

      <Footer></Footer>
    </>
  )
}
