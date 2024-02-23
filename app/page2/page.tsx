import React from 'react'
import Link from 'next/link'

function Page() {
  return (
    <div className='mx-auto h-screen py-40 bg-emerald-500 rounded max-w-lg'>
      <Link href="/new-page">
        <p>Go to /new-page via next Link</p>
      </Link>
      <a href="/new-page">Go to /new-page via a tag</a>
      <Link href="/">
        <p>Go to homepage via next Link</p>
      </Link>
      <a href="/">Go to homepage via a tag</a>
    </div>
  )
}

export default Page

