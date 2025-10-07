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
    <main className="relative h-screen w-full bg-white overflow-hidden flex items-center justify-center">
      {/* Background Grid Pattern - Mobile/Tablet only */}
      <div 
        className="lg:hidden absolute inset-0 pointer-events-none select-none opacity-80"
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
      
      {/* Desktop Background - Full width for large screens */}
      <div 
        className="hidden lg:block absolute inset-0 pointer-events-none select-none opacity-80"
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

      {/* Main Content Container - Responsive max-widths */}
      <div className="relative z-10 w-full h-full max-w-[343px] mx-auto px-4 flex flex-col justify-between py-4 lg:py-8
                      sm:max-w-[540px]
                      md:max-w-[688px]
                      lg:max-w-[800px]
                      xl:max-w-[1005px]
                      2xl:max-w-[1200px]">
        
        {/* Top and Middle Content - Centered */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center w-full gap-[39px] lg:gap-[42px] xl:gap-[48px]">
            
            {/* Logo - Responsive sizing */}
            <div className="relative w-[168px] h-[34px] 
                            md:w-[200px] md:h-[40px] 
                            lg:w-[220px] lg:h-[44px]
                            xl:w-[260px] xl:h-[52px]
                            2xl:w-[300px] 2xl:h-[60px]">
              <Image
                src="/logo.svg"
                alt="ClickCrew Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Hero Text Block */}
            <div className="flex flex-col items-center w-full gap-[12px] lg:gap-[15px] xl:gap-[18px]">
              {/* Main Heading with Rocket Emoji - Responsive sizing */}
              <h1 
                className="w-full text-[31px] font-bold text-center text-[#1E1E1E]
                           md:text-[38px]
                           lg:text-[48px]
                           xl:text-[64px]
                           2xl:text-[72px]"
                style={{ lineHeight: '1.2' }}
              >
                Launching Soon🚀
              </h1>

              {/* Description Text - Responsive sizing */}
              <p 
                className="w-full text-[16px] font-normal text-center text-[#767676]
                           md:text-[18px]
                           lg:text-[20px]
                           xl:text-[24px]
                           2xl:text-[26px]
                           max-w-[343px]
                           md:max-w-[500px]
                           lg:max-w-[700px]
                           xl:max-w-[900px]
                           2xl:max-w-[1000px]"
                style={{
                  lineHeight: '1.5',
                  wordWrap: 'break-word'
                }}
              >
                We're crafting something exciting to help freelancers and brands connect effortlessly. Stay tuned — the wait will be worth it.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Tagline with outline - Fixed at bottom with spacing */}
        <div className="flex justify-center pb-6 lg:pb-9">
          <div 
            className="text-[13px] lg:text-[18px] xl:text-[24px] 2xl:text-[26px]"
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
