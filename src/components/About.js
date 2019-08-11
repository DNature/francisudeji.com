import { useState } from 'react'
import axios from 'axios'

function About({ posts: p }) {
  const [posts, setPosts] = useState(p)
  return (
    <section className='about bg-primary' id='about'>
      <div className='container mx-auto p-6'>
        <h1 className='uppercase tracking-wide text-xl text-indigo-600 font-bold mb-6'>
          About
        </h1>
        {posts.map(p => (
          <div className='text-white' key={p.title}>
            {p.title}
          </div>
        ))}

        <ul className='flex mt-3'>
          <li className='flex-1 mr-2'>
            <a
              className='text-center block border-b-4 border-indigo-600 rounded text-white hover:text-gray-200 py-2 px-4'
              href='#'
            >
              Experience
            </a>
          </li>
          <li className='flex-1 mr-2'>
            <a
              className='text-center block rounded py-2 px-4  text-gray-500 hover:text-white'
              href='#'
            >
              Education
            </a>
          </li>
          <li className='flex-1 mr-2'>
            <a
              className='text-center block rounded py-2 px-4  text-gray-500 hover:text-white'
              href='#'
            >
              Skills
            </a>
          </li>
        </ul>

        <div />
      </div>
    </section>
  )
}

export default About
