import { useState } from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { Button } from '../Button';
import { GradientBackground } from '../GradientBackground';
import './Hero.css';

export function Hero({ name, title, description, profileImage, ctas }) {
  const scrollToSection = useSmoothScroll();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <GradientBackground />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              {name}
            </h1>
            <p
              role="doc-subtitle"
              className="hero-subtitle text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-4"
            >
              {title}
            </p>
            <p className="hero-description text-base sm:text-lg text-[#a1a1aa] mb-8 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {ctas.primary.target.startsWith('#') || !ctas.primary.target.includes('.') ? (
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => scrollToSection(ctas.primary.target)}
                >
                  {ctas.primary.label}
                </Button>
              ) : (
                <a
                  href={ctas.primary.target}
                  download
                  className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0a0a0f] bg-primary text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(102,126,234,0.4)] hover:bg-primary/90 active:scale-95 px-8 py-3 text-base"
                >
                  {ctas.primary.label}
                </a>
              )}
              <Button
                variant="secondary"
                size="md"
                onClick={() => scrollToSection(ctas.secondary.target)}
              >
                {ctas.secondary.label}
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              className={`
                relative w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80
                rounded-3xl overflow-hidden
                shadow-[0_0_40px_rgba(102,126,234,0.3)]
                bg-gradient-to-br from-primary to-secondary
              `}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-[2px]">
                <div className="w-full h-full rounded-3xl bg-[#0a0a0f] overflow-hidden">
                  {/* Loading placeholder */}
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50
                      animate-pulse transition-opacity duration-500
                      ${imageLoaded ? 'opacity-0' : 'opacity-100'}
                    `}
                  />
                  <img
                    src={profileImage.src}
                    alt={profileImage.alt}
                    className={`
                      w-full h-full object-cover rounded-3xl
                      transition-opacity duration-500
                      ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                    `}
                    loading="eager"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
