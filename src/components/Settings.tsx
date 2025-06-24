
import { useState } from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  const [usePrebuiltAPIs, setUsePrebuiltAPIs] = useState(false);
  const [apiKeys, setApiKeys] = useState({
    shodan: '',
    vpnapi: '',
    whois: '',
    virustotal: '',
    ipinfo: ''
  });

  const handleAPIKeyChange = (service: string, value: string) => {
    setApiKeys(prev => ({ ...prev, [service]: value }));
  };

  const saveSettings = () => {
    console.log('Saving settings:', { usePrebuiltAPIs, apiKeys });
    alert('Settings saved!');
  };

  return (
    <div className="space-y-6">
      <div className="cyber-card">
        <h2 className="text-xl font-bold text-gradient mb-4">Settings</h2>
        <p className="text-cyber-text/70 mb-6">Account settings</p>
        
        <div className="space-y-6">
          {/* API Toggle */}
          <div className="flex items-center justify-between p-4 bg-cyber-bg border border-cyber-border rounded-md">
            <div>
              <h3 className="text-lg font-semibold text-cyber-text">APIs</h3>
              <p className="text-cyber-text/70 text-sm">Always use prebought APIs</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={usePrebuiltAPIs}
                onChange={(e) => setUsePrebuiltAPIs(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-cyber-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyber-accent"></div>
            </label>
          </div>

          {/* API Keys */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyber-text">API Keys</h3>
            
            {Object.entries(apiKeys).map(([service, key]) => (
              <div key={service}>
                <label className="block text-cyber-text/70 text-sm mb-2 capitalize">
                  {service} API
                </label>
                <input
                  type="text"
                  value={key}
                  onChange={(e) => handleAPIKeyChange(service, e.target.value)}
                  placeholder="Enter your API key..."
                  className="terminal-input w-full px-4 py-3 rounded-md"
                />
              </div>
            ))}
            
            <button
              onClick={saveSettings}
              className="cyber-button px-6 py-3 rounded-md flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save APIs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
