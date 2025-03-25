import BarberCard from "../components/BarberCard";

const barbers = [
    { name: "Gerdson", specialty: "Cortes Clássicos", image: "/gerdson.png" },
    { name: "Junior", specialty: "Degradê e Fade", image: "/junior.png" },
    { name: "Gutto", specialty: "Barbas e Navalha", image: "/gutto.png" },
    { name: "Pedro", specialty: "Barbas e Navalha", image: "/pedro.png" },
];

export default function Barbers() {
    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Nossos Barbeiros</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {barbers.map((barber, index) => (
                    <BarberCard key={index} {...barber} />
                ))}
            </div>
        </section>
    );
}
