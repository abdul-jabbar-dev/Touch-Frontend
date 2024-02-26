import React from 'react'

export default function Search() {
  return (
      <div className="flex justify-center mt-48 mb-4 w-full">
          <div className="relative">
              <div className="text-cPrimary-800 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round"  >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <circle cx="10" cy="10" r="7"></circle>
                      <line x1="21" y1="21" x2="15" y2="15"></line>
                  </svg>
              </div>
              <input className="bg-cPrimary-600 focus:outline-none focus:ring-1 focus:ring-cPrimary-700 rounded w-full text-sm text-cPrimary-900 placeholder-cPrimary-800   pl-10 py-2" type="text" placeholder="Search" />
          </div>
      </div>
  )
}
