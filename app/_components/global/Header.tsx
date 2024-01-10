import Navbar from "@/app/_components/global/Navbar";
import Landing from "@/app/homepage/Landing";

export default function Header({landing}: { landing?: boolean }) {
    return (
        <header>
            <Navbar/>
            {landing && <Landing/>}
        </header>
    )
}