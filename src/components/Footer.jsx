import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='Box-1'>
          <h3>
            WORK IN PROGRESS
          </h3>
        </div>
        <div className='Box'>
          <h3>
            PAGES :
          </h3>
          <ul>
            <li><a className='text-sm underline' href="/about">About</a></li>
            <li><a className='text-sm underline' href="/projects">Projects</a></li>
          </ul>
        </div>
        <div className='Box'>
          <h3>
            CONTACTS :
          </h3>
          <ul>
            <li>
              <a className='underline' href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
                <img className='bg-white w-8 inline border border-white p-1 rounded-xl mr-3' src="https://img.icons8.com/?size=100&id=tnnUFgHrPmR0&format=png&color=000000" alt="gmail_icon" /> test@gmail.com
              </a>
            </li>
            <li>
              <a className='underline' href="https://www.linkedin.com/in/aniket-wakalkar-b8a418160" target="_blank" rel="noreferrer">
                <img className='bg-white w-8 inline border border-white p-1 rounded-xl mr-3' src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="gmail_icon" />linkedin.com/in/test
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}
export default Footer