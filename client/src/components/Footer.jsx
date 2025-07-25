import React from 'react'

function Footer() {
  return (
<footer className="bg-slate-900 text-slate-300 py-20">
        <div className="grid gap-16 px-6 max-w-6xl mx-auto md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Rayyan-Al-Arab</h3>
            <p>PO Box 12345<br />Dubai, UAE</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li><a href="#about"    className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#contact"  className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enquiries</h4>
            <p>+971 4 000 0000</p>
            <p>info@rayyanalarab.ae</p>
          </div>
        </div>
        <p className="text-center text-sm mt-16">
          © 2025 Rayyan-Al-Arab LLC. All rights reserved.
        </p>
      </footer>  )
}

export default Footer