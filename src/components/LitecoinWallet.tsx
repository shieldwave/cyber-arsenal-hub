
import { useState } from 'react';
import { Key, Send } from 'lucide-react';

const LitecoinWallet = () => {
  const [wallet, setWallet] = useState<any>(null);
  const [sendForm, setSendForm] = useState({ address: '', amount: '' });

  const createWallet = () => {
    // Simulate wallet creation
    const mockWallet = {
      address: 'LdP8Qox5MmqbwdewwCnrD2hsNSDQqfvxX7',
      balance: '0.00234 LTC',
      transactions: [
        'Received 0.001 LTC from Lc8x...',
        'Sent 0.0005 LTC to Lb3k...',
        'Received 0.002 LTC from Ld9m...'
      ]
    };
    setWallet(mockWallet);
  };

  const sendLTC = () => {
    if (!sendForm.address || !sendForm.amount) {
      alert('Please fill in all fields');
      return;
    }
    alert(`Sending ${sendForm.amount} LTC to ${sendForm.address}`);
    setSendForm({ address: '', amount: '' });
  };

  return (
    <div className="max-w-[1000px] mx-auto px-5">
      <div className="text-center mb-15">
        <h2 className="text-[42px] font-extrabold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent mb-3 tracking-tight">
          Temporary Litecoin Wallet
        </h2>
        <p className="text-[#b8b8b8] text-lg font-medium">Create your temporary LTC wallet for quick transfers</p>
      </div>
      
      <div className="bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-12 relative overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.4)] hover:transform hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(121,121,121,0.15)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(128,128,128,0.05)] before:to-[rgba(8,8,8,0.05)] before:opacity-100">
        <button
          onClick={createWallet}
          className="cyber-button px-4 py-2 rounded-md flex items-center gap-2 w-full justify-center"
        >
          <Key className="w-4 h-4" />
          Create Wallet
        </button>
      </div>

      {wallet && (
        <div className="mt-10 bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(64,64,64,0.05)] before:to-[rgba(255,255,255,0.05)] before:opacity-100">
          <div className="flex justify-between items-center mb-6 relative z-[1]">
            <h3 className="text-2xl font-bold text-white">Wallet Info</h3>
            <span className="text-sm text-[#d4d4d4] font-medium">Last 5 transactions</span>
          </div>
          
          <div className="relative z-[1] text-center mb-8">
            <div className="inline-block p-4 bg-white rounded-xl mb-4">
              <img src="/static/images/qr_placeholder.png" alt="QR Code" className="w-[120px] h-[120px]" />
            </div>
          </div>
          
          <div className="space-y-6 relative z-[1]">
            <div className="bg-[rgba(15,15,15,0.8)] p-6 rounded-xl border border-[rgba(255,255,255,0.1)]">
              <p className="text-[#999] text-sm mb-2">Address:</p>
              <p className="text-white font-mono text-lg break-all">{wallet.address}</p>
            </div>
            
            <div className="bg-[rgba(15,15,15,0.8)] p-6 rounded-xl border border-[rgba(255,255,255,0.1)]">
              <p className="text-[#999] text-sm mb-2">Balance:</p>
              <p className="text-white font-mono text-2xl font-bold">{wallet.balance}</p>
            </div>
            
            <div className="bg-[rgba(15,15,15,0.8)] p-6 rounded-xl border border-[rgba(255,255,255,0.1)]">
              <h4 className="text-white mb-4 font-semibold">Recent Transactions:</h4>
              <ul className="space-y-2">
                {wallet.transactions.map((tx: string, index: number) => (
                  <li key={index} className="text-[#ccc] text-sm font-mono p-2 bg-[rgba(0,0,0,0.3)] rounded">
                    {tx}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {wallet && (
        <div className="mt-10 bg-[rgba(26,26,26,0.8)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.2)] rounded-[20px] p-12 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(128,128,128,0.05)] before:to-[rgba(8,8,8,0.05)] before:opacity-100">
          <div className="relative z-[1] mb-8 flex gap-4 flex-wrap">
            <input
              type="text"
              value={sendForm.address}
              onChange={(e) => setSendForm(prev => ({ ...prev, address: e.target.value }))}
              placeholder="Recipient LTC Address"
              className="flex-1 min-w-[300px] px-6 py-4 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white text-base font-medium font-sans transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70"
            />
            
            <input
              type="text"
              value={sendForm.amount}
              onChange={(e) => setSendForm(prev => ({ ...prev, amount: e.target.value }))}
              placeholder="Amount in LTC"
              className="flex-1 min-w-[200px] px-6 py-4 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(234,234,234,0.3)] rounded-2xl text-white text-base font-medium font-sans transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(133,133,133,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70"
            />
          </div>
          
          <div className="flex gap-4 justify-center relative z-[1]">
            <button
              onClick={sendLTC}
              className="cyber-button px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send LTC
            </button>
            
            <button className="cyber-button px-4 py-2 rounded-md flex items-center gap-2">
              <Key className="w-4 h-4" />
              Get Private Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LitecoinWallet;
