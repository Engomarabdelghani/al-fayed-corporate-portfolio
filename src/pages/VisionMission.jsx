import { motion } from 'framer-motion'
import Card from '../components/Card'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { ArrowRight, Target, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function VisionMission() {
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
          <h1 className="text-primary-900 mb-6">Vision & Mission</h1>
          <p className="text-xl text-gray-700">
            Our commitment to excellence, innovation, and sustainable growth.
          </p>
        </motion.div>
      </Section>

      {/* Vision & Mission Cards */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision */}
          <Card hoverable delay={0}>
            <div className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Target size={32} className="text-primary-600" />
                </div>
                <h2 className="text-gradient">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a leading and reference company worldwide in BIM services by delivering customized, high-quality, and innovative solutions that exceed expectations and drive meaningful change in engineering and academic sectors.
              </p>
            </div>
          </Card>

          {/* Mission */}
          <Card hoverable delay={0.2}>
            <div className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Lightbulb size={32} className="text-primary-600" />
                </div>
                <h2 className="text-gradient">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Deliver accurate, efficient, and innovative BIM services that exceed client expectations. We commit to providing technical excellence, continuous support, and strategic partnerships that enable our clients to achieve their goals with confidence and reliability.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Strategic Goals */}
      <Section bgColor="bg-secondary-50">
        <SectionTitle
          title="Our Goals"
          subtitle="Driving excellence and sustainable growth"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'High-Quality Services',
              description: 'Maintain the highest standards of technical excellence and professionalism in all our offerings.',
            },
            {
              title: 'Customer Satisfaction',
              description: 'Ensure every client receives exceptional value and support tailored to their unique needs.',
            },
            {
              title: 'Innovation & Development',
              description: 'Continuously invest in new technologies and methodologies to stay ahead of industry trends.',
            },
            {
              title: 'Expansion & Growth',
              description: 'Scale our operations and extend our reach to serve more institutions and enterprises globally.',
            },
            {
              title: 'Environmental Sustainability',
              description: 'Implement eco-friendly practices and promote sustainable solutions in all our business operations.',
            },
            {
              title: 'Community Impact',
              description: 'Contribute to the development of engineering education and industrial capacity in our communities.',
            },
          ].map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <h3 className="text-primary-600 font-bold mb-3 text-lg">
                {goal.title}
              </h3>
              <p className="text-gray-700">
                {goal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Commitment Statement */}
      <Section bgColor="bg-gradient-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-gradient mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Al Fayed, we believe success is measured not just by business growth, but by the lasting relationships we build and the positive impact we create. We are committed to being more than a service provider—we are a strategic partner invested in your success and the advancement of engineering excellence worldwide.
          </p>
          <Link to="/values">
            <Button variant="primary" size="lg">
              Explore Our Values <ArrowRight className="ml-2 inline-block" size={20} />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
