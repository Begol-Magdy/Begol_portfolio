import {
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ExternalLink, Mail, MessageCircle } from 'lucide-react';
import {
  motion,
  type MotionStyle,
  type MotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';

const heroPortrait =
  'assets/portrait-bebo.png';

const contact = {
  email: 'begol.m.ayoub@gmail.com',
  phone: '+201204203545',
  emailHref: 'mailto:begol.m.ayoub@gmail.com',
  whatsappHref: 'https://wa.me/201204203545',
};

const aboutDecor = {
  moon: 'assets/decor/moon-icon.png',
  object: 'assets/decor/p59-object.png',
  lego: 'assets/decor/lego-icon.png',
  group: 'assets/decor/group-134.png',
};

const marqueeImages = [
  'assets/marquee/hero-space-voyage.gif',
  'assets/marquee/hero-codenest-preview-Cgppc2qV.gif',
  'assets/marquee/hero-stellar-ai-preview-D3HL6bw1.gif',
  'assets/marquee/hero-asme-preview-B_nGDnTP.gif',
  'assets/marquee/hero-transform-data-preview-Cx5OU29N.gif',
  'assets/marquee/hero-vitara-preview-Cjz2QYyU.gif',
  'assets/marquee/hero-terra-preview-BFjrCr7T.gif',
  'assets/marquee/hero-skyelite-preview-DHaZIgUv.gif',
  'assets/marquee/hero-aethera-preview-DknSlcTa.gif',
  'assets/marquee/hero-designpro-preview-D8c5_een.gif',
  'assets/marquee/hero-xportfolio-preview-D4A8maiC.gif',
  'assets/marquee/hero-orbit-web3-preview-BXt4OttD.gif',
  'assets/marquee/hero-nexora-preview-cx5HmUgo.gif',
];

const services = [
  {
    number: '01',
    name: 'Full Stack Web Designer',
    description:
      'Designing and building responsive web experiences from interface direction to front-end implementation and back-end integration.',
  },
  {
    number: '02',
    name: 'Shopify Developer',
    description:
      'Creating clean Shopify storefronts, custom sections, product flows, and e-commerce experiences focused on conversion and usability.',
  },
  {
    number: '03',
    name: 'React Development',
    description:
      'Building polished, component-based interfaces with React, TypeScript, responsive layouts, and smooth interaction patterns.',
  },
  {
    number: '04',
    name: 'Node.js and SQL',
    description:
      'Developing reliable APIs, database structures, authentication flows, and data-driven features for practical business platforms.',
  },
  {
    number: '05',
    name: 'Dashboard Platforms',
    description:
      'Designing and developing admin dashboards, analytics views, and management systems that make daily work clearer and faster.',
  },
];

const projects = [
  {
    number: '01',
    name: 'Commerce Flow',
    category: 'Client',
    liveUrl: 'https://example.com/commerce-flow',
    images: [
      'assets/project-commerce-flow.png',
      'assets/project-commerce-flow.png',
      'assets/project-commerce-flow.png',
    ],
  },
  {
    number: '02',
    name: 'Shopify Store',
    category: 'Personal',
    liveUrl: 'https://example.com/shopify-store',
    images: [
      'assets/project-shopify-store.png',
      'assets/project-shopify-store.png',
      'assets/project-shopify-store.png',
    ],
  },
  {
    number: '03',
    name: 'Insight Admin',
    category: 'Client',
    liveUrl: 'https://example.com/insight-admin',
    images: [
      'assets/project-insight-admin.png',
      'assets/project-insight-admin.png',
      'assets/project-insight-admin.png',
    ],
  },
];

type FadeInProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  children: ReactNode;
};

