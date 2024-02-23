import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div className='mx-auto h-screen py-40 bg-orange-500 rounded max-w-lg'>
      <Link href="/page2">
        <p>Go to /page2 via next Link</p>
      </Link>
      <a href="/page2">Go to /page2 via a tag</a>
      <Link href="/">
        <p>Go to homepage via next Link</p>
      </Link>
      <a href="/">Go to homepage via a tag</a>
    </div>
  )
}

export default Page