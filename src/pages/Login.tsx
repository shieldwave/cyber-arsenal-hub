
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captcha: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-cyber-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-cyber-accent rounded-lg flex items-center justify-center text-3xl font-bold text-black mx-auto mb-4 animate-glow">
            O
          </div>
          <h1 className="text-3xl font-bold text-gradient mb-2">Login Override_</h1>
          <p className="text-cyber-text/70">Login to your account</p>
        </div>

        <div className="cyber-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
                className="terminal-input w-full px-4 py-3 rounded-md"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="terminal-input w-full px-4 py-3 rounded-md"
              />
            </div>

            <div>
              <div className="bg-cyber-card border border-cyber-border rounded-md p-4 mb-3 text-center">
                <div className="text-cyber-text/70 text-sm mb-2">Captcha Image</div>
                <div className="bg-black p-4 rounded text-cyber-accent font-mono text-lg">
                  ABC123
                </div>
              </div>
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                placeholder="Enter the text above"
                required
                className="terminal-input w-full px-4 py-3 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyber-accent text-black py-3 rounded-md font-semibold hover:bg-cyber-accent/90 transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-6 text-cyber-text/70">
            Don't have an account?{' '}
            <Link to="/register" className="text-cyber-accent hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
