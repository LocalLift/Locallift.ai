import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LocalLiftLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-24 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="w-36 h-36 mx-auto mb-5 bg-white rounded-lg flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt="LocalLift.ai Logo"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">AI-Powered Leads for Local Businesses</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We build automated systems that bring you more calls, customers, and revenue — without the tech headaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-6 py-3">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-700 font-bold px-6 py-3"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="bg-white py-16 mt-5 mx-5 rounded-lg shadow-sm">
        <div className="container mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-center mb-8">What You Get with LocalLift.ai</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">📈 High-Converting Website</h3>
              <p className="text-gray-600">Landing page built to turn clicks into customers.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">🤖 Automated Follow-Ups</h3>
              <p className="text-gray-600">Texts and emails go out instantly — never miss a lead again.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">🎯 Facebook + Google Ads</h3>
              <p className="text-gray-600">We run fully-managed ad campaigns to bring in more traffic.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">📊 Clear Reporting</h3>
              <p className="text-gray-600">Simple dashboards show you what's working, in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 mt-5 mx-5 rounded-lg shadow-sm">
        <div className="container mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted by Local Businesses Like Yours</h2>
          <blockquote className="text-xl italic text-center mb-5 max-w-4xl mx-auto">
            "I booked 12 new jobs in 2 weeks with LocalLift.ai — and I didn't touch a thing."
            <br />
            <span className="font-semibold">— Marcus, Roofer</span>
          </blockquote>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
              ✅ Google Ads Certified
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
              ✅ Meta Business Partner
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
              ✅ Powered by OpenAI
            </span>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
              ✅ USA-Based Support
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 mt-5 mx-5 rounded-lg shadow-sm">
        <div className="container mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-center mb-8">
            Built for Local Business Owners by Entrepreneurs Who Get It
          </h2>
          <p className="text-lg text-center max-w-4xl mx-auto text-gray-600">
            We know local businesses don't need fluff — they need results. Our AI-driven tools and done-for-you systems
            grow your business while you focus on your craft.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="start" className="bg-white py-16 mt-5 mx-5 rounded-lg shadow-sm">
        <div className="container mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-center mb-8">Let's Get You More Customers — Starting This Week</h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-8 text-gray-600">
            No setup fees. No contracts. Just real results. Start your free 7-day trial now and see what LocalLift.ai
            can do for your business.
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3">
              Start My Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-10 px-5 mt-5">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-4">
            <p className="leading-relaxed">
              📍 Serving local businesses nationwide
              <br />📧 hello@LocalLift.ai
              <br />📞 (555) 555-5555
              <br />🌐 www.LocalLift.ai
            </p>
          </div>
          <p className="text-sm">© 2025 LocalLift.ai — All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
