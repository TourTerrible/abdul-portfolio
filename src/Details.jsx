import React from "react";
import { ArrowLeft, ExternalLink, Activity, Briefcase, GraduationCap, BookOpen, Code, Trophy, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const DETAILS_SECTIONS = [
  {
    title: "Career & Experience",
    icon: Briefcase,
    color: "text-green-400",
    items: [
      {
        title: "Inter IIT Tech",
        description: "Robotics write-up - Steps of a bot taking to the fields",
        href: "https://medium.com/inked-intellects/steps-of-a-bot-taking-to-the-fields-f7bbe7dddf68",
        category: "Technical"
      },
      {
        title: "Amazon Internship",
        description: "My journey from IIT to Amazon - placement insights and learnings",
        href: "https://medium.com/inplace/interning-at-amazon-abdul-ahad-ef2565dd8e66",
        category: "Internship"
      },
      {
        title: "Placements",
        description: "My placement journey and preparation strategy",
        href: "https://ahahahahad.substack.com/p/placement-2021",
        category: "Career"
      },
      {
        title: "Graduation",
        description: "IIT Guwahati graduation experience and achievements",
        href: "https://ahahahahad.substack.com/p/yes-i-graduated",
        category: "Education"
      },
    ]
  },
  {
    title: "More",
    icon: BookOpen,
    color: "text-purple-400",
    items: [
      {
        title: "Why I Train",
        description: "How I started running and my training philosophy",
        href: "https://ahahahahad.substack.com/p/why-i-train",
        category: "Fitness"
      },
      {
        title: "Reading List",
        description: "Books, papers, and articles that have influenced my thinking",
        href: "https://ahahahahad.substack.com/p/my-reading-list-that-i-rarely-read",
        category: "Resources"
      },
      {
        title: "Substack",
        description: "Experiments and thoughts on various topics",
        href: "https://ahahahahad.substack.com/",
        category: "Blog"
      }
    ]
  }
];

export default function Details() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">Abdul Ahad</a>
          <a href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Details & Resources
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            A comprehensive collection of my work, experiences, and interests. 
            Organized by category for easy navigation.
          </p>
        </motion.div>

        <div className="space-y-12">
          {DETAILS_SECTIONS.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <section.icon className={`h-6 w-6 ${section.color}`} />
                <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item, itemIndex) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                    className="group block p-6 rounded-2xl border border-gray-800 hover:border-gray-600 bg-black/40 hover:bg-black/60 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium text-white group-hover:text-gray-200 transition">
                        {item.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-gray-400 transition" />
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      {item.description}
                    </p>
                    <span className="inline-block px-2 py-1 text-xs font-medium text-gray-500 bg-gray-800 rounded-full">
                      {item.category}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-12 border-t border-gray-800 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Abdul Ahad — Built with React + Tailwind
      </footer>
    </div>
  );
} 