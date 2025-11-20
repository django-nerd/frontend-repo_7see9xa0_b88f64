function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{background: 'radial-gradient(800px 400px at 0% 100%, rgba(20,184,166,0.25), transparent 60%), radial-gradient(800px 400px at 100% 0%, rgba(99,102,241,0.25), transparent 60%)'}} />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white">Have an idea? Let’s make it real.</h2>
          <p className="mt-4 text-slate-300/80 max-w-2xl mx-auto">Tell us about your goals and we’ll send a free concept deck with timelines and pricing.</p>

          <form className="mt-8 grid sm:grid-cols-2 gap-3">
            <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name" />
            <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" />
            <input className="sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Company / Project" />
            <textarea rows="4" className="sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="What are you building?" />
            <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-slate-100 transition-colors">
              Get your free concept
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
