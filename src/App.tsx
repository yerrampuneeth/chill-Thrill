import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Trophy, 
  Users, 
  Calendar,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Star,
  Activity,
  Zap
} from "lucide-react";

const WHATSAPP_NUMBER = "919578694694";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I would like to book a slot at Chill & Thrill Drive In!`;

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "py-4 glass shadow-lg" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-neon font-black text-2xl group-hover:rotate-12 transition-transform duration-300">
            CT
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-accent leading-none">CHILL & THRILL</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">Sports Complex</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10 font-bold text-sm tracking-widest text-accent/70 uppercase">
          {["about", "services", "contact"].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-neon px-8 py-3 rounded-full hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center gap-2 border border-neon/20"
          >
            <MessageCircle size={18} />
            BOOK NOW
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[550px] h-[550px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-accent/5 border border-accent/10 text-accent font-bold text-xs tracking-[0.3em] uppercase mb-8">
                <Zap size={14} className="text-neon animate-pulse" />
                The Arena of Champions
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl xl:text-8xl font-black text-accent tracking-tighter leading-[0.85] mb-8"
            >
              UNLEASH <br />
              <span className="text-gradient italic">THE THRILL.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg sm:text-xl text-slate-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Hanamkonda's most advanced sports destination. Premium multi-sports box turf, night match lighting, and delicious drive-in dining areas.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-accent text-white px-10 py-5 rounded-2xl font-black text-lg overflow-hidden transition-all hover:pr-14 w-full sm:w-auto text-center"
              >
                <span className="relative z-10">START YOUR GAME</span>
                <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={24} />
              </a>
              <a 
                href="#services"
                className="px-10 py-5 rounded-2xl font-black text-lg text-accent border-2 border-accent/10 hover:bg-accent hover:text-white transition-all w-full sm:w-auto text-center"
              >
                VIEW FACILITIES
              </a>
            </motion.div>
          </div>

          {/* Right Image Deck (Aesthetic Sports & Cafe Collage) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 px-4 sm:px-12 lg:px-0">
            <div className="relative h-[480px] w-full">
              {/* Image 1: Main Soccer Turf (Back) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 1, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: -3, zIndex: 30 }}
                className="absolute top-4 left-4 w-4/5 h-[320px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 cursor-pointer group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200" 
                  alt="Football Turf Arena" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <span className="text-neon font-bold text-[10px] tracking-widest uppercase block mb-1">FACILITY</span>
                  <span className="font-extrabold text-lg tracking-tight">FIFA Turf pitch</span>
                </div>
              </motion.div>

              {/* Image 2: Box Cricket (Front Middle) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                animate={{ opacity: 1, scale: 1, rotate: 6 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 2, zIndex: 30 }}
                className="absolute top-28 right-4 w-3/4 h-[280px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 cursor-pointer group z-10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000" 
                  alt="Box Cricket Arena" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <span className="text-neon font-bold text-[10px] tracking-widest uppercase block mb-1">LIVE BOX</span>
                  <span className="font-extrabold text-lg tracking-tight">Cricket nets</span>
                </div>
              </motion.div>

              {/* Image 3: Cozy Drive-In Diner (Front Overlapping) */}
              <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                className="absolute bottom-4 left-1/4 -translate-x-12 w-2/3 h-[180px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/90 cursor-pointer group z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000" 
                  alt="Drive-In Cafe Lounge" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white text-left">
                  <span className="text-neon font-bold text-[10px] tracking-widest uppercase block mb-1">CHILL ZONE</span>
                  <span className="font-extrabold text-base tracking-tight">Gourmet Drive-in cafe</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <motion.div 
        style={{ y }}
        className="absolute bottom-12 left-0 right-0 hidden lg:flex justify-center gap-20 px-12 z-10"
      >
        {[
          { label: "PREMIUM TURFS", val: "04" },
          { label: "HAPPY PLAYERS", val: "5K+" },
          { label: "RATING", val: "4.9" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-5xl font-black text-accent/20 tracking-tighter">{stat.val}</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent/40 uppercase">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const BentoGrid = () => {
  const services = [
    { 
      title: "Box Cricket Zone", 
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000", 
      tag: "Most Popular",
      price: "Starts from ₹800/hr",
      size: "lg" 
    },
    { 
      title: "Football Turf Arena", 
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000", 
      tag: "FIFA Grade Pitch",
      price: "Starts from ₹1000/hr",
      size: "lg" 
    },
    { 
      title: "Badminton Courts", 
      image: "https://images.unsplash.com/photo-1626225967045-9c76db7b6282?q=80&w=1000", 
      tag: "Pro Flooring",
      price: "Starts from ₹400/hr",
      size: "md" 
    },
    { 
      title: "Volleyball Arena", 
      image: "https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=1000", 
      tag: "Action Court",
      price: "Starts from ₹600/hr",
      size: "md" 
    },
    { 
      title: "Table Tennis & Snooker", 
      image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?q=80&w=1000", 
      tag: "Indoor Lounge",
      price: "Starts from ₹300/hr",
      size: "md" 
    },
    { 
      title: "Drive-In Cafe & Live Screening Lounge", 
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600", 
      tag: "Hangout Hub",
      price: "Chill with delicious gourmet bites & live matches!",
      size: "full" 
    }
  ];

  return (
    <section id="services" className="py-32 bg-accent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            OUR WORLD-CLASS FACILITIES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
          >
            BUILT FOR <br />
            <span className="text-neon italic">PERFORMANCE & CHILL.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[300px]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative group rounded-[2.5rem] overflow-hidden ${
                service.size === "lg" 
                  ? "md:col-span-3 h-[300px]" 
                  : service.size === "full" 
                  ? "md:col-span-6 h-[320px] md:h-[350px]" 
                  : "md:col-span-2 h-[300px]"
              }`}
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-neon text-[10px] font-bold tracking-[0.3em] uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/15">
                    {service.tag}
                  </span>
                  <span className="text-white/60 text-[10px] font-bold uppercase py-1">
                    • {service.price}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 group-hover:text-neon transition-colors">
                  {service.title}
                </h3>
                
                <motion.a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center gap-2 text-sm font-bold text-white/75 group-hover:text-neon transition-colors"
                >
                  BOOK INSTANT SLOT <ChevronRight size={16} className="text-neon group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          {/* Main Visual: Custom Generated Chill & Thrill Complex */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              id="about-main-image"
              src="/src/assets/images/chill_thrill_complex_1782028093262.jpg" 
              alt="Chill and Thrill Complex Arena Hanamkonda" 
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
          
          {/* Immersive Overlay 1: Real Action Box Cricket (Thrill Aspect) */}
          <motion.div 
            initial={{ opacity: 0, x: -60, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute -left-12 bottom-12 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 group cursor-pointer hidden sm:block"
          >
            <img 
              src="/src/assets/images/box_cricket_thrill_1782028114187.jpg" 
              alt="Thrilling Box Cricket Match Hanamkonda" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <span className="absolute bottom-3 left-4 text-neon font-black text-xs uppercase tracking-widest">THRILL DECK</span>
          </motion.div>

          {/* Immersive Overlay 2: Delicious Gourmet Pizzas & Mocktails (Chill Aspect) */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -right-6 -bottom-6 glass p-4 rounded-[2rem] shadow-2xl z-20 max-w-[260px] border border-white/20"
          >
            <div className="rounded-2xl overflow-hidden h-32 mb-4">
              <img 
                src="/src/assets/images/drive_in_cafe_chill_1782028127304.jpg" 
                alt="Delicious Gourmet food at Drive-In Cafe" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                <Star size={16} fill="currentColor" />
              </div>
              <span className="font-black text-xs text-accent">CHILL DRIVE-IN CAFE</span>
            </div>
            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">
              Serving gourmet pizzas, burgers & mocktails directly to your vehicle or pitch-side dining area!
            </p>
          </motion.div>
        </div>

        <div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
          >
            The Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-accent tracking-tighter leading-none mb-10"
          >
            MORE THAN <br />
            <span className="text-primary italic">JUST A GAME.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-slate-600 mb-12 leading-relaxed"
          >
            Chill & Thrill Drive In is designed to be the ultimate sanctuary for athletes. From professional-grade turf to our vibrant refreshment zone, every detail is crafted to enhance your game and your downtime.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              { icon: Activity, title: "Pro Lighting", desc: "Day-like visibility for night matches." },
              { icon: Users, title: "Locker Rooms", desc: "Clean and secure facilities for teams." },
              { icon: Trophy, title: "Tournaments", desc: "Regular events for competitive play." },
              { icon: Clock, title: "24/7 Access", desc: "Play whenever you feel the thrill." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-3"
              >
                <item.icon className="text-primary" size={24} />
                <h4 className="font-black text-accent tracking-tight">{item.title}</h4>
                <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 bg-[#fafaf9]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="bg-accent rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12"
            >
              READY TO <br />
              <span className="text-neon italic">PLAY?</span>
            </motion.h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="text-neon" size={28} />
                </div>
                <div>
                  <p className="font-black text-xl mb-2 tracking-tight">VISIT US</p>
                  <p className="text-emerald-100/60 leading-relaxed font-medium">
                    Gopalpur Rd, Vivek Nagar Colony, Vidhyaranyapuri, <br />
                    Gopalapuram, Hanamkonda, Telangana 506009
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="text-neon" size={28} />
                </div>
                <div>
                  <p className="font-black text-xl mb-2 tracking-tight">CALL US</p>
                  <p className="text-emerald-100/60 text-2xl font-black">+91 9578 694 694</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-dark p-12 rounded-[3rem] border border-white/5"
          >
            <h3 className="text-3xl font-black tracking-tight mb-6">INSTANT BOOKING</h3>
            <p className="text-emerald-100/60 mb-10 text-lg font-medium leading-relaxed">
              Skip the wait. Message us on WhatsApp to check live availability and secure your slot in seconds.
            </p>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-neon text-accent py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-neon/20 transition-all"
            >
              <MessageCircle size={24} />
              WHATSAPP NOW
            </motion.a>
            
            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <span className="text-emerald-100/40 font-bold tracking-widest text-[10px] uppercase">Join our community</span>
              <div className="flex gap-6">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, color: "#00ff88" }}
                    href="#" 
                    className="text-white/40 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon/5 blur-[100px] rounded-full -ml-48 -mb-48"></div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-neon font-black text-xl">
              CT
            </div>
            <span className="font-black text-xl tracking-tighter text-accent">CHILL & THRILL</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">Elevating sports in Hanamkonda since 2024.</p>
        </div>
        
        <div className="flex gap-12 text-xs font-bold tracking-[0.2em] text-accent/40 uppercase">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>

        <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
          © {new Date().getFullYear()} CHILL & THRILL DRIVE IN
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon selection:text-accent">
      <Nav />
      <main>
        <Hero />
        <About />
        <BentoGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
