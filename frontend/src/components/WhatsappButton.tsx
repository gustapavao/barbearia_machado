import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "5598985202972";

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition"
        >
            <FaWhatsapp className="text-3xl"/>
            {/*<span>Fale Conosco</span>*/}
        </a>
    );
}
