import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, ExternalLink } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ShrinkingNavbar from "@/components/shrinking-navbar"
import ProcessSection from "@/components/process-section"
import NewsletterSignup from "@/components/newsletter-signup"
import FloatingContact from "@/components/floating-contact"
import AnimatedCounter from "@/components/animated-counter"
import ParallaxSection from "@/components/parallax-section"
import AnimatedGradientBg from "@/components/animated-gradient-bg"
import ThreeDText from "@/components/3d-text"
import AnimatedButton from "@/components/animated-button"
import ModernProjectCard from "@/components/modern-project-card"
import ServiceCard from "@/components/modern-service-card"
import TestimonialCard from "@/components/modern-testimonial-card"
import GlassCard from "@/components/glass-card"



export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ShrinkingNavbar />
      <FloatingContact />

      {/* Hero Section */}
      <AnimatedGradientBg>
        <ParallaxSection className="relative px-4 py-20 md:py-32 flex flex-col items-center text-center min-h-screen justify-center">
          <div className="relative z-10 max-w-3xl mx-auto">
          <div className="relative inline-block">
              <span className="text-lg bg-white/90 px-4 py-1 rounded-full relative backdrop-blur-sm shadow-lg">
                Hello!
                <div className="absolute -right-6 -top-6">
                  <Star className="text-orange-500 fill-orange-500" size={24} />
                </div>
              </span>
            </div>

            <div>
              <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
                I'm <span className="text-orange-500">Yugha</span>,
                <br />
                <ThreeDText 
                  text="A Copywriter | Web & App Developer" 
                  className="text-5xl md:text-7xl font-bold tracking-tight mt-2"
                  highlightColor="#f97316"
                />
              </h1>
            </div>

            <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
              Transforming <span className="font-semibold">ideas into impact</span> through powerful words and elegant
              code. I craft digital experiences that <span className="italic">captivate</span>, <span className="italic">convert</span>, and create <span className="italic">lasting impressions</span>.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <AnimatedButton 
                href="#portfolio" 
                variant="primary"
                icon={<ArrowRight size={16} />}
              >
                See My Work
              </AnimatedButton>
              <AnimatedButton 
                href="#contact" 
                variant="secondary"
              >
                Let's Talk
              </AnimatedButton>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 -z-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-400 via-purple-400/30 to-orange-500/80 mt-20 blur-[100px] opacity-70"></div>
          
          <div className="relative z-0 mt-12">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 z-10" />
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Yugha"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-3">
              <div className="bg-orange-500 rounded-full p-2">
                <Star className="text-white" size={24} />
              </div>
            </div>
          </div>
        </ParallaxSection>
      </AnimatedGradientBg>

      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full -mr-48 -mt-48 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full -ml-48 -mb-48 opacity-50 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full z-0"></div>
                <GlassCard className="rounded-2xl overflow-hidden p-2">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Yugha working"
                    width={600}
                    height={600}
                    className="rounded-xl shadow-xl relative z-10 transform transition-transform duration-500 hover:scale-105"
                  />
                </GlassCard>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg p-3">
                  <div className="bg-orange-500 rounded-full p-2">
                    <Star className="text-white" size={20} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-orange-500 font-medium inline-block">
                WHY CHOOSE ME
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
                The Advantage of <span className="text-orange-500">Versatility</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg">
                In today's interconnected digital landscape, having a partner who understands both the power of words
                and the potential of technology creates an unmatched advantage for your business.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full p-3 shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Results-Driven Strategy</h3>
                    <p className="mt-1 text-gray-600">
                      Every word written and line of code developed is strategically crafted to achieve your specific
                      business objectives and maximize ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full p-3 shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Seamless Integration</h3>
                    <p className="mt-1 text-gray-600">
                      No more coordinating between copywriters and developers. Get perfectly aligned messaging and
                      functionality from a single source.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full p-3 shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Future Proof Solutions</h3>
                    <p className="mt-1 text-gray-600">
                      I build with scalability in mind, ensuring your digital assets can grow and evolve alongside your
                      business without costly rebuilds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <AnimatedButton href="#contact" variant="primary">
                  Start Your Project
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600"></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
              <AnimatedCounter end={120} suffix="+" className="text-5xl font-bold text-white" />
              <div className="mt-2 text-lg text-white">Projects Completed</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
              <AnimatedCounter end={98} suffix="%" className="text-5xl font-bold text-white" />
              <div className="mt-2 text-lg text-white">Client Satisfaction</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
              <AnimatedCounter end={15} suffix="M+" className="text-5xl font-bold text-white" />
              <div className="mt-2 text-lg text-white">Words Written</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
              <AnimatedCounter end={43} className="text-5xl font-bold text-white" />
              <div className="mt-2 text-lg text-white">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>
    

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full -mr-48 -mt-48 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full -ml-48 -mb-48 opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium inline-block">
              MY WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              A showcase of my finest work across copywriting and development. Each project represents a unique
              challenge solved with creativity and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModernProjectCard
              title="Horizon E-commerce Rebrand"
              category="Copywriting & Web Development"
              image="/placeholder.svg?height=400&width=600"
              description="Transformed an underperforming online store with compelling product descriptions and a streamlined checkout process. Resulted in a 43% increase in conversion rate."
              link="#"
              index={0}
            />

            <ModernProjectCard
              title="Wellness App"
              category="Mobile App Development"
              image="/placeholder.svg?height=400&width=600"
              description="Created an intuitive wellness tracking application with personalized insights and seamless social sharing. Achieved 50,000+ downloads in the first month."
              link="#"
              index={1}
            />

            <ModernProjectCard
              title="Financial Services Campaign"
              category="Email Marketing & Copywriting"
              image="/placeholder.svg?height=400&width=600"
              description="Developed a 6-part email sequence that educated prospects on investment options. Generated a 28% open rate and $1.2M in new investments."
              link="#"
              index={2}
            />

            <ModernProjectCard
              title="Restaurant Ordering System"
              category="Web Application"
              image="/placeholder.svg?height=400&width=600"
              description="Built a custom ordering platform that integrated with existing POS systems. Reduced order errors by 94% and increased average order value by 17%."
              link="#"
              index={3}
            />

            <ModernProjectCard
              title="Tech Startup Landing Page"
              category="Copywriting & Web Design"
              image="/placeholder.svg?height=400&width=600"
              description="Crafted compelling messaging and designed a high-converting landing page that increased demo requests by 156% and reduced bounce rate by 23%."
              link="#"
              index={4}
            />

            <ModernProjectCard
              title="Fitness Tracker Dashboard"
              category="Web Development"
              image="/placeholder.svg?height=400&width=600"
              description="Designed an intuitive analytics dashboard that visualizes workout data and progress. Improved user retention by 37% through enhanced engagement."
              link="#"
              index={5}
            />
          </div>

          <div className="text-center mt-12">
            <AnimatedButton 
              href="#" 
              variant="outline"
              icon={<ArrowRight size={16} />}
              className="text-orange-500 border-orange-500"
            >
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <section id="services" className="bg-gradient-to-br from-gray-900 to-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium">WHAT I DO</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Expertise That Delivers Results</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
              Combining the art of persuasive communication with the science of development to create solutions that
              don't just work—they excel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="💡"
              title="Conversion-Focused Copywriting"
              description="Words that work as hard as you do. I craft compelling copy that guides your audience from curiosity to conversion, turning readers into customers and browsers into buyers."
              features={["Email Campaigns", "Landing Pages", "Website Copy", "Sales Funnels"]}
            />

            <ServiceCard
              icon="🖥️"
              title="Intuitive Web Development"
              description="Websites that wow and convert. I build responsive, lightning-fast digital experiences that engage your visitors and effortlessly guide them toward your business goals."
              features={["Custom Websites", "E-commerce Solutions", "Web Applications", "Performance Optimization"]}
            />

            <ServiceCard
              icon="📱"
              title="Seamless App Development"
              description="Mobile experiences that users love. I develop feature-rich applications that combine stunning design with flawless functionality, keeping users coming back for more."
              features={["iOS & Android Apps", "Progressive Web Apps", "UI/UX Design", "App Maintenance"]}
            />
          </div>
        </div>
      </section>

   

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium">CLIENT FEEDBACK</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">What People Are Saying</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take my word for it. Here's what clients have to say about working with me on their projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Yugha transformed our online presence with copy that actually converts. Our lead generation has increased by 78% since the website relaunch."
              author="Sarah Johnson"
              position="Marketing Director, TechFlow Inc."
              avatar="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              quote="The app Yugha developed for us has received outstanding feedback from users. The intuitive design and smooth functionality exceeded our expectations."
              author="Michael Chen"
              position="Founder, HealthTrack"
              avatar="/placeholder.svg?height=100&width=100"
            />

            <TestimonialCard
              quote="Working with someone who understands both copywriting and development was a game-changer. Yugha delivered a cohesive product that perfectly communicated our brand."
              author="Jessica Williams"
              position="CEO, Bright Solutions"
              avatar="/placeholder.svg?height=100&width=100"
            />
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-500 font-medium">GET IN TOUCH</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">
                Let's Create Something Amazing Together
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Ready to elevate your digital presence with compelling copy and seamless development? Let's discuss how
                I can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-orange-100 rounded-full p-2">
                        <svg
                          className="w-5 h-5 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-600">hello@yugha.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-orange-100 rounded-full p-2">
                        <svg
                          className="w-5 h-5 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-orange-100 rounded-full p-2">
                        <svg
                          className="w-5 h-5 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-600">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-full transition-colors group">
                      <svg
                        className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-full transition-colors group">
                      <svg
                        className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-full transition-colors group">
                      <svg
                        className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-full transition-colors group">
                      <svg
                        className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-orange-100 p-3 rounded-full transition-colors group">
                      <svg
                        className="w-5 h-5 text-gray-700 group-hover:text-orange-500 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <div className="flex items-center justify-center bg-orange-500 rounded-full h-10 w-10 mr-3">
                  <span className="font-bold text-white">YU</span>
                </div>
                <span className="text-xl font-bold">Yugha</span>
              </Link>
              <p className="mt-2 text-gray-400 text-sm">
                Transforming ideas into impact through powerful words and elegant code.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Copywriting
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      UI/UX Design
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Yugha. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Crafted with passion and precision</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

