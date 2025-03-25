import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-8">
            <div className="max-w-5xl mx-auto px-4 text-center">
                {/* Nome e Endereço */}
                <h3 className="text-xl font-bold">Barbearia Machado</h3>
                <p className="text-gray-400 mt-2">
                    Av. Dep. Manoel Paiva - Centro, Santa Helena - MA
                </p>

                {/* Horário de Funcionamento */}
                <p className="text-gray-400 mt-2">
                    Segunda a Sábado: 09h - 19h | Domingo: Fechado
                </p>

                {/* Redes Sociais */}
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://www.instagram.com/barbeariamachado_sh" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-gray-300 transition-colors" />
                    </a>
                    <a href="https://www.facebook.com/barbeariamachado_sh" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl hover:text-gray-300 transition-colors" />
                    </a>
                    <a href="https://wa.me/5598985202972" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-2xl hover:text-gray-300 transition-colors" />
                    </a>
                </div>

                {/* Direitos Autorais */}
                <p className="text-gray-500 text-sm mt-6">
                    © {new Date().getFullYear()} Barbearia Machado. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
