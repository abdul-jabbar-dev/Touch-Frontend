import React from 'react'

export default function UserSearchBar() {
  return (
      <label className="px-3">
          <input className="rounded-md p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
              placeholder="Search..." />
      </label>
  )
}
