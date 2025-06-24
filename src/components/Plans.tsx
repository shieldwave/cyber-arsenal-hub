
import { Check, X } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Basic',
      price: 0.00,
      period: 'lifetime',
      current: true,
      features: [
        { name: 'Advanced IP Scanner', included: true },
        { name: 'AI Vuln Scanner', included: true },
        { name: 'Temp LTC Wallet', included: true },
        { name: 'Username checker', included: true },
        { name: 'Website Cloner', included: false },
        { name: 'Must have APIs', included: false }
      ]
    },
    {
      name: 'Ultra',
      price: 3.50,
      period: 'lifetime',
      current: false,
      popular: true,
      features: [
        { name: 'Advanced IP Scanner', included: true },
        { name: 'AI Vuln Scanner', included: true },
        { name: 'Website Cloner', included: true },
        { name: 'Temp LTC Wallet', included: true },
        { name: 'Username checker', included: true },
        { name: 'Prebought APIs', included: true }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gradient mb-2">Subscription Plans</h2>
        <p className="text-cyber-text/70">Choose the perfect plan for your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`cyber-card relative ${
              plan.popular ? 'border-cyber-accent' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyber-accent text-black px-3 py-1 rounded-full text-sm font-semibold">
                  ULTRA
                </span>
              </div>
            )}
            
            {plan.current && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyber-text text-cyber-bg px-3 py-1 rounded-full text-sm font-semibold">
                  CURRENT
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-cyber-text mb-2">
                <span className="text-xl">$</span>
                {plan.price.toFixed(2)}
                <span className="text-lg text-cyber-text/70">/{plan.period}</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${
                    feature.included ? 'text-cyber-text' : 'text-cyber-text/50'
                  }`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 rounded-md font-semibold transition-colors ${
                plan.current
                  ? 'bg-cyber-text/20 text-cyber-text cursor-not-allowed'
                  : plan.popular
                  ? 'bg-cyber-accent text-black hover:bg-cyber-accent/90'
                  : 'cyber-button'
              }`}
              disabled={plan.current}
            >
              {plan.current ? 'Current' : `Choose ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
