import React from 'react';
import { Clock, Star, Shield, Truck, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=2070"
            alt="Luxury watch background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="absolute top-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2 text-white">
              <Clock className="w-8 h-8" />
              <span className="text-2xl font-bold">CHRONO</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#collection" className="hover:text-gray-300 transition">Collection</a>
              <a href="#features" className="hover:text-gray-300 transition">Features</a>
              <a href="#about" className="hover:text-gray-300 transition">About</a>
              <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
            </div>
          </div>
        </nav>

        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Time is Luxury</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Discover our collection of handcrafted timepieces that blend traditional craftsmanship with modern innovation.</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center mx-auto">
            Explore Collection
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Each timepiece is crafted with the finest materials and rigorous attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Swiss Movement</h3>
              <p className="text-gray-600">Powered by precise Swiss movements for unparalleled accuracy and reliability.</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Shipping</h3>
              <p className="text-gray-600">Free worldwide shipping and 30-day returns for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=1799"
                alt="Featured watch"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">The Classic Collection</h2>
              <p className="text-gray-600 mb-8">Introducing our signature timepiece, featuring a 41mm stainless steel case, sapphire crystal, and water resistance up to 100 meters. A perfect blend of elegance and durability.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold">01</span>
                  </div>
                  <p>Swiss-made automatic movement</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold">02</span>
                  </div>
                  <p>Premium leather strap</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold">03</span>
                  </div>
                  <p>5-year warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-6 h-6" />
                <span className="text-xl font-bold">CHRONO</span>
              </div>
              <p className="text-gray-400">Crafting timeless pieces for the modern individual.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Collection</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300 transition"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-gray-300 transition"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-gray-300 transition"><Twitter className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CHRONO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;