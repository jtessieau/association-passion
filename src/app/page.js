import Header from "./components/Header";
import ActionsList from "./components/actions/ActionsList";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import MembersList from "./components/members/MembersList";

export default function Home() {
  return (
    <>
      <Header></Header>
      <ActionsList></ActionsList>
      <MembersList></MembersList>
      <Shop></Shop>
      <Footer></Footer>
    </>
  )
}
