import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {

  const menuItems = [
    { href: "#products", label: "Products" },
    { href: "#design", label: "Design your own" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed gradient-nav w-full shadow-md px-6 py-4 flex bg-white items-center justify-evenly">
      <div className="flex items-center space-x-4">
        <Image 
          src="/logo.png" 
          alt="Logo"
          width={50}
          height={50}
          className='text-black'
        />
        <h2 className="text-black font-bold uppercase">Boston gaming</h2> {/* Make the h2 text bold and uppercase */}
      </div>
      <div>
        <ul className="flex space-x-6">
          {menuItems.map(({ href, label }, index) => (
            <li key={index}>
              <Link href={href} className="text-black uppercase font-bold">
                {label} {/* Make menu items text bold and uppercase */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
