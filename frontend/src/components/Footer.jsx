const Footer = () => {
    return (
      <footer className="bg-stone-600 text-stone-300 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold">
              <a href="#" className="text-stone-100 hover:text-stone-400">
                MailCanvas
              </a>
            </div>
  
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#about"
                className="hover:text-stone-400 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-stone-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="hover:text-stone-400 transition-colors"
              >
                Contact
              </a>
            </div>
  
            <div className="mt-4 md:mt-0 text-sm">
              © {new Date().getFullYear()} MailCanvas. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  