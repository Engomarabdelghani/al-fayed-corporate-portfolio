import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, XCircle } from 'lucide-react'

    export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null) // success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)

        emailjs
        .send(
            'SERVICE_ID',
            'TEMPLATE_ID',
            formData,
            'PUBLIC_KEY'
        )
        .then(
            () => {
            setStatus('success')
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: '',
            })
            setLoading(false)
            },
            () => {
            setStatus('error')
            setLoading(false)
            }
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
            <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
            <FormField label="Company Name" name="company" value={formData.company} onChange={handleChange} />
        </div>

        {/* Subject */}
        <FormField label="Subject" name="subject" value={formData.subject} onChange={handleChange} required />

        {/* Message */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
            </label>
            <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                        focus:border-primary-500 focus:ring-2 focus:ring-primary-200
                        transition outline-none"
            placeholder="Write your message here..."
            />
        </div>

        {/* Button */}
        <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2
                    rounded-xl bg-primary-600 px-6 py-3 text-white font-medium
                    hover:bg-primary-700 transition
                    disabled:opacity-60 disabled:cursor-not-allowed"
        >
            {loading ? 'Sending...' : 'Send Message'}
            <Send size={18} />
        </button>

        {/* Status */}
        {status === 'success' && (
            <StatusMessage
            icon={<CheckCircle className="text-green-600" />}
            text="Your message has been sent successfully. We’ll contact you shortly."
            />
        )}

        {status === 'error' && (
            <StatusMessage
            icon={<XCircle className="text-red-600" />}
            text="Something went wrong. Please try again later."
            />
        )}
        </form>
    )
    }

    /* ---------------- Components ---------------- */

    function FormField({ label, name, type = 'text', value, onChange, required }) {
    return (
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                    focus:border-primary-500 focus:ring-2 focus:ring-primary-200
                    transition outline-none"
        />
        </div>
    )
    }

    function StatusMessage({ icon, text }) {
    return (
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 border border-gray-200 p-4">
        {icon}
        <p className="text-sm text-gray-700">{text}</p>
        </div>
    )
    }
