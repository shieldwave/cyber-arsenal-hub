
import { useState } from 'react';
import { Search } from 'lucide-react';

const NetworkTools = () => {
  const [ipTarget, setIpTarget] = useState('');
  const [results, setResults] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);

  const simulateIPScan = () => {
    if (!ipTarget) return;
    
    setIsScanning(true);
    setResults('Scanning ' + ipTarget + '...\n\n');
    
    setTimeout(() => {
      const mockResults = `
Advanced IP Scan Results for ${ipTarget}:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌍 GEOLOCATION INFO
Country: United States
Region: California
City: Los Angeles
ISP: Cloudflare Inc.
Organization: Cloudflare
Coordinates: 34.0522, -118.2437

🔍 NETWORK DETAILS
IP Type: IPv4
Reverse DNS: server.example.com
ASN: AS13335 Cloudflare, Inc.
Timezone: America/Los_Angeles

🛡️ SECURITY ANALYSIS
VPN/Proxy: No
Tor Exit Node: No
Known Threats: None detected
Abuse Confidence: 0%

📊 PORT SCAN RESULTS
Port 22/tcp: closed (SSH)
Port 80/tcp: open (HTTP)
Port 443/tcp: open (HTTPS)
Port 3306/tcp: closed (MySQL)
Port 5432/tcp: closed (PostgreSQL)

🌐 DOMAIN INFORMATION
Domain: example.com
Registrar: Example Registrar LLC
Creation Date: 2020-01-15
Expiry Date: 2025-01-15

Scan completed in 3.21 seconds
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
      
      setResults(mockResults);
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-5">
      <div className="text-center mb-15">
        <h2 className="text-[42px] font-extrabold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent mb-3 tracking-tight">
          Advanced IP Scanner
        </h2>
        <p className="text-[#b8b8b8] text-lg font-medium">Advanced search across multiple websites and APIs</p>
      </div>
      
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-12 relative overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(121,121,121,0.15)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(128,128,128,0.05)] before:to-[rgba(8,8,8,0.05)] before:opacity-100">
        <div className="relative z-[1] mb-8">
          <input
            type="text"
            value={ipTarget}
            onChange={(e) => setIpTarget(e.target.value)}
            placeholder="Enter IP address or domain..."
            className="w-full px-6 py-5 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white text-lg font-medium font-sans transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70"
          />
        </div>
        
        <button
          onClick={simulateIPScan}
          disabled={isScanning}
          className="w-full px-8 py-5 bg-gradient-to-br from-[#838383] to-[#4c4c4c] border-none rounded-2xl text-white text-lg font-bold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden shadow-[0_12px_24px_rgba(217,217,217,0.3)] hover:transform hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_16px_32px_rgba(202,202,202,0.4)] active:transform active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-3 relative z-[1] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Search className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
          {isScanning ? 'Scanning...' : 'Scan'}
        </button>
      </div>

      {results && (
        <div className="mt-10 bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(64,64,64,0.05)] before:to-[rgba(255,255,255,0.05)] before:opacity-100">
          <div className="flex justify-between items-center mb-6 relative z-[1]">
            <h3 className="text-2xl font-bold text-white">Scan Results:</h3>
          </div>
          <pre className="bg-[#111] text-[#ccc] p-6 rounded-xl overflow-auto max-h-[600px] text-sm whitespace-pre-wrap relative z-[1] border border-[rgba(255,255,255,0.1)]">
            {results}
          </pre>
        </div>
      )}
    </div>
  );
};

export default NetworkTools;
