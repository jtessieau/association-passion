import Header from "./components/Header";
import ActionsList from "./components/actions/ActionsList";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import MembersList from "./components/members/MembersList";

import "./globals.scss"
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <Header></Header>

      <div className="content">
        <Main></Main>
        <hr />
        <ActionsList></ActionsList>
        <hr />
        <MembersList></MembersList>
        <hr />
        <Shop></Shop>
      </div>

      <Footer></Footer>
    </>
  )
}
