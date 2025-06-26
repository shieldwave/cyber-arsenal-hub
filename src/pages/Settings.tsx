
import { useState } from 'react';
import { Save, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Slider } from '@/components/ui/slider';

const Settings = () => {
  const [apiKeys, setApiKeys] = useState({
    shodan: '',
    vpnapi: '',
    whois: '',
    virustotal: '',
    ipinfo: ''
  });
  const [apiMode, setApiMode] = useState([0]); // 0 = My APIs, 1 = Premium APIs
  const [preferences, setPreferences] = useState({
    darkMode: true,
    notifications: false,
    autoSave: true
  });

  const handleAPIKeyChange = (service: string, value: string) => {
    setApiKeys(prev => ({ ...prev, [service]: value }));
  };

  const handlePreferenceChange = (setting: string, value: boolean) => {
    setPreferences(prev => ({ ...prev, [setting]: value }));
  };

  const saveSettings = () => {
    console.log('Saving settings:', { apiKeys, apiMode, preferences });
    alert('Settings saved!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Particles background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '40%', left: '30%', animationDelay: '4s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '80%', left: '60%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '30%', left: '70%', animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-[800px] mx-auto px-10 py-10 relative z-10">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/dashboard" className="cyber-button px-3 py-2 rounded-md flex items-center gap-2 mr-4">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div>
            <h1 className="text-[36px] font-bold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent">Settings</h1>
            <p className="text-[#a0a0a0] text-lg">Configure your account and preferences</p>
          </div>
        </div>
        
        {/* API Configuration */}
        <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-2px] mb-6">
          <div className="flex items-center justify-between p-6 relative z-[1]">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">API Configuration</h3>
              <p className="text-[#b0b0b0] text-sm">Choose between your own APIs or premium APIs</p>
            </div>
          </div>
          
          <div className="px-6 pb-6 relative z-[1]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-medium">My APIs</span>
              <span className="text-white font-medium">Premium APIs</span>
            </div>
            
            <Slider
              value={apiMode}
              onValueChange={setApiMode}
              max={1}
              step={1}
              className="w-full"
            />
            
            <div className="text-center mt-4">
              <span className="text-[#d4d4d4] text-sm">
                Currently using: {apiMode[0] === 0 ? 'My APIs' : 'Premium APIs'}
              </span>
            </div>
          </div>
        </div>

        {/* API Keys */}
        <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-2px] mb-6">
          <h3 className="text-lg font-semibold text-white mb-6 relative z-[1]">API Keys</h3>
          
          <div className="space-y-4 relative z-[1]">
            {Object.entries(apiKeys).map(([service, key]) => (
              <div key={service}>
                <label className="block text-[#b0b0b0] text-sm mb-2 capitalize">
                  {service} API Key
                </label>
                <input
                  type="password"
                  value={key}
                  onChange={(e) => handleAPIKeyChange(service, e.target.value)}
                  placeholder="Enter your API key..."
                  className="w-full px-4 py-3 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(255,255,255,0.3)] rounded-xl text-white font-medium transition-all duration-300 focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] placeholder:text-[#717171]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-2px] mb-6">
          <h3 className="text-lg font-semibold text-white mb-6 relative z-[1]">Preferences</h3>
          
          <div className="space-y-6 relative z-[1]">
            {Object.entries(preferences).map(([setting, value]) => (
              <div key={setting} className="flex items-center justify-between">
                <div>
                  <label className="text-white font-medium capitalize">
                    {setting.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <p className="text-[#b0b0b0] text-sm">
                    {setting === 'darkMode' && 'Use dark theme for the interface'}
                    {setting === 'notifications' && 'Receive notifications for scan results'}
                    {setting === 'autoSave' && 'Automatically save scan results'}
                  </p>
                </div>
                <button
                  onClick={() => handlePreferenceChange(setting, !value)}
                  className={`w-12 h-6 rounded-full transition-all duration-300 ${
                    value ? 'bg-white' : 'bg-[rgba(255,255,255,0.3)]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-black transition-all duration-300 ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button
            onClick={saveSettings}
            className="cyber-button px-6 py-3 rounded-md flex items-center gap-2 mx-auto"
          >
            <Save className="w-4 h-4" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
