
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
    <div className="max-w-[1000px] mx-auto px-5">
      <div className="text-center mb-15">
        <h2 className="text-[42px] font-extrabold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent mb-3 tracking-tight">
          Website Cloner
        </h2>
        <p className="text-[#b8b8b8] text-lg font-medium">Clone any website's client-side interface</p>
      </div>
      
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-12 relative overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(121,121,121,0.15)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(128,128,128,0.05)] before:to-[rgba(8,8,8,0.05)] before:opacity-100">
        <div className="relative z-[1] mb-8">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL..."
            className="w-full px-6 py-5 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white text-lg font-medium font-sans transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 relative z-[1]">
          <button
            onClick={() => handleOptionChange('downloadJS')}
            className={`cyber-button px-4 py-2 rounded-md flex items-center justify-center gap-2 ${
              options.downloadJS ? 'bg-cyber-hover border-cyber-accent text-cyber-accent' : ''
            }`}
          >
            <Code className="w-4 h-4" />
            Download JS files
          </button>
          
          <button
            onClick={() => handleOptionChange('playwrightPreload')}
            className={`cyber-button px-4 py-2 rounded-md flex items-center justify-center gap-2 ${
              options.playwrightPreload ? 'bg-cyber-hover border-cyber-accent text-cyber-accent' : ''
            }`}
          >
            <Code className="w-4 h-4" />
            Preload with Playwright
          </button>
        </div>
        
        <button
          onClick={handleClone}
          className="cyber-button px-4 py-2 rounded-md flex items-center gap-2 w-full justify-center relative z-[1]"
        >
          <Code className="w-4 h-4" />
          Clone
        </button>
      </div>

      {status && (
        <div className="mt-10 bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(64,64,64,0.05)] before:to-[rgba(255,255,255,0.05)] before:opacity-100">
          <div className="flex justify-between items-center mb-6 relative z-[1]">
            <h3 className="text-2xl font-bold text-white">Clone Status:</h3>
          </div>
          <p className="text-white mb-4 relative z-[1]">{status}</p>
          
          {downloadReady && (
            <button className="cyber-button px-4 py-2 rounded-md flex items-center gap-2 relative z-[1]">
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
