
import { useState } from 'react';
import { Shield, Network, Key, Hash, Code, Search, Zap, Terminal, Scan, Home, Settings } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import NetworkTools from '../components/NetworkTools';
import EncodingTools from '../components/EncodingTools';
import HashTools from '../components/HashTools';
import PasswordTools from '../components/PasswordTools';
import TextAnalysis from '../components/TextAnalysis';
import VulnScanner from '../components/VulnScanner';
import WebsiteCloner from '../components/WebsiteCloner';
import LitecoinWallet from '../components/LitecoinWallet';
import UsernameChecker from '../components/UsernameChecker';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'ip-scanner',
      title: 'Advanced IP Scanner',
      description: 'Advanced search across multiple websites and APIs',
      icon: Network,
      component: NetworkTools
    },
    {
      id: 'vuln-scanner',
      title: 'AI Vulnerability Scanner',
      description: 'Advanced search of basic vulnerabilities',
      icon: Scan,
      component: VulnScanner
    },
    {
      id: 'website-cloner',
      title: 'Website Cloner',
      description: 'Clone any website\'s client-side interface',
      icon: Code,
      component: WebsiteCloner
    },
    {
      id: 'ltc-wallet',
      title: 'Temp LTC Wallet',
      description: 'Create your temporary LTC wallet for quick transfers',
      icon: Key,
      component: LitecoinWallet
    },
    {
      id: 'username-checker',
      title: 'Username Checker',
      description: 'Check username availability across multiple platforms',
      icon: Search,
      component: UsernameChecker
    },
    {
      id: 'encoding',
      title: 'Encoding/Decoding',
      description: 'Base64, URL, HTML encoding and decoding utilities',
      icon: Hash,
      component: EncodingTools
    }
  ];

  if (activeCategory) {
    const category = categories.find(cat => cat.id === activeCategory);
    if (category) {
      const Component = category.component;
      return (
        <div className="min-h-screen bg-cyber-bg">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setActiveCategory(null)}
                className="cyber-button px-4 py-2 rounded-md flex items-center gap-2"
              >
                ← Back
              </button>
              <h1 className="text-2xl font-bold text-gradient">{category.title}</h1>
            </div>
            <Component />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-cyber-bg">
      {/* Header */}
      <div className="border-b border-cyber-border bg-cyber-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyber-accent rounded-lg flex items-center justify-center text-2xl font-bold text-black animate-glow">
                O
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gradient">Override_</h1>
                <p className="text-cyber-text/70 text-sm">Professional Cybersecurity & Penetration Testing Suite</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="cyber-button px-4 py-2 rounded-md flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <button className="cyber-button px-4 py-2 rounded-md flex items-center gap-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Terminal className="w-16 h-16 text-cyber-accent animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Override Security Tools
          </h2>
          <p className="text-cyber-text/80 text-lg max-w-2xl mx-auto">
            A comprehensive collection of cybersecurity and penetration testing tools 
            designed for security professionals and ethical hackers.
          </p>
        </div>

        {/* Tool Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <ToolCard
              key={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Why Choose Override?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <Zap className="w-12 h-12 text-cyber-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Lightning Fast</h4>
              <p className="text-cyber-text/70 text-sm">Optimized tools for quick security assessments</p>
            </div>
            <div className="cyber-card text-center">
              <Shield className="w-12 h-12 text-cyber-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Secure by Design</h4>
              <p className="text-cyber-text/70 text-sm">All processing done client-side for maximum security</p>
            </div>
            <div className="cyber-card text-center">
              <Terminal className="w-12 h-12 text-cyber-accent mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Professional Grade</h4>
              <p className="text-cyber-text/70 text-sm">Tools trusted by security professionals worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
