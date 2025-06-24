
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
    <div className="max-w-[800px] mx-auto px-5">
      <div className="text-center mb-15">
        <h2 className="text-[42px] font-extrabold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent mb-3 tracking-tight">
          Redeem Key
        </h2>
        <p className="text-[#9f9f9f] text-lg font-medium">Enter your activation key to get access.</p>
      </div>
      
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-12 relative overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(150,150,150,0.15)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(203,203,203,0.05)] before:to-[rgba(77,77,77,0.05)] before:opacity-100 before:transition-opacity before:duration-[0.4s]">
        <div className="relative z-[1] flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-base font-semibold text-white tracking-[0.5px]" htmlFor="activationKey">
              Activation Key
            </label>
            <input
              id="activationKey"
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Override_KEY"
              className="w-full px-6 py-5 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(255,255,255,0.3)] rounded-2xl text-white text-lg font-medium font-mono tracking-[2px] text-center uppercase transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(160,160,160,0.1)] focus:scale-[1.02] placeholder:text-[#787878] placeholder:opacity-70"
            />
          </div>
          
          <button
            onClick={handleRedeem}
            disabled={isRedeeming}
            className="w-full px-8 py-5 bg-gradient-to-br from-[#ececec] to-[#8d8d8d] border-none rounded-2xl text-white text-lg font-bold cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden shadow-[0_12px_24px_rgba(255,255,255,0.3)] hover:transform hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_16px_32px_rgba(255,255,255,0.4)] active:transform active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
          >
            <Gift className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
            <span>{isRedeeming ? 'Redeeming...' : 'Redeem Key'}</span>
          </button>
          
          {message && (
            <div className={`flex items-center gap-3 px-5 py-4 rounded-xl mt-5 animate-[slideIn_0.3s_ease] ${
              message.includes('successfully') 
                ? 'bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)]' 
                : 'bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)]'
            }`}>
              <div className={`w-6 h-6 ${
                message.includes('successfully') ? 'text-[#22c55e]' : 'text-[#ef4444]'
              }`}>
                <Gift className="w-full h-full" />
              </div>
              <div className={`text-base font-medium ${
                message.includes('successfully') ? 'text-[#22c55e]' : 'text-[#ef4444]'
              }`}>
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RedeemKey;
