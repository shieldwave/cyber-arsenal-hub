
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle registration logic here
    console.log('Registration attempt:', formData);
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
          <h1 className="text-3xl font-bold text-gradient mb-2">Register Override_</h1>
          <p className="text-cyber-text/70">Create your account</p>
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
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
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
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="terminal-input w-full px-4 py-3 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyber-accent text-black py-3 rounded-md font-semibold hover:bg-cyber-accent/90 transition-colors"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-6 text-cyber-text/70">
            Already have an account?{' '}
            <Link to="/login" className="text-cyber-accent hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
