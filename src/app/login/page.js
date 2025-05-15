'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Both email and password are required.');
            return;
        }

        try {
            const res = await fetch('http://localhost:5039/login/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
            throw new Error('Invalid credentials');
            }

            const data = await res.json();

            // Optional: Store token or session info from `data` if needed
            localStorage.setItem('token', data.token);

            // Redirect on successful login
            router.push('/admin');
        } catch (err) {
            setError('Invalid credentials, please try again.');
        }
    };

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        router.push("/admin");
      }
    }, [router])
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-800">
            <div className="w-full max-w-md bg-neutral-900 p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6 text-white">Admin Login</h1>
                {error && <p className="text-red-400 text-center mb-4">{error}</p>}

                <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-200">Email</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-neutral-800 border border-neutral-700 text-white rounded-md"
                    placeholder="Enter your email"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-200">Password</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-neutral-800 border border-neutral-700 text-white rounded-md"
                    placeholder="Enter your password"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full uppercase bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 transition"
                >
                    Login
                </button>
                <button
                    type="button"
                    className="w-full uppercase bg-gray-600 text-white py-3 rounded-md hover:bg-gray-700 transition"
                >
                    <Link href={"/"}>
                        Go back
                    </Link>
                </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
