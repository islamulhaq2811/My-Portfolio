import { Hero } from './components/Hero'

function App() {
  return (
    <main>
      <Hero
        name="Hi, I'm Islam ul Haq"
        title="Web Developer"
        description="I build modern and responsive websites using technologies like React and JavaScript."
        profileImage={{
          src: '/images/profile.jpg',
          alt: 'Islam ul Haq - Web Developer',
        }}
        ctas={{
          primary: {
            label: 'View Projects',
            target: 'projects',
          },
          secondary: {
            label: 'Contact Me',
            target: 'contact',
          },
        }}
      />

      {/* Placeholder sections for navigation targets */}
      <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Projects</h2>
          <p className="text-lg text-gray-600">Projects section coming soon...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h2>
          <p className="text-lg text-gray-600">Contact section coming soon...</p>
        </div>
      </section>
    </main>
  )
}

export default App
