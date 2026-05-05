import { useEffect, useRef } from 'react';
import { Home, Layers, Leaf, MessageSquare } from 'lucide-react';

function useReveal(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

const services = [
  {
    icon: Home,
    number: '01',
    title: 'Architecture',
    desc: 'Sculpting volumes that resonate with their context. From concept to construction, we deliver bespoke architectural solutions for residential, commercial, and institutional projects.',
    tags: ['Residential', 'Commercial', 'Institutional'],
  },
  {
    icon: Layers,
    number: '02',
    title: 'Interior Design',
    desc: 'Space planning, material direction, and bespoke furniture — each interior is a composition of texture, light, and purpose, tailored to its inhabitants.',
    tags: ['Space Planning', 'Material Selection', 'Bespoke Furniture'],
  },
  {
    icon: Leaf,
    number: '03',
    title: 'Landscape',
    desc: 'Ecological restoration and hardscape design that create a seamless dialogue between built form and natural environment.',
    tags: ['Hardscape', 'Planting Design', 'Ecological Restoration'],
  },
  {
    icon: MessageSquare,
    number: '04',
    title: 'Consulting',
    desc: 'Design consultancy, Vastu consultation, and project estimations — bringing clarity and expertise to every stage of your project.',
    tags: ['Vastu', 'Estimations', 'Design Review'],
  },
];

function ServiceCard({ service, delay }) {
  const ref = useRef(null);
  useReveal(ref);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="fade-in service-card border border-[#D4CCC5] p-8 cursor-default"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-8">
        <span className="text-[10px] tracking-[0.2em] text-[#C4A882] font-poppins">{service.number}</span>
        <Icon size={20} className="text-[#6B6560]" strokeWidth={1.5} />
      </div>
      <h3 className="service-title font-playfair text-2xl text-[#2A2522] font-normal mb-4">{service.title}</h3>
      <p className="service-desc font-poppins text-[#6B6560] text-sm font-light leading-relaxed mb-8">{service.desc}</p>
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] tracking-[0.15em] uppercase border border-current px-3 py-1 font-poppins opacity-50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const headRef = useRef(null);
  useReveal(headRef);

  return (
    <section id="services" className="py-28 md:py-36 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div ref={headRef} className="fade-in mb-16">
          <p className="text-[#C4A882] text-[10px] tracking-[0.3em] uppercase font-poppins mb-4">What We Do</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#2A2522] font-normal leading-tight">
            Our Core<br />
            <em className="italic">Disciplines</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#D4CCC5]">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
