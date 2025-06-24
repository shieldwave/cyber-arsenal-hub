
import { useState } from 'react';
import { Search } from 'lucide-react';

const UsernameChecker = () => {
  const [username, setUsername] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const platforms = [
    'Twitter', 'Instagram', 'GitHub', 'LinkedIn', 'Reddit', 
    'TikTok', 'YouTube', 'Facebook', 'Discord', 'Twitch'
  ];

  const checkAvailability = async () => {
    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }

    setIsChecking(true);
    setResults([]);

    // Simulate checking each platform
    for (let i = 0; i < platforms.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const isAvailable = Math.random() > 0.5;
      setResults(prev => [...prev, {
        platform: platforms[i],
        available: isAvailable,
        status: isAvailable ? 'Available' : 'Taken'
      }]);
    }

    setIsChecking(false);
  };

  return (
    <div className="space-y-6">
      <div className="cyber-card">
        <h2 className="text-xl font-bold text-gradient mb-4">Username Checker</h2>
        <p className="text-cyber-text/70 mb-6">Check username availability across multiple platforms</p>
        
        <div className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username to check..."
            className="terminal-input w-full px-4 py-3 rounded-md"
          />
          
          <button
            onClick={checkAvailability}
            disabled={isChecking}
            className="cyber-button px-6 py-3 rounded-md flex items-center gap-2 disabled:opacity-50"
          >
            <Search className="w-4 h-4" />
            {isChecking ? 'Checking...' : 'Check Availability'}
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="cyber-card">
          <h3 className="text-lg font-semibold mb-4 text-gradient">
            Checking Results for "{username}"
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded-md border ${
                  result.available 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-red-500 bg-red-500/10'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-cyber-text font-medium">{result.platform}</span>
                  <span className={`text-sm ${
                    result.available ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {result.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {isChecking && (
            <div className="mt-4 text-center text-cyber-text/70">
              Checking {platforms.length - results.length} more platforms...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UsernameChecker;
