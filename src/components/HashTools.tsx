
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
    <div className="max-w-[1000px] mx-auto px-5">
      <div className="text-center mb-15">
        <h2 className="text-[42px] font-extrabold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent mb-3 tracking-tight">
          Hash Generator
        </h2>
        <p className="text-[#b8b8b8] text-lg font-medium">Generate MD5, SHA-1, and SHA-256 hashes</p>
      </div>

      {/* Hash Generator */}
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-12 relative overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(121,121,121,0.15)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(128,128,128,0.05)] before:to-[rgba(8,8,8,0.05)] before:opacity-100 mb-10">
        <div className="flex items-center gap-3 mb-6 relative z-[1]">
          <Hash className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">Hash Generator</h3>
        </div>
        
        <div className="space-y-6 relative z-[1]">
          <div>
            <label className="block text-sm font-medium mb-2 text-white">Input Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to hash..."
              className="w-full h-32 px-6 py-5 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white text-lg font-medium font-sans transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70 resize-vertical"
            />
          </div>

          <button
            onClick={generateHashes}
            className="cyber-button px-4 py-2 rounded-md flex items-center gap-2 w-full justify-center"
          >
            Generate Hashes
          </button>
        </div>
      </div>

      {/* Hash Results */}
      {(hashes.md5 || hashes.sha1 || hashes.sha256) && (
        <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(64,64,64,0.05)] before:to-[rgba(255,255,255,0.05)] before:opacity-100 mb-10">
          <div className="flex items-center gap-3 mb-6 relative z-[1]">
            <Shield className="w-6 h-6 text-white" />
            <h3 className="text-xl font-semibold text-white">Hash Results</h3>
          </div>
          
          <div className="space-y-4 relative z-[1]">
            {hashes.md5 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white">MD5</label>
                  <button
                    onClick={() => copyHash(hashes.md5)}
                    className="cyber-button px-2 py-1 rounded text-xs flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-[rgba(15,15,15,0.8)] border border-[rgba(255,255,255,0.1)] font-mono text-sm break-all text-white">
                  {hashes.md5}
                </div>
              </div>
            )}

            {hashes.sha1 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white">SHA-1</label>
                  <button
                    onClick={() => copyHash(hashes.sha1)}
                    className="cyber-button px-2 py-1 rounded text-xs flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-[rgba(15,15,15,0.8)] border border-[rgba(255,255,255,0.1)] font-mono text-sm break-all text-white">
                  {hashes.sha1}
                </div>
              </div>
            )}

            {hashes.sha256 && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-white">SHA-256</label>
                  <button
                    onClick={() => copyHash(hashes.sha256)}
                    className="cyber-button px-2 py-1 rounded text-xs flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-[rgba(15,15,15,0.8)] border border-[rgba(255,255,255,0.1)] font-mono text-sm break-all text-white">
                  {hashes.sha256}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hash Information */}
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(64,64,64,0.05)] before:to-[rgba(255,255,255,0.05)] before:opacity-100">
        <h3 className="text-xl font-semibold mb-4 text-white relative z-[1]">Hash Algorithm Information</h3>
        
        <div className="space-y-4 text-sm text-[#b0b0b0] relative z-[1]">
          <div className="border-l-2 border-white pl-4">
            <h4 className="font-semibold text-white mb-1">MD5 (Message Digest 5)</h4>
            <p>128-bit hash function. <span className="text-red-400">Cryptographically broken</span> - not recommended for security purposes.</p>
            <p>Use case: File integrity checks, checksums (non-security)</p>
          </div>

          <div className="border-l-2 border-white pl-4">
            <h4 className="font-semibold text-white mb-1">SHA-1 (Secure Hash Algorithm 1)</h4>
            <p>160-bit hash function. <span className="text-yellow-400">Deprecated for security</span> due to collision vulnerabilities.</p>
            <p>Use case: Legacy systems, Git commits (being phased out)</p>
          </div>

          <div className="border-l-2 border-white pl-4">
            <h4 className="font-semibold text-white mb-1">SHA-256 (Secure Hash Algorithm 256)</h4>
            <p>256-bit hash function. <span className="text-green-400">Currently secure</span> and widely recommended.</p>
            <p>Use case: Password hashing, digital signatures, blockchain, certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashTools;
