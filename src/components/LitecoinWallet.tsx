
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
    <div className="space-y-6">
      <div className="cyber-card">
        <h2 className="text-xl font-bold text-gradient mb-4">Temporary Litecoin Wallet</h2>
        <p className="text-cyber-text/70 mb-6">Create your temporary LTC wallet for quick transfers</p>
        
        <button
          onClick={createWallet}
          className="cyber-button px-6 py-3 rounded-md flex items-center gap-2"
        >
          <Key className="w-4 h-4" />
          Create Wallet
        </button>
      </div>

      {wallet && (
        <div className="cyber-card">
          <h3 className="text-lg font-semibold mb-4 text-gradient">Wallet Info</h3>
          
          <div className="space-y-4">
            <div className="bg-black p-4 rounded-md">
              <p className="text-cyber-text/70 text-sm">Address:</p>
              <p className="text-cyber-accent font-mono">{wallet.address}</p>
            </div>
            
            <div className="bg-black p-4 rounded-md">
              <p className="text-cyber-text/70 text-sm">Balance:</p>
              <p className="text-cyber-accent font-mono text-lg">{wallet.balance}</p>
            </div>
            
            <div>
              <h4 className="text-cyber-text mb-2">Recent Transactions:</h4>
              <ul className="space-y-1">
                {wallet.transactions.map((tx: string, index: number) => (
                  <li key={index} className="text-cyber-text/70 text-sm font-mono">
                    {tx}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {wallet && (
        <div className="cyber-card">
          <h3 className="text-lg font-semibold mb-4 text-gradient">Send LTC</h3>
          
          <div className="space-y-4">
            <input
              type="text"
              value={sendForm.address}
              onChange={(e) => setSendForm(prev => ({ ...prev, address: e.target.value }))}
              placeholder="Recipient LTC Address"
              className="terminal-input w-full px-4 py-3 rounded-md"
            />
            
            <input
              type="text"
              value={sendForm.amount}
              onChange={(e) => setSendForm(prev => ({ ...prev, amount: e.target.value }))}
              placeholder="Amount in LTC"
              className="terminal-input w-full px-4 py-3 rounded-md"
            />
            
            <button
              onClick={sendLTC}
              className="cyber-button px-6 py-3 rounded-md flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send LTC
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LitecoinWallet;
