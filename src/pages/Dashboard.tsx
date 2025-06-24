
import { useState } from 'react';
import { Home, Network, Scan, Code, Key, Search, Gift, Settings as SettingsIcon, LogOut } from 'lucide-react';
import NetworkTools from '../components/NetworkTools';
import VulnScanner from '../components/VulnScanner';
import WebsiteCloner from '../components/WebsiteCloner';
import LitecoinWallet from '../components/LitecoinWallet';
import UsernameChecker from '../components/UsernameChecker';
import RedeemKey from '../components/RedeemKey';
import Settings from '../components/Settings';
import Plans from '../components/Plans';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'ip-scanner', label: 'Advanced IP Scanner', icon: Network },
    { id: 'vuln-scanner', label: 'AI Vulnerability Scanner', icon: Scan },
    { id: 'website-cloner', label: 'Website Cloner', icon: Code },
    { id: 'ltc-wallet', label: 'Temp LTC Wallet', icon: Key },
    { id: 'username-checker', label: 'Username Checker', icon: Search },
    { id: 'redeem', label: 'Redeem Key', icon: Gift },
    { id: 'plans', label: 'Plans', icon: SettingsIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="cyber-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyber-accent rounded-lg flex items-center justify-center text-xl font-bold text-black">
                  O
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gradient">Override Dashboard</h1>
                  <p className="text-cyber-text/70">Welcome back, user!</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-cyber-bg border border-cyber-border rounded-lg p-4">
                  <div className="text-cyber-text/70 text-sm">Current Plan</div>
                  <div className="text-xl font-bold text-cyber-accent">Basic</div>
                  <div className="text-cyber-text/50 text-xs">Subscription tier</div>
                </div>
                <div className="bg-cyber-bg border border-cyber-border rounded-lg p-4">
                  <div className="text-cyber-text/70 text-sm">Tools Used</div>
                  <div className="text-xl font-bold text-cyber-accent">12</div>
                  <div className="text-cyber-text/50 text-xs">This month</div>
                </div>
                <div className="bg-cyber-bg border border-cyber-border rounded-lg p-4">
                  <div className="text-cyber-text/70 text-sm">Status</div>
                  <div className="text-xl font-bold text-green-400">Active</div>
                  <div className="text-cyber-text/50 text-xs">Account status</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'ip-scanner':
        return <NetworkTools />;
      case 'vuln-scanner':
        return <VulnScanner />;
      case 'website-cloner':
        return <WebsiteCloner />;
      case 'ltc-wallet':
        return <LitecoinWallet />;
      case 'username-checker':
        return <UsernameChecker />;
      case 'redeem':
        return <RedeemKey />;
      case 'plans':
        return <Plans />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg flex">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden cyber-button p-2 rounded-md"
      >
        <div className="w-5 h-5 flex flex-col justify-around">
          <span className="block h-0.5 bg-cyber-text"></span>
          <span className="block h-0.5 bg-cyber-text"></span>
          <span className="block h-0.5 bg-cyber-text"></span>
        </div>
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out md:block z-40 w-64 bg-cyber-card border-r border-cyber-border`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-cyber-accent rounded-lg flex items-center justify-center text-lg font-bold text-black">
              O
            </div>
            <span className="text-xl font-bold text-gradient">Override_</span>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-cyber-accent text-black'
                    : 'text-cyber-text hover:bg-cyber-hover'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
            
            <div className="border-t border-cyber-border pt-2 mt-4">
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-cyber-text hover:bg-cyber-hover transition-colors">
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 p-6 md:p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
