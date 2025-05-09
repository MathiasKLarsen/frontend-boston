import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='pt-10'>
      <section className="bg-neutral-700 w-full h-[200px] grid grid-cols-1 sm:grid-cols-3 gap-10 items-center text-center">
        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase">Location</h3>
          <p className="text-sm">Duevej 85</p>
          <p className="text-sm">8500 Grenå</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase">Around the Web</h3>
          <div className="flex justify-center space-x-4">
            <Link href="https://facebook.com">
              <p className="text-sm mb-2 hover:text-blue-500">Facebook</p>
            </Link>
            <Link href="https://twitter.com">
              <p className="text-sm mb-2 hover:text-blue-400">Twitter</p>
            </Link>
            <Link href="https://linkedin.com">
              <p className="text-sm mb-2 hover:text-blue-700">LinkedIn</p>
            </Link>
            <Link href="https://dribble.com">
              <p className="text-sm mb-2 hover:text-indigo-500">Dribble</p>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 uppercase">About Boston Gaming</h3>
          <p className="text-sm">
            Boston Gaming is a small newly founded company, driven by the passion of custom PC builds.
          </p>
        </div>
      </section>

      <div className="text-center my-5">
        <p className="text-sm">Copyright &copy; Boston Gaming</p>
      </div>
    </footer>
  )
}

export default Footer
