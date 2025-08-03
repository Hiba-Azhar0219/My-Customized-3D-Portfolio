import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  //  service_2vsifcq
  //   public key: HDwaNveQSYDeBCDGZ
  const handleSubmit = async (e) => {
    e.preventDefaut()
    setLoading(true)

    try {
      await emailjs.send(
        'service_2vsifcq',
        'template_cyimvb9',
        {
          from_name: form.name,
          to_name: 'Hiba',
          from_email: form.email,
          to_email: 'yusraazhar2002@gmail.com',
          message: form.message,
        },
        'HDwaNveQSYDeBCDGZ'
      )
      setLoading(false)
      alert('message sent')
      setForm({})
    } catch (error) {
      setLoading(false)
      alert('something went wrong')
      console.log(error)
    }
  }
  return (
    <section className='c-space my-20'>
      <div className='relative  min-h-screen flex items-center justify-center flex-col'>
        <img
          src='/assets/terminal.png'
          alt='terminal window'
          className='absolute inset-0 min-h-screen'
        />
        <div className='contact-container'>
          <h3 className='head-text'>Contact Me</h3>
          <p className='text-lg text-white-600 mt-3'>
            Whether you are looking to build a website or improve exsiting
            platform, bring a unique project to life, I'm here to help
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'
          >
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                className='field-input'
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                placeholder='Smith'
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='smith@gmail.com'
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Your message</span>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='field-input'
                placeholder='I want to build.....'
              />
            </label>
            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send message'}
              <img
                src='/assets/arrow-up.png'
                alt='arrow-up'
                className='field-btn_arrow'
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
