import Header from "@/app/_components/global/Header";
import Footer from "@/app/_components/global/Footer";
import HomepageContent from "@/app/homepage/HomepageContent";

export default function Home() {
    return (
        <>
            <Header landing={true}/>

            <HomepageContent/>

            <Footer/>
        </>
    )
}
