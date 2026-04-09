import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <Head>
        <title>Lumina Timber | Handcrafted Wooden Decor</title>
        <meta name="description" content="Premium, sustainably sourced wooden decor." />
      </Head>

      {/* Navigation (Optional/Simple) */}
      <nav className="max-w-7xl mx-auto px-6 py-6 sm:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">LUMINA</div>
        <div className="hidden sm:flex gap-6 font-medium text-stone-600">
          <a href="#" className="hover:text-stone-900">Collections</a>
          <a href="#" className="hover:text-stone-900">About</a>
          <a href="#" className="hover:text-stone-900">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 leading-tight">
              Nature's elegance, <br/> crafted for your home.
            </h1>
            <p className="mt-4 text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
              Elevate your space with our premium, sustainably sourced wooden decor. Designed with intention, built to last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-stone-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-stone-800 transition">
                Shop Collection
              </button>
              <button className="border-2 border-stone-300 text-stone-900 px-8 py-4 rounded-md font-semibold hover:border-stone-900 transition">
                Our Story
              </button>
            </div>
          </div>
          
          {/* Image Placeholder */}
          <div className="aspect-[4/5] bg-stone-200 rounded-2xl overflow-hidden relative shadow-2xl">
             <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-medium tracking-wide">
               [ Premium Decor Image Placeholder ]
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}
