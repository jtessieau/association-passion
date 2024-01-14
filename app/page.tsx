import Header from "@/app/_components/global/Header";
import Footer from "@/app/_components/global/Footer";
import HomepageContent from "@/app/homepage/HomepageContent";
import VintedShop from "@/app/_components/global/VintedShop";
import Members from "@/app/homepage/Members";

export default function Home() {
    return (
        <>
            <Header landing={true}/>

            <div className={"content"}>
                <HomepageContent/>
                <hr/>
                <Members/>
                <hr/>
                <VintedShop/>
            </div>

            <Footer/>
        </>
    )
}
