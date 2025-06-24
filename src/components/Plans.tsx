
import { Check, X, ArrowRight } from 'lucide-react';

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
    <div className="max-w-[1000px] mx-auto p-10">
      <div className="text-center mb-15">
        <h2 className="text-[42px] font-extrabold text-white mb-4 tracking-tight text-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Subscription Plans
        </h2>
        <p className="text-lg text-[#bcbcbc] font-medium">Choose the perfect plan for your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden p-10 rounded-3xl transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer
              ${plan.popular 
                ? 'bg-[rgba(26,26,26,0.9)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.5)] before:absolute before:inset-[-2px] before:bg-gradient-to-br before:from-[#292929] before:via-[#656565] before:to-[#292929] before:rounded-[26px] before:z-[-1] before:opacity-70' 
                : 'bg-[rgba(26,26,26,0.9)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.3)] before:absolute before:inset-[-2px] before:bg-gradient-to-br before:from-[rgba(81,81,81,0.4)] before:to-[rgba(0,0,0,0.4)] before:rounded-[26px] before:z-[-1] before:opacity-30'
              }
              hover:transform hover:translate-y-[-8px] hover:scale-[1.02] hover:border-[rgba(255,255,255,0.6)] hover:shadow-[0_30px_60px_rgba(137,137,137,0.2)]
            `}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="inline-block px-5 py-2 bg-gradient-to-br from-[#c0c0c0] to-[#656565] border-transparent rounded-full text-xs font-bold tracking-wider text-white animate-pulse">
                  ULTRA
                </span>
              </div>
            )}
            
            {plan.current && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="inline-block px-5 py-2 bg-[rgba(130,130,130,0.2)] border border-[rgba(255,255,255,0.4)] rounded-full text-xs font-bold tracking-wider text-[#dbdbdb]">
                  CURRENT
                </span>
              </div>
            )}

            <div className="text-center mb-8 relative z-[1]">
              <div className="flex items-baseline justify-center gap-1 mb-5">
                <span className="text-2xl font-semibold text-white">$</span>
                <span className="text-5xl font-extrabold text-white leading-none text-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">
                  {plan.price.toFixed(2)}
                </span>
                <span className="text-lg font-medium text-[#e4e4e4]">/{plan.period}</span>
              </div>
            </div>

            <div className="mb-10 relative z-[1]">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3 py-3 text-white text-[15px] font-medium leading-[1.4]">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-white flex-shrink-0" />
                  )}
                  <span className={feature.included ? 'text-white' : 'text-[#e0e0e0]'}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={plan.popular ? "https://override.mysellauth.com/product/override-ultra" : "#"}
              className={`
                w-full px-6 py-4 rounded-2xl font-semibold text-base cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 relative z-[1] text-white no-underline
                ${plan.current
                  ? 'bg-[rgba(155,155,155,0.1)] border-2 border-[rgba(255,255,255,0.3)] cursor-not-allowed'
                  : plan.popular
                  ? 'bg-gradient-to-br from-[#bdbdbd] to-[#676767] border-[#ffffff] hover:bg-gradient-to-br hover:from-[#bbbbbb] hover:to-[#676767] hover:transform hover:translate-y-[-2px] hover:scale-[1.02]'
                  : 'bg-[rgba(155,155,155,0.1)] border-2 border-[rgba(255,255,255,0.3)] hover:bg-[rgba(151,151,151,0.2)] hover:border-[rgba(255,255,255,0.6)] hover:transform hover:translate-y-[-2px]'
                }
              `}
            >
              <span>{plan.current ? 'Current' : `Choose ${plan.name}`}</span>
              {plan.popular && <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
