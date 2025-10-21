import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {

  const menuItems = [
    { href: "#products", label: "Products" },
    { href: "#design", label: "Design your own" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "/login", label: "login" }
  ];

  return (
    <nav className="bg-white w-full h-24">
      <div className='flex items-center justify-between mx-auto max-w-[1300px] h-full px-4'>

        {/* logo + overskrift */}
        <Link href={"/"}>
          <div className='flex items-center space-x-2'>
            <figure>
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </figure>
            <figcaption>
              <p className="font-black uppercase text-2xl text-black">Boston gaming</p>
            </figcaption>
          </div>
        </Link>

        {/* nav items */}
        <ul className="hidden md:flex space-x-8 uppercase">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="font-black text-black">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
