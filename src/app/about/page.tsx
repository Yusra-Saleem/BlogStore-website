'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users2, Target, Award } from 'lucide-react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission')

  const tabContent = {
    mission: {
      title: 'Our Mission',
      content: 'At DynamicBlog, our mission is to inspire, educate, and empower our readers through high-quality, engaging content. We strive to be a trusted source of information and insights across various topics, fostering a community of lifelong learners and thought leaders.',
      icon: <Target className="w-12 h-12 text-primary" />,
    },
    team: {
      title: 'Our Team',
      content: 'Our diverse team of writers, editors, and tech enthusiasts are passionate about delivering exceptional content. With expertise spanning multiple disciplines, we work collaboratively to bring you the most relevant and thought-provoking articles.',
      icon: <Users2 className="w-12 h-12 text-primary" />,
    },
    achievements: {
      title: 'Our Achievements',
      content: 'Since our inception, DynamicBlog has grown to reach millions of readers worldwide. We\'ve been recognized for our outstanding content and user experience, receiving accolades from industry leaders and consistently ranking among the top blogs in our niche.',
      icon: <Award className="w-12 h-12 text-primary" />,
    },
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl text-myPrimary capitalize font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About BlogStore
        </motion.h1>

        <motion.div 
          className="max-w-3xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-gray-600">
            Welcome to DynamicBlog, where we bring you the latest insights, trends, and knowledge from the world of technology and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(tabContent).map(([key, { title, icon }], index) => (
            <motion.div
              key={key}
              className={`bg-myPrimary focus:bg-myPrimary/90 hover:bg-myPrimary/90 rounded-lg shadow-md p-6 cursor-pointer transition-all duration-500 ${activeTab === key ? 'ring-2 ring-primary bg-myPrimary/95 border border-white' : 'hover:shadow-lg'}`}
              onClick={() => setActiveTab(key)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col text-white items-center text-center">
                {icon}
                <h2 className="text-xl font-semibold mt-4 mb-2">{title}</h2>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          key={activeTab}
          className="bg-myBackground rounded-lg shadow-md p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">{tabContent[activeTab as keyof typeof tabContent].title}</h2>
          <p className="text-gray-600 text-lg">{tabContent[activeTab as keyof typeof tabContent].content}</p>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl text-myPrimary font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
           
              { name: 'John Smith', role: 'Senior Tech Writer', image: '/writer/john-smith.png' },
              { name: 'Emily Johnson', role: 'UX/UI Specialist', image: '/writer/john-smith.png' },
             
              { name: 'John Doe', role: 'Community Manager', image: '/writer/john-Doe.png' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className=" bg-myBackground border border-myPrimary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={member.image} alt={member.name} className="w-full h-64 hover:scale-105 duration-500 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl text-myPrimary font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl text-myPrimary font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8">Stay updated with our latest articles, insights, and community events.</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow border border-myPrimary px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary" 
              />
              <button 
                type="submit" 
                className="bg-myPrimary text-white px-6 py-2 rounded-r-full font-semibold hover:bg-mySecondary/90 duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}