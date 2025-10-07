import React from 'react';

import Image from 'next/image';

/**
 * ClickCrew Landing Page Component
 * 
 * Following Next.js and React best practices:
 * - Mobile-first responsive design with standard breakpoints
 * - Semantic HTML structure
 * - Safe margins (16px minimum on mobile)
 * - Optimized images with Next.js Image component
 * - Proper TypeScript typing
 * - Accessible markup with ARIA labels
 * - CSS custom properties for maintainability
 */

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center">
      {/* Background Grid Pattern - Responsive positioning */}
      <div 
        className="absolute pointer-events-none select-none opacity-15"
        style={{
          // Mobile: zoomed out more to see full pattern
          left: '-340px',
          top: '-177px',
          width: '1055px',
          height: '1055px',
        }}
        aria-hidden="true"
      >
        <Image
          src="/background image.png"
          alt=""
          fill
          className="object-cover md:object-contain"
          priority
          quality={90}
        />
      </div>
      
      {/* Desktop Background - Full width */}
      <div 
        className="hidden md:block absolute inset-0 pointer-events-none select-none opacity-80"
        aria-hidden="true"
      >
        <Image
          src="/background image.png"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Main Content Container - Mobile First with Safe Margins and Top Padding */}
      <div className="relative z-10 w-full max-w-[343px] mx-auto
                      sm:max-w-[540px]
                      md:max-w-[688px]
                      lg:max-w-[900px]
                      xl:max-w-[1200px]"
           style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '142px' }}>
        
        {/* Content Stack - Vertical Layout with exact Figma spacing */}
        <div className="flex flex-col items-center" style={{ gap: '418px' }}>
          
          {/* Top Section: Logo and Hero Content */}
          <div className="flex flex-col items-center w-full" style={{ gap: '39px' }}>
            
            {/* Logo */}
            <div className="relative w-[168px] h-[34px] md:w-[240px] md:h-[48px] lg:w-[280px] lg:h-[56px]">
              <Image
                src="/logo.svg"
                alt="ClickCrew Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Hero Text Block */}
            <div className="flex flex-col items-center w-full max-w-[343px] md:max-w-[600px] lg:max-w-[800px] wordWrap: 'break-word'" style={{ gap: '12px' }}>
              {/* Main Heading with Rocket Emoji - In one line */}
              <h1 className="w-full text-[31px] leading-tight font-bold text-center text-[#1E1E1E]
                             md:text-[42px] md:leading-tight
                             lg:text-[56px] lg:leading-tight
                             xl:text-[64px] xl:leading-tight">
                Launching Soon🚀
              </h1>

              {/* Description Text */}
              <p className="w-full text-[16px] leading-relaxed font-normal text-center text-[#767676]
                            md:text-[18px] md:leading-relaxed
                            lg:text-[20px] lg:leading-relaxed">
                We're crafting something exciting to help freelancers and brands connect effortlessly. 
                Stay tuned — the wait will be worth it.
              </p>
            </div>
          </div>

          {/* Bottom Section: Tagline with outline - Exact Figma styling */}
          <div 
            style={{
              padding: '10px',
              borderRadius: '12px',
              outline: '1px #D9D9D9 solid',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              display: 'inline-flex'
            }}
          >
            <div style={{
              textAlign: 'center',
              color: '#4361EE',
              fontSize: '13px',
              fontFamily: 'Bricolage Grotesque',
              fontWeight: '400',
              wordWrap: 'break-word'
            }}>
              Click. Connect. Grow – with ClickCrew.
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
