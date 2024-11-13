
export default function Header() {
  return (
    <>
    <div className="px-4 sm:ml-64 border-b-[1px]">
    {/* Hide on mobile, show on medium screens and up */}
    <div className="nav justify-between items-center py-4 hidden md:flex">
      <div className="left-side flex items-center">
        <a href="/" className="text-gray-800 font-bold text-lg">
          Home
        </a>
        <a href="/" className="text-gray-800 font-bold text-lg">
          / Dashboard
        </a>
      </div>
      <div className="right-side flex items-center space-x-4">
        <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
        <div className="profile flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-8 h-8"
          />
          <span className="text-gray-800 font-medium">John Doe</span>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
