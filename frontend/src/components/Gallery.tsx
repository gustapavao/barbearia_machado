export default function Gallery() {
    const images = [
        "src/assets/galerry.png",
        "src/assets/galerry-2.png",
    ];

    return (
        <section className="py-12 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">Galeria</h2>
            <div className="grid md:grid-cols-3 gap-4 container mx-auto px-6">
                {images.map((src, index) => (
                    <img key={index} src={src} alt="Galeria" className="w-full h-90 object-cover rounded-lg shadow-md" />
                ))}
            </div>
        </section>
    );
}
