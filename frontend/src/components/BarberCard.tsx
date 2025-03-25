interface BarberProps {
    name: string;
    specialty: string;
    image: string;
}

export default function BarberCard({ name, specialty, image }: BarberProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img src={image} alt={name} className="w-32 h-40 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-500">{specialty}</p>
        </div>
    );
}
