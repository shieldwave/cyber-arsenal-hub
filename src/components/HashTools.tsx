
import { useState } from 'react';
import { Hash, Shield, Copy } from 'lucide-react';

const HashTools = () => {
  const [inputText, setInputText] = useState('');
  const [hashes, setHashes] = useState({
    md5: '',
    sha1: '',
    sha256: ''
  });

  const generateHashes = async () => {
    if (!inputText) return;

    const encoder = new TextEncoder();
    const data = encoder.encode(inputText);

    try {
      // Generate SHA-1
      const sha1Buffer = await crypto.subtle.digest('SHA-1', data);
      const sha1Hash = Array.from(new Uint8Array(sha1Buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

      // Generate SHA-256
      const sha256Buffer = await crypto.subtle.digest('SHA-256', data);
      const sha256Hash = Array.from(new Uint8Array(sha256Buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

      // MD5 simulation (not available in Web Crypto API)
      const md5Hash = simpleMD5Hash(inputText);

      setHashes({
        md5: md5Hash,
        sha1: sha1Hash,
        sha256: sha256Hash
      });
    } catch (error) {
      console.error('Error generating hashes:', error);
    }
  };

  // Simple MD5-like hash simulation (not cryptographically secure)
  const simpleMD5Hash = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16).padStart(8, '0') + 'md5simulation';
  };

  const copyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <div className="space-y-8">
      {/* Hash Generator */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <Hash className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">Hash Generator</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Input Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to hash..."
              className="terminal-input w-full h-32 px-4 py-2 rounded-md resize-vertical"
            />
          </div>

          <button
            onClick={generateHashes}
            className="cyber-button px-8 py-2 rounded-md hover:shadow-lg"
          >
            Generate Hashes
          </button>
        </div>
      </div>

      {/* Hash Results */}
      {(hashes.md5 || hashes.sha1 || hashes.sha256) && (
        <div className="cyber-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-cyber-accent" />
            <h3 className="text-xl font-semibold">Hash Results</h3>
          </div>
          
          <div className="space-y-4">
            {hashes.md5 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-cyber-accent">MD5</label>
                  <button
                    onClick={() => copyHash(hashes.md5)}
                    className="text-cyber-accent hover:underline text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
                <div className="terminal-input p-3 rounded-md bg-cyber-bg/50 font-mono text-sm break-all">
                  {hashes.md5}
                </div>
              </div>
            )}

            {hashes.sha1 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-cyber-accent">SHA-1</label>
                  <button
                    onClick={() => copyHash(hashes.sha1)}
                    className="text-cyber-accent hover:underline text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
                <div className="terminal-input p-3 rounded-md bg-cyber-bg/50 font-mono text-sm break-all">
                  {hashes.sha1}
                </div>
              </div>
            )}

            {hashes.sha256 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-cyber-accent">SHA-256</label>
                  <button
                    onClick={() => copyHash(hashes.sha256)}
                    className="text-cyber-accent hover:underline text-sm flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
                <div className="terminal-input p-3 rounded-md bg-cyber-bg/50 font-mono text-sm break-all">
                  {hashes.sha256}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hash Information */}
      <div className="cyber-card">
        <h3 className="text-xl font-semibold mb-4">Hash Algorithm Information</h3>
        
        <div className="space-y-4 text-sm text-cyber-text/70">
          <div className="border-l-2 border-cyber-accent pl-4">
            <h4 className="font-semibold text-cyber-accent mb-1">MD5 (Message Digest 5)</h4>
            <p>128-bit hash function. <span className="text-red-400">Cryptographically broken</span> - not recommended for security purposes.</p>
            <p>Use case: File integrity checks, checksums (non-security)</p>
          </div>

          <div className="border-l-2 border-cyber-accent pl-4">
            <h4 className="font-semibold text-cyber-accent mb-1">SHA-1 (Secure Hash Algorithm 1)</h4>
            <p>160-bit hash function. <span className="text-yellow-400">Deprecated for security</span> due to collision vulnerabilities.</p>
            <p>Use case: Legacy systems, Git commits (being phased out)</p>
          </div>

          <div className="border-l-2 border-cyber-accent pl-4">
            <h4 className="font-semibold text-cyber-accent mb-1">SHA-256 (Secure Hash Algorithm 256)</h4>
            <p>256-bit hash function. <span className="text-green-400">Currently secure</span> and widely recommended.</p>
            <p>Use case: Password hashing, digital signatures, blockchain, certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashTools;
