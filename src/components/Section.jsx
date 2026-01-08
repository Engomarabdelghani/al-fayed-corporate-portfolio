import { motion } from 'framer-motion'

export default function Section({ 
  children, 
  className = '', 
  bgColor = 'bg-white',
  id = ''
}) {
  return (
    <section 
      id={id}
      className={`section-padding ${bgColor} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}
