export default function Services() {
    const services = [
        { title: "Corte clássico", description: "Um corte tradicional para um visual impecável + Hidratação.", price: "R$ 25" },
        { title: "Barba", description: "Deixe sua barba com o respeito que ela merece", price: "R$ 20" },
        { title: "Sobrancelha", description: "Dê ao seu rosto um novo aspecto", price: "R$ 10" },
        { title: "Corte + Hidratação", description: "Um corte tradicional para um visual impecável + Hidratação.", price: "R$ 40" },
        { title: "Corte + Hidratação + Limpeza Facial", description: "Um corte tradicional para um visual impecável + Hidratação + Limpeza Facial", price: "R$ 60" },
        { title: "Corte e Barba + Sobrancelha + Hidratação + Limpeza Facial", description: "Pacote completo para um estilo renovado.", price: "R$ 80" },
    ];

    return (
        <section id="services" className="py-12 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-6 container mx-auto px-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                        <p className="text-lg font-bold mt-4">{service.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
