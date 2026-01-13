import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'mohamedfayd97@gmail.com' },
    { icon: Phone, title: 'Phone', value: '+20 1149663112' },
    { icon: MapPin, title: 'Office', value: 'Benha, Egypt' },
    { icon: MapPin, title: 'Office', value: 'Nasr City, Cairo, Egypt' },
    { icon: Clock, title: 'Hours', value: 'Sun - Thu | 9AM - 6PM' },
  ]

  const locations = [
    {
      title: 'Benha Office',
      address: 'Benha, Egypt',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3438.59529921274!2d31.189442!3d30.475899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI4JzMzLjIiTiAzMcKwMTEnMjIuMCJF!5e0!3m2!1sar!2seg!4v1768140453619!5m2!1sar!2seg'
    },
    {
      title: 'Cairo Office',
      address: 'Nasr City, Cairo, Egypt',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3452.883768621656!2d31.355966999999996!3d30.068866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA0JzA3LjkiTiAzMcKwMjEnMjEuNSJF!5e0!3m2!1sar!2seg!4v1768228537182!5m2!1sar!2seg'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.send(
      'service_jfojsbs',
      'template_xgw7vys',
      formData,
      'T5S32ENnzR6pPXCXx'
    ).then(
      () => {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        })
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 4000)
      },
      () => {
        setSubmitStatus('error')
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 4000)
      }
    )
  }

  return (
    <section className="bg-gray-50 min-h-screen py-28 relative">
      <div className="container-custom">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Get in Touch with Al Fayed
          </h1>
          <p className="text-gray-600 text-lg">
            Have questions, requests, or need consultation? Fill the form or contact us directly.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
                  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl">
                    <Icon size={28} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Form + Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <p className="font-semibold">Message Sent!</p>
                <p>We will get back to you shortly.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                <p className="font-semibold">Failed to send</p>
                <p>Please try again later.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required className="w-full p-4 border rounded-xl" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full p-4 border rounded-xl" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-4 border rounded-xl" />
              <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company / Institution" className="w-full p-4 border rounded-xl" />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required className="w-full p-4 border rounded-xl" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message *" rows="6" required className="w-full p-4 border rounded-xl resize-none" />

              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex justify-center gap-2">
                {isSubmitting ? 'Sending...' : <>Send Message <Send size={20} /></>}
              </button>
            </form>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-8"
          >
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold">{loc.title}</h3>
                  <p className="text-gray-600 text-sm">{loc.address}</p>
                </div>
                <iframe
                  title={loc.title}
                  src={loc.mapSrc}
                  className="w-full h-[320px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/201149663112"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform z-50"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  )
}
