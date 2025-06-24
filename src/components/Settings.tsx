
import { useState } from 'react';
import { Save } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const Settings = () => {
  const [usePrebuiltAPIs, setUsePrebuiltAPIs] = useState(false);
  const [apiKeys, setApiKeys] = useState({
    shodan: '',
    vpnapi: '',
    whois: '',
    virustotal: '',
    ipinfo: ''
  });
  const [apiMode, setApiMode] = useState([0]); // 0 = My APIs, 1 = Premium APIs

  const handleAPIKeyChange = (service: string, value: string) => {
    setApiKeys(prev => ({ ...prev, [service]: value }));
  };

  const saveSettings = () => {
    console.log('Saving settings:', { usePrebuiltAPIs, apiKeys, apiMode });
    alert('Settings saved!');
  };

  return (
    <div className="max-w-[600px] mx-auto px-10 py-10">
      <div className="text-center mb-10">
        <h2 className="text-[36px] font-bold text-white mb-4">Settings</h2>
        <p className="text-[#a0a0a0] text-lg">Account settings</p>
      </div>
      
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-2px] mb-5">
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

      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-2px]">
        <h3 className="text-lg font-semibold text-white mb-6 relative z-[1]">API Keys</h3>
        
        <div className="space-y-4 relative z-[1]">
          {Object.entries(apiKeys).map(([service, key]) => (
            <div key={service}>
              <label className="block text-[#b0b0b0] text-sm mb-2 capitalize">
                {service} API
              </label>
              <input
                type="text"
                value={key}
                onChange={(e) => handleAPIKeyChange(service, e.target.value)}
                placeholder="Enter your API key..."
                className="w-full px-4 py-3 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(255,255,255,0.3)] rounded-xl text-white font-medium transition-all duration-300 focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] placeholder:text-[#717171]"
              />
            </div>
          ))}
          
          <button
            onClick={saveSettings}
            className="w-full px-6 py-3 mt-6 bg-gradient-to-br from-[#838383] to-[#4c4c4c] border-none rounded-xl text-white font-bold cursor-pointer transition-all duration-300 hover:transform hover:translate-y-[-2px] hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save APIs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
