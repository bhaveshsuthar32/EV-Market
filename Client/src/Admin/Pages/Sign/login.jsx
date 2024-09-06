import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginData } from '@Service/api';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await loginData({ email, password });
        if (response.status === 200) {
          alert("Login successful");
          // Store token in local storage
          localStorage.setItem('token', response.data.token);
          
          // Start the logout timer
          startLogoutTimer();
  
          navigate("/dashboard"); // Navigate to home page on successful login
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        const errorMessage = error.response?.data?.error || "Failed to login. Please check your credentials.";
        alert(errorMessage);
      }
    };
  
    const startLogoutTimer = () => {
      // Set a timer to log out the user after 2 minutes (120000 ms)
      setTimeout(() => {
        handleLogout();
      }, 120000); // 2 minutes
    };
  
    const handleLogout = () => {
      // Clear token from local storage
      localStorage.removeItem('token');
      console.log("Logged out due to token expiration.");
      // alert("You have been logged out due to inactivity.");
      navigate('/dashboard/login'); // Navigate to login page
    };
  
    // Optional: Check if the user is already logged in and redirect
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        // If token exists, navigate to home page
        // navigate('/dashboard');
        navigate('');
      }
    }, [navigate]);
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
                <Link to={"/dashboard/sign"}>
                    Sign-Up
                </Link>
            </form>
        </div>
    );
};

export default Login;