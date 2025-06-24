
import { useState } from 'react';
import { Code, Download } from 'lucide-react';

const WebsiteCloner = () => {
  const [url, setUrl] = useState('');
  const [options, setOptions] = useState({
    downloadJS: false,
    playwrightPreload: false
  });
  const [status, setStatus] = useState('');
  const [downloadReady, setDownloadReady] = useState(false);

  const handleOptionChange = (option: string) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleClone = async () => {
    if (!url.trim()) {
      alert('Please enter a URL');
      return;
    }

    if (!options.downloadJS && !options.playwrightPreload) {
      alert('Please select at least one option');
      return;
    }

    setStatus('Starting clone process...');
    setDownloadReady(false);

    // Simulate cloning process
    const steps = [
      'Fetching website content...',
      'Downloading HTML structure...',
      options.downloadJS ? 'Downloading JavaScript files...' : null,
      options.playwrightPreload ? 'Preloading with Playwright...' : null,
      'Processing assets...',
      'Creating ZIP archive...',
      'Clone completed!'
    ].filter(Boolean);

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus(steps[i]);
    }

    setDownloadReady(true);
  };

  return (
    <div className="space-y-6">
      <div className="cyber-card">
        <h2 className="text-xl font-bold text-gradient mb-4">Website Cloner</h2>
        <p className="text-cyber-text/70 mb-6">Clone any website's client-side interface</p>
        
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your URL..."
              className="terminal-input w-full px-4 py-3 rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => handleOptionChange('downloadJS')}
              className={`cyber-button px-4 py-3 rounded-md flex items-center gap-2 ${
                options.downloadJS ? 'bg-cyber-accent text-black' : ''
              }`}
            >
              <Code className="w-4 h-4" />
              Download JS files
            </button>
            
            <button
              onClick={() => handleOptionChange('playwrightPreload')}
              className={`cyber-button px-4 py-3 rounded-md flex items-center gap-2 ${
                options.playwrightPreload ? 'bg-cyber-accent text-black' : ''
              }`}
            >
              <Code className="w-4 h-4" />
              Preload with Playwright
            </button>
          </div>
          
          <button
            onClick={handleClone}
            className="cyber-button px-6 py-3 rounded-md flex items-center gap-2"
          >
            <Code className="w-4 h-4" />
            Clone
          </button>
        </div>
      </div>

      {status && (
        <div className="cyber-card">
          <h3 className="text-lg font-semibold mb-4 text-gradient">Clone Status:</h3>
          <p className="text-cyber-text mb-4">{status}</p>
          
          {downloadReady && (
            <button className="cyber-button px-6 py-3 rounded-md flex items-center gap-2 bg-cyber-accent text-black">
              <Download className="w-4 h-4" />
              Download ZIP
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WebsiteCloner;
