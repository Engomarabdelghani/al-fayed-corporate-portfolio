import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Users, Award, Zap, BookOpen, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'

export default function Home() {
  const stats = [
    { icon: Award, label: 'Universities Served', value: '9+' },
    { icon: Users, label: 'Years of Experience', value: '15+' },
    { icon: Briefcase, label: 'Services', value: '4' },
  ]

  const services = [
    {
      icon: BookOpen,
      title: 'Consult Before You Order',
      description: 'Technical support from university professors, specialists, and expert engineers.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'Smart Supply',
      description: 'Providing the latest engineering technologies and advanced equipment.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Wrench,
      title: 'After-Sales Services',
      description: 'Continuous technical support and proactive maintenance.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Award,
      title: 'Workshop Training',
      description: 'Practical, hands-on workshops for engineering and academic institutions.',
      color: 'from-purple-500 to-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="bg-gradient-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-primary-600 rounded-full -top-20 -left-20 blur-3xl" />
          <div className="absolute w-96 h-96 bg-primary-400 rounded-full bottom-0 right-0 blur-3xl" />
        </div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-primary-900 mb-6">
              Partners in Engineering Innovation & Success
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Al Fayed bridges global technology with local projects, delivering advanced engineering solutions, precision devices, and comprehensive support to universities, construction firms, and innovation hubs worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Our Services <ArrowRight className="ml-2 inline-block" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Illustration/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full h-96 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-full shadow-card">
                    <IconComponent size={32} className="text-primary-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* Services Preview */}
      <Section id="services-preview" bgColor="bg-white">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive solutions tailored to support your success"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} delay={index * 0.1}>
                <div className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="primary" size="lg">
              View All Services <ArrowRight className="ml-2 inline-block" size={20} />
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-gradient-primary" className="text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Al Fayed can support your institution's growth and innovation.
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
