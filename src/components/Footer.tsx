import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="https://github.com/GiulianaGrijalba" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://e7.pngegg.com/pngimages/795/55/png-clipart-app-store-apple-logo-apple-text-logo.png" className="h-8" alt="Footer" />
              <span className="self-center text-2xl font-semibold text-gray-800">Apple Store</span>
            </Link>
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 justify-center space-x-4 md:space-x-6">
              <li>
                <Link href="https://github.com/GiulianaGrijalba" className="hover:underline">GitHub</Link>
              </li>
              <li>
                <Link href="https://github.com/GiulianaGrijalba" className="hover:underline">Giuliana Grijalba</Link>
              </li>
              <li>
                <Link href="mailto:giuliana.grijalba@gmail.com" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700" />
          <span className="block text-sm text-gray-500 text-center">© 2023 <Link href="https://flowbite.com/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
