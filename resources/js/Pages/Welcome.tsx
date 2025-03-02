import Guest from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <Guest>
            <Head title="Welcome" />
            <div>
      {/* Hero Section avec Image */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl font-bold">Bienvenue sur Notre Site</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Découvrez nos services et rejoignez-nous pour une expérience unique.
          </p>
          <a href="/contact" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
            Contactez-nous
          </a>
        </div>
      </section>

      {/* Section À propos */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">À propos de nous</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Nous sommes une entreprise innovante spécialisée dans le développement web et les solutions digitales.
        </p>
      </section>

      {/* Section Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Nos Services</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-xl font-bold">Développement Web</h3>
              <p className="text-gray-600 mt-2">Création de sites web modernes et performants.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-xl font-bold">Marketing Digital</h3>
              <p className="text-gray-600 mt-2">Boostez votre présence en ligne avec nos stratégies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-xl font-bold">Consulting</h3>
              <p className="text-gray-600 mt-2">Nous vous accompagnons dans la réussite de vos projets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>© 2025 MonEntreprise. Tous droits réservés.</p>
      </footer>
    </div>
        </Guest>
    );
}
