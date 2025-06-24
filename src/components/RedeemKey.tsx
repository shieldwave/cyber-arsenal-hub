
import { useState } from 'react';
import { Gift } from 'lucide-react';

const RedeemKey = () => {
  const [key, setKey] = useState('');
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [message, setMessage] = useState('');

  const handleRedeem = async () => {
    if (!key.trim()) {
      setMessage('Please enter an activation key');
      return;
    }

    setIsRedeeming(true);
    setMessage('');

    // Simulate key redemption
    setTimeout(() => {
      setMessage('Key redeemed successfully!');
      setKey('');
      setIsRedeeming(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="cyber-card max-w-md mx-auto">
        <div className="text-center mb-6">
          <Gift className="w-16 h-16 text-cyber-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gradient mb-2">Redeem Key</h2>
          <p className="text-cyber-text/70">Enter your activation key to get access</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-cyber-text/70 text-sm mb-2">Activation Key</label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Override_KEY"
              className="terminal-input w-full px-4 py-3 rounded-md"
            />
          </div>
          
          <button
            onClick={handleRedeem}
            disabled={isRedeeming}
            className="w-full bg-cyber-accent text-black py-3 rounded-md font-semibold hover:bg-cyber-accent/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Gift className="w-4 h-4" />
            {isRedeeming ? 'Redeeming...' : 'Redeem Key'}
          </button>
          
          {message && (
            <div className={`p-3 rounded-md text-center ${
              message.includes('successfully') 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RedeemKey;
