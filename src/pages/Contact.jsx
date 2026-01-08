import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'
import Card from '../components/Card'

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      setTimeout(() => {
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
        
        // Reset status after 3 seconds
        setTimeout(() => setSubmitStatus(null), 3000)
      }, 1000)
    } catch (error) {
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+20 1234567890',
      href: 'tel:+201234567890',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@alfayed.com',
      href: 'mailto:info@alfayed.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Cairo, Egypt',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      href: '#',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="bg-gradient-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-primary-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-700">
            Have questions or ready to start a partnership? We'd love to hear from you.
          </p>
        </motion.div>
      </Section>

      {/* Contact Info Cards */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="no-underline"
              >
                <Card hoverable={false} className="h-full">
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary-100 rounded-full">
                        <IconComponent size={32} className="text-primary-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 hover:text-primary-600 transition-colors">
                      {info.content}
                    </p>
                  </div>
                </Card>
              </motion.a>
            )
          })}
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section bgColor="bg-secondary-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card>
                <div className="p-8">
                  <h2 className="text-gradient mb-6">Send us a Message</h2>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                    >
                      <p className="font-semibold">Success!</p>
                      <p>Thank you for your message. We'll get back to you soon.</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                          placeholder="+20 1234567890"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company / Institution
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                          placeholder="Your Organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send className="ml-2 inline-block" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </Card>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <Card>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Quick Info
                  </h3>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        Response Time
                      </h4>
                      <p className="text-gray-600">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        Services
                      </h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Consultation</li>
                        <li>• Supply & Equipment</li>
                        <li>• After-Sales Support</li>
                        <li>• Training Programs</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        Preferred Contact
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Email us for detailed inquiries. Call for urgent matters.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-gradient mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and partnership process.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the typical timeline for implementing a solution?',
                a: 'Implementation timelines vary based on project scope. We typically conduct a discovery phase (1-2 weeks) followed by customization and deployment (2-8 weeks).',
              },
              {
                q: 'Do you offer support after implementation?',
                a: 'Yes, we provide comprehensive after-sales support including technical assistance, maintenance, and ongoing training for your team.',
              },
              {
                q: 'Can your services be customized for our specific needs?',
                a: 'Absolutely! All our services are tailored to meet your institution\'s unique requirements and goals.',
              },
              {
                q: 'What is your pricing model?',
                a: 'We provide customized quotes based on your specific needs. Contact us for a detailed proposal and pricing information.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary-600 transition-colors"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
