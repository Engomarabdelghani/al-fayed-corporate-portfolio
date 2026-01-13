import { motion } from 'framer-motion'
import Card from '../components/Card'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { ArrowRight, Heart, Users, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'

// Import value images
import integrityImg from '../images/Integrity.jpg'
import relationshipsImg from '../images/Relationships.jpg'
import teamworkImg from '../images/Teamwork.jpg'

export default function Values() {
  const coreValues = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparency, honesty, ethics, and trust form the foundation of everything we do. We conduct our business with unwavering commitment to doing what is right, even when it is difficult.',
      color: 'from-red-500 to-pink-600',
      Image: integrityImg,
    },
    {
      icon: Users,
      title: 'Relationships',
      description: 'We believe in building long-term partnerships that go beyond single projects. Our clients are our partners, and their success is our success.',
      color: 'from-blue-500 to-cyan-600',
      Image: relationshipsImg,
    },
    {
      icon: Lightbulb,
      title: 'Teamwork',
      description: 'Collaboration, innovation, and a positive work culture drive us forward. We celebrate diverse perspectives and empower our teams to achieve excellence together.',
      color: 'from-yellow-500 to-orange-600',
      Image: teamworkImg,
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
          <h1 className="text-primary-900 mb-6">Our Core Values</h1>
          <p className="text-xl text-gray-700">
            The principles that guide our decisions, actions, and relationships.
          </p>
        </motion.div>
      </Section>

      {/* Core Values Cards */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} delay={index * 0.2}>
                <div className="p-10 h-full flex flex-col">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Values Details */}
          <div className="mt-16 space-y-12">
            {coreValues.map((value, index) => (
            <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
  >
                <div className="flex-1">
                  <motion.div
                    className="flex-1 relative w-full h-64 rounded-3xl shadow-lg overflow-hidden"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <img
                      src={value.Image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100/150 to-primary-700/60" />
                  </motion.div>

                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-primary-900 mb-4">
                    {value.title} 
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Living Our Values */}
      <Section bgColor="bg-secondary-50">
        <SectionTitle
          title="How We Live Our Values"
          subtitle="Every action reflects our commitment to excellence and integrity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'In Client Relationships',
              points: [
                'Providing transparent communication and honest assessments',
                'Delivering on commitments with unwavering reliability',
                'Proactively seeking feedback and continuously improving',
              ],
            },
            {
              title: 'In Our Operations',
              points: [
                'Investing in employee development and well-being',
                'Implementing sustainable and ethical business practices',
                'Maintaining the highest standards of quality control',
              ],
            },
            {
              title: 'In Our Community',
              points: [
                'Supporting educational initiatives and capacity building',
                'Partnering with institutions for mutual growth',
                'Contributing to the advancement of engineering excellence',
              ],
            },
            {
              title: 'In Our Team',
              points: [
                'Fostering a culture of collaboration and innovation',
                'Recognizing and celebrating individual contributions',
                'Empowering team members to achieve their full potential',
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-card"
            >
              <h3 className="text-xl font-bold text-primary-900 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary-600 font-bold flex-shrink-0">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Join Us Section */}
      <Section bgColor="bg-gradient-primary" className="text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6">Experience Our Values in Action</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with a company where integrity, relationships, and teamwork drive every decision and every success.
          </p>
          <Link to="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Start Your Partnership <ArrowRight className="ml-2 inline-block" size={20} />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
