import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='Box-1'>
          <h3>
            Work In Progress
          </h3>
        </div>
        <div className='Box'>
          <h3>
            Pages :
          </h3>
          <ul>
            <li><a className='text-sm underline' href="/about">about</a></li>
            <li><a className='text-sm underline' href="/projects">projects</a></li>
          </ul>
        </div>
        <div className='Box'>
          <h3>
            Contacts :
          </h3>
          <ul>
            <li><a className='underline' href="https://mail.google.com/mail/u/0/#inbox" target="_blank">aniketwakalkar23@gmail.com</a></li>
            <li><a className='underline' href="https://www.linkedin.com/in/aniket-wakalkar-b8a418160" target="_blank">linkedin.com/in/aniket-wakalkar-b8a418160</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer