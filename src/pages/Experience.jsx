
import { motion } from 'framer-motion'
import Card from '../components/Card'
import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

// Import university images
import portSaidImg from '../images/universities/portsaid.png'
import tantaImg from '../images/universities/tanta.png'
import sohagImg from '../images/universities/sohag.png'
import alexandriaImg from '../images/universities/Alexandria.png'
import kafrElSheikhImg from '../images/universities/Kafr-El-Sheikh.png'
import galalaImg from '../images/universities/Galala.png'
import damietaImg from '../images/universities/Damietta.jpg'
import mansouraImg from '../images/universities/mansoura.png'
import sadatImg from '../images/universities/sadat.png'
import nationalAuthorityImg from '../images/universities/National-Authority.png'
import arabOrgImg from '../images/universities/Arab_Organization.png'
import eastWestImg from '../images/universities/East-West.png'

export default function Experience() {
  const universities = [
    { name: 'Port Said University', region: 'Port Said', image: portSaidImg },
    { name: 'Tanta University', region: 'Gharbiyah', image: tantaImg },
    { name: 'Sohag University', region: 'Sohag', image: sohagImg },
    { name: 'Alexandria University', region: 'Alexandria', image: alexandriaImg },
    { name: 'Kafr El-Sheikh University', region: 'Kafr El-Sheikh', image: kafrElSheikhImg },
    { name: 'Galala University', region: 'Suez', image: galalaImg },
    { name: 'Damietta University', region: 'Damietta', image: damietaImg },
    { name: 'Mansoura University', region: 'Dakahlia', image: mansouraImg },
    { name: 'Sadat City University', region: 'Monufia', image: sadatImg },
    { name: 'National Authority for Military Production', region: ' New Administrative Capital', image: nationalAuthorityImg },
    { name: 'Arab Organization for Industrialization', region: 'Cairo', image: arabOrgImg },
    { name: 'East West International for Trading & Contracting', region: 'Monufia', image: eastWestImg },
  ]

  const achievements = [
    {
      icon: Award,
      title: '15+ Years',
      description: 'Of trusted partnerships and continuous innovation',
    },
    {
      icon: Users,
      title: '9+ Universities',
      description: 'Serving leading institutions across Egypt',
    },
    {
      icon: TrendingUp,
      title: '100%',
      description: 'Customer satisfaction and long-term relationships',
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
          <h1 className="text-primary-900 mb-6">Our Experience</h1>
          <p className="text-xl text-gray-700">
            Proud partners with leading academic institutions and enterprises across Egypt and beyond.
          </p>
        </motion.div>
      </Section>

      {/* Achievements */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-light rounded-full shadow-card">
                    <IconComponent size={40} className="text-primary-600" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-700">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Universities We Serve */}
      <Section bgColor="bg-secondary-50">
        <SectionTitle
          title="Universities We Partner With"
          subtitle="Strengthening Egypt's academic and engineering landscape"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {universities.map((uni, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              {/* University Image */}
              <div
                className="w-full aspect-[4/3] relative rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  backgroundImage: `url(${uni.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25"></div>

                {/* University Name */}
                <span className="text-white text-center font-semibold px-4 relative z-10">
                  {uni.name}
                </span>
              </div>


              <p className="text-gray-600 text-center font-medium py-4">
                {uni.region}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Partnership Approach */}
      <Section bgColor="bg-white">
        <SectionTitle
          title="Our Partnership Approach"
          subtitle="Building lasting relationships based on trust and mutual success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              phase: '1. Discovery',
              description: "We begin by deeply understanding your institution's unique challenges, goals, and vision for the future.",
            },
            {
              phase: '2. Customization',
              description: "We design tailored solutions that align perfectly with your needs and leverage our expertise.",
            },
            {
              phase: '3. Implementation',
              description: "Our experienced team executes the plan with precision, ensuring minimal disruption and maximum value.",
            },
            {
              phase: '4. Support & Growth',
              description: "We provide ongoing support, continuous improvement, and partnership to ensure sustained success.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-light p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {item.phase.split('.')[0]}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary-900 mb-2">
                    {item.phase}
                  </h4>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section bgColor="bg-secondary-50">
        <SectionTitle
          title="Our Impact"
          subtitle="Measurable success in strengthening institutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
              {
                metric: '50+',
                label: 'Equipment Installations',
                description: 'Successfully deployed across partner institutions',
              },
              {
                metric: '200+',
                label: 'Projects Delivered',
                description: 'Completed engineering and consultancy projects for institutions',
              },
              {
                metric: '99%',
                label: 'Client Retention',
                description: 'Long-term partnerships spanning multiple years',
              },
            ]
            .map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-card text-center"
            >
              <h3 className="text-4xl font-bold text-primary-600 mb-2">
                {item.metric}
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {item.label}
              </h4>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Sectors Served */}
      <Section bgColor="bg-white">
        <SectionTitle
          title="Sectors & Industries"
          subtitle="Serving diverse sectors with tailored solutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              sector: 'Higher Education',
              details: 'Supporting university engineering departments with cutting-edge equipment and training programs.',
            },
            {
              sector: 'Research Institutions',
              details: 'Enabling groundbreaking research through advanced BIM services and specialized equipment.',
            },
            {
              sector: 'Construction & Engineering',
              details: 'Providing solutions for construction firms and engineering consulting companies.',
            },
            {
              sector: 'Government & Organizations',
              details: 'Supporting government initiatives and organizations in capacity building and development.',
            },
          ].map((item, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {item.sector}
                </h3>
                <p className="text-gray-700">
                  {item.details}
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
            Become part of a community of leading institutions leveraging Al Fayed's expertise for success.
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
