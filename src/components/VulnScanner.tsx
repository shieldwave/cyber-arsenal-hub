
import { useState } from 'react';
import { Scan } from 'lucide-react';

const VulnScanner = () => {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async () => {
    if (!url.trim()) {
      alert('Please enter a URL');
      return;
    }

    setIsScanning(true);
    setResults('Analyzing...');
    
    // Simulate vulnerability scanning
    setTimeout(() => {
      setResults(`Vulnerability Scan Results for: ${url}

[+] Starting vulnerability assessment...
[+] Checking common web vulnerabilities...
[+] Testing for SQL injection...
[+] Checking for XSS vulnerabilities...
[+] Testing SSL/TLS configuration...
[+] Analyzing HTTP headers...
[+] Checking for directory traversal...
[+] Testing for CSRF vulnerabilities...

[INFO] Scan completed
[RESULT] No critical vulnerabilities detected

Note: This is a demo interface. Connect to your backend API for real vulnerability scanning.`);
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="cyber-card">
        <h2 className="text-xl font-bold text-gradient mb-4">AI Vulnerability Scanner</h2>
        <p className="text-cyber-text/70 mb-6">Advanced search of basic vulnerabilities</p>
        
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
          
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="cyber-button px-6 py-3 rounded-md flex items-center gap-2 disabled:opacity-50"
          >
            <Scan className="w-4 h-4" />
            {isScanning ? 'Scanning...' : 'Scan'}
          </button>
        </div>
      </div>

      {results && (
        <div className="cyber-card">
          <h3 className="text-lg font-semibold mb-4 text-gradient">Scan Results:</h3>
          <pre className="bg-black text-cyber-text p-4 rounded-md overflow-auto max-h-96 text-sm whitespace-pre-wrap">
            {results}
          </pre>
        </div>
      )}
    </div>
  );
};

export default VulnScanner;
