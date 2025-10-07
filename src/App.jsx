import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArrowRight, Twitter, Mail, ExternalLink, Trophy, Dumbbell, GraduationCap, Briefcase, Activity, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Details from "./Details";
import XLogo from "./XLogo";

function LiveTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <time dateTime={time.toISOString()}>
      From {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })} — Consider me retired
    </time>
  );
}

const SOCIALS = [
  { name: "X", href: "https://x.com/a_hahahahad", icon: XLogo },
  //{ name: "Strava", href: "https://www.strava.com/athletes/173060047", icon: Activity },
  { name: "Email", href: "mailto:ahad382@gmail.com", icon: Mail },
];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Abdul Ahad</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:text-white text-gray-400" href="#about">About</a>
            <a className="hover:text-white text-gray-400" href="#highlights">Highlights</a>
            <a className="hover:text-white text-gray-400" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ name, href, icon: Icon }) => (
              <a key={name} className="p-2 rounded-xl hover:bg-gray-900 text-gray-400 hover:text-white transition" href={href} target="_blank" rel="noreferrer" aria-label={name}>
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Quant Strategist & Developer
            </h1>
            <p className="mt-5 text-lg text-gray-400">
            Undergrad from IIT Guwahati — Engineering end-to-end quantitative systems, from portfolio optimization strategies and trading infrastructure to real-time analytics, modeling, and deployment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="https://x.com/a_hahahahad" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-gray-700 bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200 transition">
                Say Hi on <XLogo className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4">
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3"><Briefcase className="h-5 w-5 text-gray-400" /> Quant strategist & developer at an Investment Bank</li>
              <li className="flex gap-3"><GraduationCap className="h-5 w-5 text-gray-400" /> Undergrad from IIT Guwahati</li>
              <li className="flex gap-3"><ExternalLink className="h-5 w-5 text-gray-400" /> <a href="https://medium.com/inplace/interning-at-amazon-abdul-ahad-ef2565dd8e66" target="_blank" rel="noreferrer" className="hover:underline">Interned at Amazon</a></li>
              <li className="flex gap-3"><Dumbbell className="h-5 w-5 text-gray-400" /> Running & Strength Training</li>
              <li className="flex gap-3"><Trophy className="h-5 w-5 text-gray-400" /> Table Tennis Amateur (U14 Nationals)</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <img alt="Abdul Ahad" className="w-full h-64 object-cover rounded-2xl border border-gray-800" src="/heads.jpg" />
          </div>
        </div>
      </section>

      <section id="highlights" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Highlights</h2>
          <span className="text-sm text-gray-500">Quick wins & milestones</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Career */}
          <div className="rounded-2xl border border-gray-800 overflow-hidden bg-black/60">
            <img src="/career.JPG" alt="Career" className="h-40 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium">Career</div>
                <Briefcase className="h-5 w-5 text-gray-500" />
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>Quant strategist cum developer at an Investment Bank</li>
                <li>I do some quant-strats stuff</li>
                <li>I do some dev stuff as well</li>
              </ul>
            </div>
          </div>

          {/* Table Tennis */}
          <div className="rounded-2xl border border-gray-800 overflow-hidden bg-black/60">
            <img src="/tt.png" alt="Table Tennis" className="h-40 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium">Table Tennis</div>
                <Trophy className="h-5 w-5 text-gray-500" />
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>Nationals (U14) - represented UP at the highest junior level.</li>
                <li>U-14 NVS National Championship 2015 — Runner-up</li>
                 <li><LiveTime /></li>
              </ul>
            </div>
          </div>

          {/* Running & Gym */}
          <div className="rounded-2xl border border-gray-800 overflow-hidden bg-black/60">
            <img src="/trainings.JPEG" alt="Running & Gym" className="h-40 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="font-medium">Strength Training/Running</div>
                <Dumbbell className="h-5 w-5 text-gray-500" />
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
              
                <li>Strength: 4x/week. Weekly runs: 1-2</li>
                <li>Aiming for half marathon.</li>
                <li><a className="underline hover:no-underline" href="https://ahahahahad.substack.com/p/why-i-train" target="_blank" rel="noreferrer">My training philosophy</a> on why i train</li>
                <li>Tracking on <a className="underline hover:no-underline" href="https://www.strava.com/athletes/173060047" target="_blank" rel="noreferrer">Strava</a>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          <p className="text-gray-300">
  Made it all the way down here? Say hi if you see me — I’m friendlier than I look (just a bit shy).  
  Or do the normal thing and <a href="https://www.instagram.com/a_hahahahad/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-100">stalk me on Insta</a>.</p>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-gray-800 px-4 py-2 text-sm text-gray-300 hover:border-gray-600">
                <Icon className="h-4 w-4" /> {name}
              </a>
            ))}
            <a href="/details" className="inline-flex items-center gap-2 rounded-2xl border border-gray-800 px-4 py-2 text-sm text-gray-300 hover:border-gray-600">
              <ArrowUpRight className="h-4 w-4" /> If you want to know more
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-800 text-sm text-gray-500 text-center">
        <div>© {new Date().getFullYear()} Abdul Ahad — vibe coded with GPT-5</div>
      </footer>
    </div>
  );
} 
