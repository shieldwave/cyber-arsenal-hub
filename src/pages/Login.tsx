
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    captcha: ''
  });
  const [captchaText, setCaptchaText] = useState('ABC123');
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loginData.captcha !== captchaText) {
      setStatusMessage({ text: 'Invalid captcha. Please try again.', type: 'error' });
      regenerateCaptcha();
      return;
    }
    
    setStatusMessage({ text: 'Logged in successfully!', type: 'success' });
    console.log('Login attempt:', loginData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const regenerateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Particles background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '40%', left: '30%', animationDelay: '4s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '80%', left: '60%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse" style={{ top: '30%', left: '70%', animationDelay: '3s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#838383] to-[#4c4c4c] rounded-lg flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 shadow-[0_12px_24px_rgba(255,255,255,0.3)] animate-logoFloat">
            O
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-br from-white to-[#b0b0b0] bg-clip-text text-transparent mb-2">
            Login Override_
          </h1>
          <p className="text-[#bcbcbc] font-medium">
            Access your cybersecurity toolkit
          </p>
        </div>

        <div className="bg-[rgba(26,26,26,0.9)] backdrop-blur-[20px] border border-[rgba(255,255,255,0.3)] rounded-[24px] p-10 relative overflow-hidden transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.6)] hover:transform hover:translate-y-[-8px] hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(137,137,137,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(0,0,0,0.05)] opacity-0 hover:opacity-100 transition-opacity duration-400"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-[1]">
            <div>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                placeholder="Username"
                required
                className="w-full px-6 py-4 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(255,255,255,0.3)] rounded-2xl text-white text-lg font-medium transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(160,160,160,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-6 py-4 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(255,255,255,0.3)] rounded-2xl text-white text-lg font-medium transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(160,160,160,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70"
              />
            </div>

            <div>
              <div className="bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(255,255,255,0.3)] rounded-2xl p-6 mb-4 text-center">
                <div className="text-[#b0b0b0] text-sm mb-3 font-medium">Captcha Image</div>
                <div className="bg-black p-4 rounded-xl text-white font-mono text-2xl font-bold tracking-wider select-none cursor-pointer hover:bg-gray-900 transition-colors" onClick={regenerateCaptcha}>
                  {captchaText}
                </div>
                <div className="text-xs text-[#888] mt-2">Click to regenerate</div>
              </div>
              <input
                type="text"
                name="captcha"
                value={loginData.captcha}
                onChange={handleChange}
                placeholder="Enter the text above"
                required
                className="w-full px-6 py-4 bg-[rgba(15,15,15,0.8)] border-2 border-[rgba(255,255,255,0.3)] rounded-2xl text-white text-lg font-medium transition-all duration-300 backdrop-blur-[10px] focus:outline-none focus:border-[#c7c7c7] focus:shadow-[0_0_0_4px_rgba(160,160,160,0.1)] focus:scale-[1.02] placeholder:text-[#717171] placeholder:opacity-70"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-br from-[#ececec] to-[#8d8d8d] border-none rounded-2xl text-white text-lg font-bold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_12px_24px_rgba(255,255,255,0.3)] hover:transform hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_16px_32px_rgba(255,255,255,0.4)] active:transform active:translate-y-0 active:scale-[0.98]"
            >
              Login
            </button>
          </form>

          {statusMessage.text && (
            <div className={`mt-4 flex items-center gap-3 px-5 py-4 rounded-xl animate-[slideIn_0.3s_ease] relative z-[1] ${
              statusMessage.type === 'success' 
                ? 'bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] text-[#22c55e]' 
                : 'bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] text-[#ef4444]'
            }`}>
              <div className="w-5 h-5">!</div>
              <div className="font-medium">{statusMessage.text}</div>
            </div>
          )}

          <div className="text-center mt-6 space-y-2 relative z-[1]">
            <p className="text-[#bcbcbc]">
              Don't have an account?{' '}
              <Link to="/register" className="text-white hover:underline font-medium">
                Register here
              </Link>
            </p>
            <p className="text-[#bcbcbc]">
              <Link to="/" className="text-white hover:underline font-medium">
                Back to Dashboard
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
