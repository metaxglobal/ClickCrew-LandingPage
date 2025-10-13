'use client';
import Image from 'next/image';
import { Building06Icon, Mail02Icon, Call02Icon } from 'hugeicons-react';

/**
 * ClickCrew Landing Page Component
 * 
 * Fixed mobile layout to prevent scrolling and ensure all content
 * fits within viewport on initial load
 */

// Mobile Layout Component (< 1024px)
const MobileLayout = () => {
  return (
    <>
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-80"
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

      {/* Mobile Content Container - Flexible spacing to fit all content */}
      <div className="relative z-10 w-full h-screen flex flex-col px-4 max-w-[343px] mx-auto sm:max-w-[540px] md:max-w-[688px]"
           style={{ 
             paddingTop: 'clamp(40px, 20vh, 160px)',
             paddingBottom: 'clamp(16px, 3vh, 24px)'
           }}>
        
        {/* Top Content - Logo, Heading, Description */}
        <div className="flex flex-col items-center w-full" style={{ gap: 'clamp(6px, 1.5vh, 10px)' }}>
          
          {/* Logo */}
          <div className="relative w-[145px] h-[29px] sm:w-[180px] sm:h-[36px] md:w-[200px] md:h-[40px]">
            <Image
              src="/logo.svg"
              alt="ClickCrew Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center w-full" style={{ gap: 'clamp(4px, 1vh, 8px)' }}>
            {/* Heading - Original size */}
            <h1 
              className="w-full text-[26px] sm:text-[32px] md:text-[38px] font-bold text-center text-[#1E1E1E]"
              style={{ lineHeight: '1.1' }}
            >
              Launching Soon🚀
            </h1>

            {/* Description - Original size */}
            <p 
              className="w-full text-[14px] sm:text-[16px] md:text-[18px] font-normal text-center text-[#767676] max-w-[290px] sm:max-w-[450px] md:max-w-[500px]"
              style={{ lineHeight: '1.35', wordWrap: 'break-word' }}
            >
              We're crafting something exciting to help freelancers and brands connect effortlessly. Stay tuned — the wait will be worth it.
            </p>
          </div>
        </div>

        {/* Contact Section - Mobile - Flexible positioning */}
        <div className="w-full flex justify-center items-center" style={{ flex: '1 1 auto', minHeight: 0 }}>
          <div style={{
            width: '220px',
            padding: '12px',
            background: 'white',
            boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.13)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '10px'
          }}>
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{
                width: '100%',
                textAlign: 'center',
                color: '#1E1E1E',
                fontSize: '16px',
                fontFamily: 'Bricolage Grotesque',
                fontWeight: '700',
                wordWrap: 'break-word'
              }}>
                Connect with us
              </div>
              
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px'
              }}>
                {/* Company */}
                <div style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Building06Icon size={16} color="#767676" strokeWidth={1.5} />
                  <div style={{
                    textAlign: 'center',
                    color: '#767676',
                    fontSize: '16px',
                    fontFamily: 'Bricolage Grotesque',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                  }}>
                    MXM Global (Pvt) Ltd.
                  </div>
                </div>

                {/* Email */}
                <div style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Mail02Icon size={16} color="#767676" strokeWidth={1.5} />
                  <div style={{
                    textAlign: 'center',
                    color: '#767676',
                    fontSize: '16px',
                    fontFamily: 'Bricolage Grotesque',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                  }}>
                    info@metaxlobal.net
                  </div>
                </div>

                {/* Phone */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Call02Icon size={16} color="#767676" strokeWidth={1.5} />
                  <div style={{
                    textAlign: 'center',
                    color: '#767676',
                    fontSize: '16px',
                    fontFamily: 'Bricolage Grotesque',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                  }}>
                    ‪+91 84 7502 5534
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline - Stuck to bottom with flexible margin */}
        <div className="flex justify-center items-end" style={{ marginTop: 'clamp(12px, 2vh, 20px)' }}>
          <div 
            className="text-[13px] sm:text-[14px] md:text-[15px]"
            style={{
              padding: '10px',
              borderRadius: '12px',
              outline: '1px #D9D9D9 solid',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span style={{
              textAlign: 'center',
              color: '#4361EE',
              fontFamily: 'Bricolage Grotesque',
              fontWeight: '400',
            }}>
              Click. Connect. Grow – with ClickCrew.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// Desktop Layout Component (>= 1024px)
const DesktopLayout = () => {
  return (
    <>
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-80"
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

      {/* Desktop Content Container with proper spacing */}
      <div className="relative z-10 w-full h-full flex flex-col px-4 
                      lg:max-w-[800px] 
                      xl:max-w-[800px] 
                      2xl:max-w-[800px] 
                      mx-auto justify-between py-12">
        
        {/* Top Section - Logo, Heading, Description */}
        <div 
          className="flex flex-col items-center w-full lg:gap-[32px] xl:gap-[36px]"
          style={{ 
            marginTop: 'clamp(100px, 18vh, 280px)' // Scales: 120px (laptop) to 280px (2K+)
          }}
        >
          
          {/* Logo */}
          <div className="relative 
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

          {/* Text Content */}
          <div className="flex flex-col items-center w-full 
                          lg:gap-[15px] 
                          xl:gap-[18px]">
            {/* Heading */}
            <h1 
              className="w-full font-bold text-center text-[#1E1E1E]
                         lg:text-[48px]
                         xl:text-[64px]
                         2xl:text-[72px]"
              style={{ lineHeight: '1.2' }}
            >
              Launching Soon🚀
            </h1>

            {/* Description */}
            <p 
              className="w-full font-normal text-center text-[#767676]
                         lg:text-[20px] lg:max-w-[700px]
                         xl:text-[24px] xl:max-w-[900px]
                         2xl:text-[26px] 2xl:max-w-[1000px]"
              style={{ lineHeight: '1.5', wordWrap: 'break-word' }}
            >
              We're crafting something exciting to help freelancers and brands connect effortlessly. Stay tuned — the wait will be worth it.
            </p>
          </div>
        </div>

        {/* Contact Section - Desktop (82px gap before) */}
        <div className="w-full flex justify-center" style={{ marginTop: '20px', flex: '1 1 auto', alignItems: 'center', display: 'flex' }}>
          <div style={{
            width: '100%',
            padding: '24px',
            background: 'white',
            boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.13)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '32px'
          }}>
            <div style={{
              width: '100%',
              textAlign: 'center',
              color: '#1E1E1E',
              fontSize: '24px',
              fontFamily: 'Bricolage Grotesque',
              fontWeight: '700',
              wordWrap: 'break-word'
            }}>
              Connect with us
            </div>
            
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '23px'
            }}>
              {/* Company */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Building06Icon size={24} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '20px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                  wordWrap: 'break-word'
                }}>
                  MXM Global (Pvt) Ltd.
                </div>
              </div>

              {/* Divider */}
              <div style={{
                width: '1.5px',
                height: '22px',
                background: '#767676'
              }} />

              {/* Email */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Mail02Icon size={24} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '20px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                  wordWrap: 'break-word'
                }}>
                  info@metaxlobal.net
                </div>
              </div>

              {/* Divider */}
              <div style={{
                width: '1.5px',
                height: '22px',
                background: '#767676'
              }} />

              {/* Phone */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Call02Icon size={24} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '20px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                  wordWrap: 'break-word'
                }}>
                  ‪+91 84 7502 5534
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline - Fixed at bottom */}
        <div className="flex justify-center items-end" style={{ marginBottom: '36px' }}>
          <div 
            className="lg:text-[18px] xl:text-[24px] 2xl:text-[26px]"
            style={{
              padding: '10px',
              borderRadius: '12px',
              outline: '1px #D9D9D9 solid',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span style={{
              textAlign: 'center',
              color: '#4361EE',
              fontFamily: 'Bricolage Grotesque',
              fontWeight: '400',
            }}>
              Click. Connect. Grow – with ClickCrew.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Page Component with proper mobile viewport handling
export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-white">
      {/* Add styles to handle mobile viewport height properly */}
      <style jsx global>{`
        html, body {
          height: 100%;
          overflow-x: hidden;
        }
        
        /* Use dynamic viewport height for better mobile browser support */
        main {
          min-height: 100vh;
          min-height: 100dvh; /* Dynamic viewport height - excludes browser UI */
        }
        
        /* Fallback for older browsers */
        @supports (-webkit-touch-callout: none) {
          main {
            min-height: -webkit-fill-available;
          }
        }
        
        /* Enable vertical scroll on mobile only if needed */
        @media (max-width: 1023px) {
          html, body {
            overflow-y: auto;
          }
        }
        
        /* Desktop keeps overflow hidden */
        @media (min-width: 1024px) {
          html, body {
            overflow: hidden;
          }
        }
      `}</style>

      {/* Mobile Layout (< 1024px) */}
      <div className="lg:hidden w-full min-h-screen flex items-center justify-center">
        <MobileLayout />
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:flex w-full h-screen items-center justify-center overflow-hidden">
        <DesktopLayout />
      </div>
    </main>
  );
}