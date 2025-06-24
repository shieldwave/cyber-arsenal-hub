
import { useState } from 'react';
import { Key, RefreshCw, Shield, Copy } from 'lucide-react';

const PasswordTools = () => {
  const [password, setPassword] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState<{
    score: number;
    label: string;
    color: string;
    feedback: string[];
  } | null>(null);

  const generatePassword = () => {
    let charset = '';
    
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!charset) {
      setGeneratedPassword('Please select at least one character type');
      return;
    }

    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    setGeneratedPassword(result);
  };

  const analyzePassword = (pwd: string) => {
    if (!pwd) {
      setPasswordStrength(null);
      return;
    }

    let score = 0;
    const feedback: string[] = [];

    // Length check
    if (pwd.length >= 12) {
      score += 2;
    } else if (pwd.length >= 8) {
      score += 1;
    } else {
      feedback.push('Password should be at least 8 characters long');
    }

    // Character variety checks
    if (/[a-z]/.test(pwd)) score += 1;
    else feedback.push('Add lowercase letters');

    if (/[A-Z]/.test(pwd)) score += 1;
    else feedback.push('Add uppercase letters');

    if (/[0-9]/.test(pwd)) score += 1;
    else feedback.push('Add numbers');

    if (/[^a-zA-Z0-9]/.test(pwd)) score += 1;
    else feedback.push('Add special characters');

    // Pattern checks
    if (!/(.)\1{2,}/.test(pwd)) score += 1;
    else feedback.push('Avoid repeating characters');

    if (!/012|123|234|345|456|567|678|789|890|abc|bcd|cde/.test(pwd.toLowerCase())) score += 1;
    else feedback.push('Avoid sequential patterns');

    let label, color;
    if (score <= 2) {
      label = 'Very Weak';
      color = 'text-red-400';
    } else if (score <= 4) {
      label = 'Weak';
      color = 'text-orange-400';
    } else if (score <= 6) {
      label = 'Medium';
      color = 'text-yellow-400';
    } else if (score <= 7) {
      label = 'Strong';
      color = 'text-green-400';
    } else {
      label = 'Very Strong';
      color = 'text-cyber-accent';
    }

    setPasswordStrength({ score, label, color, feedback });
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <div className="space-y-8">
      {/* Password Generator */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <Key className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">Password Generator</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Password Length: {passwordLength}
            </label>
            <input
              type="range"
              min="4"
              max="128"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              className="w-full h-2 bg-cyber-border rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="rounded border-cyber-border bg-cyber-card text-cyber-accent focus:ring-cyber-accent"
              />
              <span className="text-sm">Uppercase (A-Z)</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="rounded border-cyber-border bg-cyber-card text-cyber-accent focus:ring-cyber-accent"
              />
              <span className="text-sm">Lowercase (a-z)</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="rounded border-cyber-border bg-cyber-card text-cyber-accent focus:ring-cyber-accent"
              />
              <span className="text-sm">Numbers (0-9)</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="rounded border-cyber-border bg-cyber-card text-cyber-accent focus:ring-cyber-accent"
              />
              <span className="text-sm">Symbols (!@#...)</span>
            </label>
          </div>

          <button
            onClick={generatePassword}
            className="cyber-button px-8 py-2 rounded-md hover:shadow-lg flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Generate Password
          </button>

          {generatedPassword && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Generated Password</label>
                <button
                  onClick={copyPassword}
                  className="text-cyber-accent hover:underline text-sm flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  Copy
                </button>
              </div>
              <div className="terminal-input p-3 rounded-md bg-cyber-bg/50 font-mono text-sm break-all">
                {generatedPassword}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Password Strength Analyzer */}
      <div className="cyber-card">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-cyber-accent" />
          <h3 className="text-xl font-semibold">Password Strength Analyzer</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Enter Password to Analyze</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                analyzePassword(e.target.value);
              }}
              placeholder="Enter password..."
              className="terminal-input w-full px-4 py-2 rounded-md"
            />
          </div>

          {passwordStrength && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Strength:</span>
                <span className={`font-semibold ${passwordStrength.color}`}>
                  {passwordStrength.label}
                </span>
                <div className="flex-1 bg-cyber-border h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-300"
                    style={{ width: `${(passwordStrength.score / 8) * 100}%` }}
                  />
                </div>
              </div>

              {passwordStrength.feedback.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-cyber-accent">Suggestions:</h4>
                  <ul className="text-sm text-cyber-text/70 space-y-1">
                    {passwordStrength.feedback.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-cyber-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Password Security Tips */}
      <div className="cyber-card">
        <h3 className="text-xl font-semibold mb-4">Password Security Best Practices</h3>
        
        <div className="space-y-3 text-sm text-cyber-text/70">
          <div className="flex items-start gap-2">
            <span className="text-cyber-accent">✓</span>
            <span>Use at least 12 characters, preferably 16 or more</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyber-accent">✓</span>
            <span>Include a mix of uppercase, lowercase, numbers, and symbols</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyber-accent">✓</span>
            <span>Avoid dictionary words, personal information, and common patterns</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyber-accent">✓</span>
            <span>Use unique passwords for each account</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyber-accent">✓</span>
            <span>Consider using a password manager</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyber-accent">✓</span>
            <span>Enable two-factor authentication when available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordTools;