function FadeIn({
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  children,
  ...props
}: FadeInProps) {
  const MotionElement = motion.create(as);

  return (
    <MotionElement
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isInsideX =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding;
      const isInsideY =
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!isInsideX || !isInsideY) {
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0px)');
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const moveX = (event.clientX - centerX) / strength;
      const moveY = (event.clientY - centerY) / strength;

      setTransition(activeTransition);
      setTransform(`translate3d(${moveX}px, ${moveY}px, 0px)`);
    };

    const handleMouseLeave = () => {
      setTransition(inactiveTransition);
      setTransform('translate3d(0px, 0px, 0px)');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeTransition, inactiveTransition, padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform, transition, willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

function ContactButton({
  menuPlacement = 'down',
}: {
  menuPlacement?: 'up' | 'down';
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const menuPosition =
    menuPlacement === 'up' ? 'bottom-full mb-3' : 'top-full mt-3';

  return (
    <div ref={menuRef} className="relative inline-flex shrink-0">
      <motion.button
        type="button"
        aria-expanded={isOpen}
        aria-label="Choose how to contact Begol"
        className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
        style={{
          background:
            'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow:
            '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
          outline: '2px solid #fff',
          outlineOffset: '-3px',
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen((current) => !current)}
      >
        <Mail
          className="hidden h-4 w-4 sm:block"
          aria-hidden="true"
          strokeWidth={2.2}
        />
        Contact Me
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: menuPlacement === 'up' ? 8 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: menuPlacement === 'up' ? 8 : -8 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className={`absolute right-0 z-50 grid min-w-[210px] gap-2 rounded-[22px] border border-[#D7E2EA]/35 bg-[#0C0C0C] p-2 text-[#D7E2EA] shadow-2xl shadow-black/40 ${menuPosition}`}
        >
          <a
            href={contact.emailHref}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10"
            onClick={() => setIsOpen(false)}
          >
            <Mail className="h-4 w-4" aria-hidden="true" strokeWidth={2.2} />
            Email
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle
              className="h-4 w-4"
              aria-hidden="true"
              strokeWidth={2.2}
            />
            WhatsApp
          </a>
        </motion.div>
      )}
    </div>
  );
}

function LiveProjectButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Live Project
      <ExternalLink className="h-4 w-4" aria-hidden="true" strokeWidth={2.2} />
    </a>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const characters = Array.from(text);
  const total = characters.length;

  return (
    <p
      ref={ref}
      aria-label={text}
      className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
    >
      {characters.map((char, index) => {
        return (
          <AnimatedCharacter
            key={`${char}-${index}`}
            char={char}
            index={index}
            total={total}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}

function AnimatedCharacter({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(1, (index + 18) / total);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const content = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block" aria-hidden="true">
      <span className="invisible">{content}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {content}
      </motion.span>
    </span>
  );
}

function HeroSection() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: contact.whatsappHref },
  ];

  return (
    <section className="relative flex h-screen w-full max-w-[100vw] flex-col overflow-x-clip overflow-y-hidden bg-[#0C0C0C]">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex w-full max-w-[100vw] items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-0 mt-6 w-full max-w-[100vw] overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&apos;m Begol
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={heroPortrait}
              alt="Begol portrait"
              className="w-full select-none object-contain"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex w-full max-w-[100vw] items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]">
            full stack web designer building responsive websites, stores, and dashboards
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton menuPlacement="up" />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);
  const splitIndex = Math.ceil(marqueeImages.length / 2);
  const rowOne = marqueeImages.slice(0, splitIndex);
  const rowTwo = marqueeImages.slice(splitIndex);

  useEffect(() => {
    const updateOffset = () => {
      const section = ref.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const nextOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(nextOffset);
    };

    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });
    window.addEventListener('resize', updateOffset);

    return () => {
      window.removeEventListener('scroll', updateOffset);
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <MarqueeRow
        images={rowOne}
        transform={`translateX(${offset - 200}px)`}
      />
      <div className="h-3" />
      <MarqueeRow
        images={rowTwo}
        transform={`translateX(${-1 * (offset - 200)}px)`}
      />
    </section>
  );
}

function MarqueeRow({
  images,
  transform,
}: {
  images: string[];
  transform: string;
}) {
  const repeated = [...images, ...images, ...images];

  return (
    <div
      className="flex gap-3"
      style={{ transform, willChange: 'transform' }}
    >
      {repeated.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] min-w-[420px] rounded-2xl object-cover"
        />
      ))}
    </div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img src={aboutDecor.moon} alt="" loading="lazy" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img src={aboutDecor.object} alt="" loading="lazy" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img src={aboutDecor.lego} alt="" loading="lazy" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img src={aboutDecor.group} alt="" loading="lazy" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40}>
          <span className="hero-heading block text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </span>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text="I'm a Computer Information Systems student and full-stack web developer with experience building responsive websites, e-commerce solutions, and dashboard-based platforms. I combine technical skills in React, Node.js, SQL, and Shopify with a business-focused mindset to create digital solutions that are clean, functional, and built around real user needs." />
          <FadeIn delay={0.25} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn as="h2" y={40}>
        <span className="mb-16 block text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Services
        </span>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={30}>
            <article className="flex items-start gap-6 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-10 sm:py-10 md:gap-14 md:py-12">
              <span className="min-w-[4.6rem] text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C] sm:min-w-[8rem]">
                {service.number}
              </span>
              <div className="pt-1 sm:pt-3 md:pt-5">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                  {service.name}
                </h3>
                <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60 sm:mt-4">
                  {service.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn as="h2" y={40}>
        <span className="hero-heading mb-16 block text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Project
        </span>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0.18, 0.82], [1, targetScale]);
  const cardStyle: MotionStyle & { '--card-offset': string } = {
    scale,
    '--card-offset': `${index * 28}px`,
  };

  return (
    <div ref={ref} className="h-[85vh]">
      <motion.article
        className="project-card-sticky sticky overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={cardStyle}
      >
        <div className="flex flex-wrap items-end justify-between gap-4 pb-5 sm:gap-6 sm:pb-6 md:pb-8">
          <div className="flex items-end gap-4 sm:gap-6 md:gap-8">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#D7E2EA]">
              {project.number}
            </span>
            <div className="pb-2 sm:pb-4">
              <p className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/55 sm:text-sm">
                {project.category}
              </p>
              <h3 className="mt-1 text-[clamp(1.35rem,4vw,4.25rem)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl} />
        </div>

        <div className="grid grid-cols-[40%_60%] gap-3">
          <div className="grid gap-3">
            <img
              src={project.images[0]}
              alt={`${project.name} project detail one`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} project detail two`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name} project showcase`}
            loading="lazy"
            className="h-full min-h-[303px] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.article>
    </div>
  );
}

export default function App() {
  return (
    <main
      className="min-h-screen bg-[#0C0C0C] font-kanit"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
