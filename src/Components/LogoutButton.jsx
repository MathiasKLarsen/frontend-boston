'use client';

import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // if stored
    router.push('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white hover:bg-red-600 p-2 rounded-md w-full text-left"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
