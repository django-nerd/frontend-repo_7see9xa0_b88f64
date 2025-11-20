import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{background: 'radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(1000px 500px at 90% 20%, rgba(20,184,166,0.25), transparent 60%)'}} />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm">Award-winning web design agency</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
              We craft playful, interactive websites that convert
            </h1>
            <p className="mt-6 text-lg text-slate-200/80 max-w-xl">
              From bold portfolios to conversion-optimized landing pages, we blend aesthetics and performance to help brands stand out.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition-colors">
                Get a free concept
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 px-5 py-3 hover:bg-white/15 transition-colors">
                See our work
              </a>
            </div>
          </motion.div>
        </div>
        <div className="h-[60vh] lg:h-[70vh]" />
      </div>
    </section>
  )
}

export default Hero
