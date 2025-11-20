import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Orbit Finance',
    tag: 'Fintech Platform',
    image: 'https://images.unsplash.com/photo-1551281044-8af675c8f3d5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Luma Labs',
    tag: 'AI Research',
    image: 'https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Nova Commerce',
    tag: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1596116976386-b94a6900abe4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3ZhJTIwQ29tbWVyY2V8ZW58MHwwfHx8MTc2MzY0NTkzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

function Work() {
  return (
    <section id="work" className="relative py-24 bg-slate-900">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Selected work</h2>
            <p className="mt-3 text-slate-300/80">A few favorites across startups and brands.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 px-4 py-2 hover:bg-white/15 transition-colors">Work with us</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={p.image} alt="" className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/0" />
              <div className="absolute bottom-0 p-5">
                <span className="text-xs uppercase tracking-wider text-slate-300/70">{p.tag}</span>
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
