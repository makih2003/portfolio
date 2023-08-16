import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_ozd8h5j',
      'template_oas0lln',
      refForm.current,
      '5IWV_QaL-76LorkL1'
    ).then(
      () => {
        alert('Thank you. Message successfully sent.')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message. Please try again.')
      }
    )
  }

  return(
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>Contact Me</h1>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name="name" placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type="email" name="email" placeholder='Email' required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder='Message' name="message" required />
                </li>
                <li>
                  <input type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact