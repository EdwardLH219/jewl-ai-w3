import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
  DropboxIcon, 
  SharePointIcon, 
  WhatsAppIcon, 
  SlackIcon, 
  TwitterIcon, 
  LinkedInIcon 
} from '@/utils/integration-icons';

interface LayoutProps {
  children: React.ReactNode;
}

// Dropdown icon component for better code reuse
const DropdownIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Icons for better reusability
const icons = {
  dropbox: ({ className = '', color = '#0061FF' }: { className?: string; color?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M6 2h12l3 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8l3-6zm-.5 7a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-13zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    </svg>
  ),
  sharepoint: ({ className = '', color = '#0078D4' }: { className?: string; color?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M11.5 9.5v11a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-11H13a1.5 1.5 0 0 0-1.5 1.5zM13 2a2 2 0 0 0-2 2v4h11V4a2 2 0 0 0-2-2h-7z"/>
      <path d="M5 12v7a1 1 0 0 0 1 1h5v-9H6a1 1 0 0 0-1 1z"/>
      <path d="M1.5 9h8a1.5 1.5 0 0 1 1.5 1.5v11H3a1.5 1.5 0 0 1-1.5-1.5v-11z"/>
    </svg>
  ),
  whatsapp: ({ className = '', color = '#25D366' }: { className?: string; color?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345"/>
    </svg>
  ),
  slack: ({ className = '', color = '#4A154B' }: { className?: string; color?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z"/>
      <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z"/>
      <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z"/>
      <path d="M17.687 8.834a2.528 2.528 0 0 1-2.521 2.521 2.527 2.527 0 0 1-2.521-2.521V2.522A2.527 2.527 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312z"/>
      <path d="M15.166 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.521-2.522v-2.522h2.521z"/>
      <path d="M15.166 17.687a2.527 2.527 0 0 1-2.521-2.521 2.526 2.526 0 0 1 2.521-2.521h6.312A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.522h-6.312z"/>
    </svg>
  ),
  twitter: ({ className = '' }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
    </svg>
  ),
  linkedin: ({ className = '' }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
    </svg>
  ),
};

export default function Layout({ children }: LayoutProps) {
  const currentYear = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntegrationsMenu, setShowIntegrationsMenu] = useState(false);
  
  // Add scroll event listener for sticky header
  useEffect(() => {
    const header = document.querySelector('.sticky-header');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setShowIntegrationsMenu(false);
  };
  
  // Toggle integrations submenu
  const toggleIntegrationsMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowIntegrationsMenu(!showIntegrationsMenu);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>jewl.ai - AI-powered Document Assistant</title>
        <meta name="description" content="jewl.ai is an AI-powered document assistant that helps you find, analyze, and extract valuable insights from your documents." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <header className="sticky-header bg-white/90 backdrop-blur py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="cursor-pointer">
                <Image
                  src="/logo-black.png" 
                  alt="jewl.ai logo" 
                  width={160} 
                  height={48}
                  className="h-12 w-auto" 
                  unoptimized
                  priority
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#features" className="nav-link font-medium">Features</a></li>
              <li><a href="#use-cases" className="nav-link font-medium">Use Cases</a></li>
              <li className="relative">
                <a 
                  href="#" 
                  className="nav-link font-medium flex items-center gap-1" 
                  onClick={toggleIntegrationsMenu}
                >
                  Integrations
                  <DropdownIcon isOpen={showIntegrationsMenu} />
                </a>
                
                {/* Integrations dropdown menu */}
                <div className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 ${showIntegrationsMenu ? 'block' : 'hidden'}`}>
                  <div className="px-4 py-2 border-b">
                    <h4 className="text-sm font-semibold text-gray-800">Repositories</h4>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <a href="#" className="flex items-center text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                          <span className="w-5 h-5 mr-2 flex-shrink-0">
                            <DropboxIcon size={20} className="text-[#0061FF]" />
                          </span>
                          Dropbox
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                          <span className="w-5 h-5 mr-2 flex-shrink-0">
                            <SharePointIcon size={20} className="text-[#0078D4]" />
                          </span>
                          SharePoint
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="px-4 py-2">
                    <h4 className="text-sm font-semibold text-gray-800">Chat Interfaces</h4>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <a href="#" className="flex items-center text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                          <span className="w-5 h-5 mr-2 flex-shrink-0">
                            <WhatsAppIcon size={20} className="text-[#25D366]" />
                          </span>
                          WhatsApp
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                          <span className="w-5 h-5 mr-2 flex-shrink-0">
                            {icons.slack({ className: 'w-full h-full' })}
                          </span>
                          Slack
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li><a href="#contact" className="nav-link font-medium">Contact</a></li>
            </ul>
          </nav>
          
          {/* Mobile hamburger button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            data-testid="hamburger-button"
          >
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}
          data-testid="mobile-menu"
        >
          <nav className="container mx-auto py-4 px-6">
            <ul className="flex flex-col space-y-4">
              <li><a href="#features" className="nav-link font-medium block py-2" onClick={handleLinkClick}>Features</a></li>
              <li><a href="#use-cases" className="nav-link font-medium block py-2" onClick={handleLinkClick}>Use Cases</a></li>
              <li>
                <div className="py-2">
                  <a href="#" className="nav-link font-medium flex items-center justify-between" onClick={toggleIntegrationsMenu}>
                    <span>Integrations</span>
                    <DropdownIcon isOpen={showIntegrationsMenu} />
                  </a>
                  <div className={`mt-2 pl-4 space-y-2 border-l border-gray-200 ${showIntegrationsMenu ? 'block' : 'hidden'}`}>
                    <div className="mb-2">
                      <h4 className="text-sm font-semibold text-gray-800 mb-1">Repositories</h4>
                      <ul className="space-y-1">
                        <li>
                          <a href="#" className="flex items-center text-sm text-gray-700 hover:text-black py-1">
                            <span className="w-4 h-4 mr-2 flex-shrink-0">
                              {icons.dropbox({ className: 'w-full h-full' })}
                            </span>
                            Dropbox
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center text-sm text-gray-700 hover:text-black py-1">
                            <span className="w-4 h-4 mr-2 flex-shrink-0">
                              {icons.sharepoint({ className: 'w-full h-full' })}
                            </span>
                            SharePoint
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-1">Chat Interfaces</h4>
                      <ul className="space-y-1">
                        <li>
                          <a href="#" className="flex items-center text-sm text-gray-700 hover:text-black py-1">
                            <span className="w-4 h-4 mr-2 flex-shrink-0">
                              {icons.whatsapp({ className: 'w-full h-full' })}
                            </span>
                            WhatsApp
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center text-sm text-gray-700 hover:text-black py-1">
                            <span className="w-4 h-4 mr-2 flex-shrink-0">
                              {icons.slack({ className: 'w-full h-full' })}
                            </span>
                            Slack
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="#contact" className="nav-link font-medium block py-2" onClick={handleLinkClick}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="mb-2">
              <Image
                src="/logo-white.png" 
                alt="jewl.ai logo" 
                width={120} 
                height={36}
                className="h-9 w-auto" 
                unoptimized
              />
            </div>
            <p className="text-gray-400 text-sm">
              Intelligent document processing powered by AI to help you find, analyze, and extract valuable insights.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 text-sm hover:text-white transition-colors">Features</a></li>
              <li><a href="#use-cases" className="text-gray-400 text-sm hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Integrations</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm block mb-1">Repositories</span>
                <ul className="pl-2 space-y-1 border-l border-gray-800">
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center">
                    <span className="w-3 h-3 mr-1.5 inline-block" style={{color: "#0061FF"}}>
                      {icons.dropbox({ className: 'w-full h-full' })}
                    </span>Dropbox</a>
                  </li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center">
                    <span className="w-3 h-3 mr-1.5 inline-block" style={{color: "#0078D4"}}>
                      {icons.sharepoint({ className: 'w-full h-full' })}
                    </span>SharePoint</a>
                  </li>
                </ul>
              </li>
              <li className="mt-3"><span className="text-gray-400 text-sm block mb-1">Chat Interfaces</span>
                <ul className="pl-2 space-y-1 border-l border-gray-800">
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center">
                    <span className="w-3 h-3 mr-1.5 inline-block" style={{color: "#25D366"}}>
                      {icons.whatsapp({ className: 'w-full h-full' })}
                    </span>WhatsApp</a>
                  </li>
                  <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center">
                    <span className="w-3 h-3 mr-1.5 inline-block" style={{color: "#4A154B"}}>
                      {icons.slack({ className: 'w-full h-full' })}
                    </span>Slack</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} jewl.ai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              {icons.twitter({ className: 'h-5 w-5' })}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              {icons.linkedin({ className: 'h-5 w-5' })}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 