
import { useState } from 'react';
import { Search, Globe, Server } from 'lucide-react';

const NetworkTools = () => {
  const [portScanTarget, setPortScanTarget] = useState('');
  const [whoisDomain, setWhoisDomain] = useState('');
  const [dnsTarget, setDnsTarget] = useState('');
  const [results, setResults] = useState<string>('');

  const simulatePortScan = () => {
    if (!portScanTarget) return;
    
    setResults('Scanning ports on ' + portScanTarget + '...\n\n');
    
    setTimeout(() => {
      const mockResults = `
Port Scan Results for ${portScanTarget}:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PORT     STATE    SERVICE
22/tcp   open     ssh
80/tcp   open     http
443/tcp  open     https
3306/tcp closed   mysql
5432/tcp closed   postgresql

Scan completed in 2.34 seconds
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
      
      setResults(mockResults);
    }, 2000);
  };

  const simulateWhoisLookup = () => {
    if (!whoisDomain) return;
    
    setResults('Looking up WHOIS information for ' + whoisDomain + '...\n\n');
    
    setTimeout(() => {
      const mockResults = `
WHOIS Information for ${whoisDomain}:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Domain Name: ${whoisDomain.toUpperCase()}
Registry Domain ID: D123456789-LROR
Registrar: Example Registrar LLC
Creation Date: 2020-01-15T12:34:56Z
Updated Date: 2023-01-15T12:34:56Z
Registry Expiry Date: 2025-01-15T12:34:56Z

Registrant Organization: Example Corp
Registrant Country: US
Administrative Contact: admin@${whoisDomain}
Technical Contact: tech@${whoisDomain}

Name Servers:
  ns1.example.com
  ns2.example.com

Status: clientTransferProhibited
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
      
      setResults(mockResults);
    }, 1500);
  };

  const simulateDnsLookup = () => {
    if (!dnsTarget) return;
    
    setResults('Performing DNS lookup for ' + dnsTarget + '...\n\n');
    
    setTimeout(() => {
      const mockResults = `
DNS Lookup Results for ${dnsTarget}:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A Records:
  ${dnsTarget}    IN A    192.168.1.100
  ${dnsTarget}    IN A    192.168.1.101

AAAA Records:
  ${dnsTarget}    IN AAAA 2001:db8::1

MX Records:
  ${dnsTarget}    IN MX   10 mail.${dnsTarget}
  ${dnsTarget}    IN MX   20 mail2.${dnsTarget}

NS Records:
  ${dnsTarget}    IN NS    ns1.${dnsTarget}
  ${dnsTarget}    IN NS    ns2.${dnsTarget}

TXT Records:
  ${dnsTarget}    IN TXT   "v=spf1 include:_spf.google.com ~all"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
      
      setResults(mockResults);
    }, 1200);
  };

  return (
    <div className="space-y-8">
      {/* Port Scanner */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <Server className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">Port Scanner</h3>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter target IP or domain (e.g., 192.168.1.1)"
            value={portScanTarget}
            onChange={(e) => setPortScanTarget(e.target.value)}
            className="terminal-input w-full px-4 py-2 rounded-md"
          />
          <button
            onClick={simulatePortScan}
            className="cyber-button px-6 py-2 rounded-md hover:shadow-lg"
          >
            Scan Ports
          </button>
        </div>
      </div>

      {/* WHOIS Lookup */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">WHOIS Lookup</h3>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter domain name (e.g., example.com)"
            value={whoisDomain}
            onChange={(e) => setWhoisDomain(e.target.value)}
            className="terminal-input w-full px-4 py-2 rounded-md"
          />
          <button
            onClick={simulateWhoisLookup}
            className="cyber-button px-6 py-2 rounded-md hover:shadow-lg"
          >
            Lookup WHOIS
          </button>
        </div>
      </div>

      {/* DNS Lookup */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <Search className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">DNS Lookup</h3>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter domain name (e.g., google.com)"
            value={dnsTarget}
            onChange={(e) => setDnsTarget(e.target.value)}
            className="terminal-input w-full px-4 py-2 rounded-md"
          />
          <button
            onClick={simulateDnsLookup}
            className="cyber-button px-6 py-2 rounded-md hover:shadow-lg"
          >
            DNS Lookup
          </button>
        </div>
      </div>

      {/* Results Display */}
      {results && (
        <div className="cyber-card">
          <h3 className="text-xl font-semibold mb-4 text-cyber-accent">Results</h3>
          <pre className="bg-cyber-bg p-4 rounded border border-cyber-border text-sm overflow-x-auto whitespace-pre-wrap">
            {results}
          </pre>
        </div>
      )}
    </div>
  );
};

export default NetworkTools;
