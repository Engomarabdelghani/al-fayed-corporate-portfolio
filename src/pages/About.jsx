import { motion } from 'framer-motion'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoImg from '../images/logo.png'

export default function About() {
  const highlights = [
    'Advanced engineering technologies and precision devices',
    'Partnership with leading universities and institutions',
    'Expert technical support and consultation',
    'Innovative solutions for academic and industrial sectors',
    'Commitment to sustainability and excellence',
    'Years of trusted collaboration and success',
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
          <h1 className="text-primary-900 mb-6">About Al Fayed</h1>
          <p className="text-xl text-gray-700">
            A bridge between global technology and local innovation, dedicated to advancing engineering education and industrial solutions.
          </p>
        </motion.div>
      </Section>

      {/* Company Overview */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-full h-96 rounded-3xl shadow-xl relative overflow-hidden
                      bg-[#Fffff] border border-slate-200"
          >
            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={logoImg}
                alt="Company Logo"
                className="w-150 h-auto
                          object-contain
                          brightness-110
                          contrast-110
                          opacity-90"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gradient mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Al Fayed for Supplies, Import, Export & Contracting is not just a supplier—we are a strategic partner providing advanced engineering technologies and precision devices to support construction, education, and innovation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over 15 years of experience, we have built strong partnerships with universities, government entities, and corporate clients, establishing ourselves as a trusted name in delivering excellence and driving innovation forward.
            </p>
            <Link to="/vision-mission">
              <Button variant="primary" size="lg">
                Learn Our Vision <ArrowRight className="ml-2 inline-block" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Key Highlights */}
      <Section bgColor="bg-secondary-50">
        <SectionTitle
          title="Why Choose Al Fayed?"
          subtitle="Comprehensive expertise and commitment to your success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <CheckCircle size={24} className="text-primary-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Sectors We Serve */}
      <Section bgColor="bg-white">
        <SectionTitle
          title="Sectors We Serve"
          subtitle="Supporting innovation across multiple industries"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Academic Institutions', description: 'Supporting universities with cutting-edge technologies and training programs.' },
            { title: 'Construction & Engineering', description: 'Providing advanced equipment and technical expertise for complex projects.' },
            { title: 'Research & Development', description: 'Enabling innovation through specialized tools and professional consultation.' },
          ].map((sector, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {sector.title}
                </h3>
                <p className="text-gray-600">
                  {sector.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-gradient-primary" className="text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6">Join Our Growing Network</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how Al Fayed can transform your institution's capabilities.
          </p>
          <Link to="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Get in Touch <ArrowRight className="ml-2 inline-block" size={20} />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
