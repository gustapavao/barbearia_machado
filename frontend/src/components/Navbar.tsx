export default function Navbar() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Barbearia Machado</h1>
                <ul className="flex gap-6">
                    <li>
                        <a href="https://online.maapp.com.br/BarbeariaMachado" className="hover:text-gray-400">
                            Agendar
                        </a>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("services")} className="hover:text-gray-400">
                            Serviços
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("contact")} className="hover:text-gray-400">
                            Contato
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
