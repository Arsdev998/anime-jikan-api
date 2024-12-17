import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 shadow-md border-b sticky top-0 z-50">
      <div>
        <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300">
          HeroNime
        </h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/trend"
              className="hover:text-blue-600 transition duration-300"
            >
              Trend
            </Link>
          </li>
          <li>
            <Link
              href="/top-anime"
              className="hover:text-blue-600 transition duration-300"
            >
              Top Anime
            </Link>
          </li>
          <li>
            <Link
              href="/top-character"
              className="hover:text-blue-600 transition duration-300"
            >
              Top Character
            </Link>
          </li>
          <li>
            <Link
              href="/top-reviews"
              className="hover:text-blue-600 transition duration-300"
            >
              Top Reviews
            </Link>
          </li>
          <li>
            <Link
              href="/top-manga"
              className="hover:text-blue-600 transition duration-300"
            >
              Top Manga
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
