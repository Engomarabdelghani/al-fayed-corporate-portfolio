import { motion } from 'framer-motion'
import Card from '../components/Card'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { ArrowRight, BookOpen, Zap, Wrench, Award, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Consult Before You Order',
      description: 'Technical support from university professors, specialists, and expert engineers.',
      color: 'from-blue-500 to-blue-600',
      benefits: [
        'Expert consultation from academic professionals',
        'Customized technical assessments',
        'Best practices guidance',
        'Risk assessment and mitigation',
      ],
    },
    {
      icon: Zap,
      title: 'Smart Supply',
      description: 'Providing the latest engineering technologies and advanced equipment.',
      color: 'from-cyan-500 to-blue-500',
      benefits: [
        'Cutting-edge engineering equipment',
        'Latest technological innovations',
        'Competitive pricing',
        'Reliable and timely delivery',
      ],
    },
    {
      icon: Wrench,
      title: 'After-Sales Services',
      description: 'Continuous technical support and proactive maintenance.',
      color: 'from-indigo-500 to-purple-600',
      benefits: [
        '24/7 technical support',
        'Preventive maintenance programs',
        'Quick response times',
        'Extended equipment lifecycle',
      ],
    },
    {
      icon: Award,
      title: 'Workshop Training',
      description: 'Practical, hands-on workshops for engineering and academic institutions.',
      color: 'from-purple-500 to-pink-600',
      benefits: [
        'Hands-on practical training',
        'Expert-led workshops',
        'Customized curricula',
        'Certification programs',
      ],
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
          <h1 className="text-primary-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700">
            Comprehensive solutions designed to support your institution's growth, innovation, and success.
          </p>
        </motion.div>
      </Section>

      {/* Services Grid */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} delay={index * 0.1}>
                <div className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-3">
                        <Check size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Detailed Service Sections */}
      <Section bgColor="bg-secondary-50">
        <SectionTitle
          title="Service Details"
          subtitle="Everything you need to know about our comprehensive offerings"
        />

        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-16 last:mb-0`}
            >
              <div className="flex-1">
                <div className={`w-full h-80 bg-gradient-to-br ${service.color} rounded-3xl shadow-lg flex items-center justify-center`}>
                  <IconComponent size={80} className="text-white opacity-80" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-primary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3">
                      <Check size={24} className="text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="md">
                  Learn More <ArrowRight className="ml-2 inline-block" size={18} />
                </Button>
              </div>
            </motion.div>
          )
        })}
      </Section>

      {/* Why Our Services Stand Out */}
      <Section bgColor="bg-white">
        <SectionTitle
          title="Why Choose Our Services?"
          subtitle="Excellence in every aspect of our delivery"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Team',
              description: 'Professionals with deep industry expertise and academic credentials.',
            },
            {
              title: 'Customized Solutions',
              description: 'Services tailored to your specific institutional needs and goals.',
            },
            {
              title: 'Proven Track Record',
              description: 'Successful partnerships with leading universities and enterprises.',
            },
            {
              title: 'Innovation-Focused',
              description: 'Constantly evolving to incorporate latest technologies and methodologies.',
            },
            {
              title: 'Comprehensive Support',
              description: 'End-to-end assistance from initial consultation through implementation.',
            },
            {
              title: 'Long-Term Partnership',
              description: 'Committed to your sustained success beyond individual projects.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-light p-8 rounded-2xl"
            >
              <h4 className="text-lg font-bold text-primary-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </motion.div>
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
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can support your institution's goals and drive success.
          </p>
          <Link to="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Schedule a Consultation <ArrowRight className="ml-2 inline-block" size={20} />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
