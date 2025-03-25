import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./components/Gallery";
import WhatsAppButton from "./components/WhatsappButton.tsx";
import Barbers from "./pages/Barbers.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Services />
            <Barbers />
            <Gallery />
            <WhatsAppButton />
            <Footer />
        </div>
    );
}
