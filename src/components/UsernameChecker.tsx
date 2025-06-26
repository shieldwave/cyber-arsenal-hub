
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
    <div className="max-w-[1000px] mx-auto px-5">
      <div className="text-center mb-15">
        <h2 className="text-[42px] font-extrabold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent mb-3 tracking-tight">
          Username Checker
        </h2>
        <p className="text-[#b8b8b8] text-lg font-medium">Check username availability across multiple platforms</p>
      </div>
      
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-12 relative overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(121,121,121,0.15)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(128,128,128,0.05)] before:to-[rgba(8,8,8,0.05)] before:opacity-100">
        <div className="relative z-[1] mb-8">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username to check..."
            className="w-full px-6 py-5 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white text-lg font-medium font-sans transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70"
          />
        </div>
        
        <button
          onClick={checkAvailability}
          disabled={isChecking}
          className="cyber-button px-4 py-2 rounded-md flex items-center gap-2 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Search className="w-4 h-4" />
          {isChecking ? 'Checking...' : 'Check Availability'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-10 bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(64,64,64,0.05)] before:to-[rgba(255,255,255,0.05)] before:opacity-100">
          <div className="flex justify-between items-center mb-6 relative z-[1]">
            <h3 className="text-2xl font-bold text-white">
              Checking Results for "{username}"
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-[1]">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border ${
                  result.available 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-red-500 bg-red-500/10'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{result.platform}</span>
                  <span className={`text-sm font-medium ${
                    result.available ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {result.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {isChecking && (
            <div className="mt-4 text-center text-[#d4d4d4] relative z-[1]">
              Checking {platforms.length - results.length} more platforms...
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UsernameChecker;
