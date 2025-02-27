export default function Home() {
  // Get the base path for assets
  const basePath = process.env.NODE_ENV === 'production' ? '/static-homepage' : '';
  
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Logo in top left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <img 
          src={`${basePath}/wooma-logo.png`}
          alt="Wooma Logo" 
          className="h-5 md:h-6"
        />
      </div>
      
      {/* Hero Section with Email Signup */}
      <section className="py-16 md:py-24 flex-grow flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Key Statistics */}
            <div className="my-20">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                <span className="text-[#00C802]">62%</span> of renters lose part of their deposit.
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
                The average loss is <span className="text-[#00C802]">£250</span>.
              </p>
            </div>
            
            {/* Form Introduction */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Interested in securing your deposit? Sign up below to be the first to hear from us...
            </p>
            
            {/* Google Form Integration */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeYU7-_kmHK_7E80ACURaZeXIj5z8L9pE4NOPy46hs4n9j5rw/viewform?embedded=true" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  title="Wooma Waitlist Signup"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-4">
            {/* Logo in footer */}
            <img 
              src={`${basePath}/wooma-logo.png`}
              alt="Wooma Logo" 
              className="h-4 mx-auto"
            />
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Wooma Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
