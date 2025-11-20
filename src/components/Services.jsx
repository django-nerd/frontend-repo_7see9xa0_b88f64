import { Code2, Layout, Zap, Rocket } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Brand Sites & Landings',
    desc: 'High-polish marketing sites designed to convert with speed, SEO and accessibility baked in.'
  },
  {
    icon: Code2,
    title: 'Web Apps & Interactions',
    desc: 'Delightful micro-interactions and performant frontends powered by modern stacks.'
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    desc: 'Audits and optimization to improve Core Web Vitals, search ranking, and conversions.'
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'Analytics, A/B testing and iteration to keep your product evolving post-launch.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{background: 'radial-gradient(800px 400px at 10% 0%, rgba(20,184,166,0.25), transparent 60%), radial-gradient(800px 400px at 90% 100%, rgba(99,102,241,0.25), transparent 60%)'}} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-white">What we do</h2>
          <p className="mt-4 text-slate-300/80 max-w-2xl mx-auto">Strategic design and engineering for brands who want to feel modern and memorable.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 grid place-items-center shadow-lg">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
