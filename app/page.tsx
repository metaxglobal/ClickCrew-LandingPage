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

      {/* Mobile Content - Fixed compact spacing, footer always visible */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center px-4" style={{ paddingTop: '80px', paddingBottom: '24px' }}>
        
        {/* Logo */}
        <div className="relative w-[145px] h-[29px]">
          <Image
            src="/logo.svg"
            alt="ClickCrew Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Gap after logo */}
        <div style={{ height: '20px' }} />
        
        {/* Heading and Description */}
        <div style={{ width: '343px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <h1 
            className="w-full text-[31px] font-bold text-center text-[#1E1E1E]"
            style={{ lineHeight: '1.2' }}
          >
            Launching Soon🚀
          </h1>
          
          <p 
            className="w-full text-[16px] font-normal text-center text-[#767676]"
            style={{ lineHeight: '1.5' }}
          >
            We're crafting something exciting to help freelancers and brands connect effortlessly. Stay tuned — the wait will be worth it.
          </p>
        </div>
        
        {/* Gap before contact */}
        <div style={{ height: '24px' }} />
        
        {/* Contact Section */}
        <div style={{
          width: '220px',
          padding: '12px',
          background: 'white',
          boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.13)',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '189px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
          }}>
            <div style={{
              width: '100%',
              textAlign: 'center',
              color: '#1E1E1E',
              fontSize: '16px',
              fontFamily: 'Bricolage Grotesque',
              fontWeight: '700',
            }}>
              Connect with us
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: '14px',
              alignItems: 'center'
            }}>
              {/* Company */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}>
                <Building06Icon size={16} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '16px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                }}>
                  MXM Global (Pvt) Ltd.
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}>
                <Mail02Icon size={16} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '16px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                }}>
                  info@metaxlobal.net
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}>
                <Call02Icon size={16} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '16px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                }}>
                  ‪+91 84 7502 5534
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gap before footer - small fixed space */}
        <div style={{ height: '120px' }} />
        
        {/* Bottom Tagline - always visible */}
        <div className="text-[13px]" style={{
          padding: '10px',
          borderRadius: '12px',
          outline: '1px #D9D9D9 solid'
        }}>
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
    </>
  );
};

// Desktop Layout Component (>= 1024px) - SIMPLE FIXED SPACING
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

      {/* Desktop Content - Centered vertically with flex */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-4 lg:max-w-[800px] xl:max-w-[800px] 2xl:max-w-[800px] mx-auto">
        
        {/* Main content container - centered */}
        <div className="flex flex-col items-center" style={{ marginBottom: 'auto', marginTop: 'auto' }}>
          {/* Logo */}
          <div className="relative lg:w-[220px] lg:h-[44px] xl:w-[260px] xl:h-[52px] 2xl:w-[300px] 2xl:h-[60px]">
            <Image
              src="/logo.svg"
              alt="ClickCrew Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Gap after logo */}
          <div style={{ height: '32px' }} />
          
          {/* Heading */}
          <h1 
            className="w-full font-bold text-center text-[#1E1E1E] lg:text-[48px] xl:text-[64px] 2xl:text-[72px]"
            style={{ lineHeight: '1.2' }}
          >
            Launching Soon🚀
          </h1>
          
          {/* Gap after heading */}
          <div style={{ height: '18px' }} />
          
          {/* Description */}
          <p 
            className="w-full font-normal text-center text-[#767676] lg:text-[20px] lg:max-w-[700px] xl:text-[24px] xl:max-w-[900px] 2xl:text-[26px] 2xl:max-w-[1000px]"
            style={{ lineHeight: '1.5', wordWrap: 'break-word' }}
          >
            We're crafting something exciting to help freelancers and brands connect effortlessly. Stay tuned — the wait will be worth it.
          </p>

          {/* Gap before contact */}
          <div style={{ height: '48px' }} />
          
          {/* Contact Section */}
          <div style={{
            width: '100%',
            padding: '24px',
            background: 'white',
            boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.13)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building06Icon size={24} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '20px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                }}>
                  MXM Global (Pvt) Ltd.
                </div>
              </div>

              <div style={{ width: '1.5px', height: '22px', background: '#767676' }} />

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail02Icon size={24} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '20px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                }}>
                  info@metaxlobal.net
                </div>
              </div>

              <div style={{ width: '1.5px', height: '22px', background: '#767676' }} />

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Call02Icon size={24} color="#767676" strokeWidth={1.5} />
                <div style={{
                  textAlign: 'center',
                  color: '#767676',
                  fontSize: '20px',
                  fontFamily: 'Bricolage Grotesque',
                  fontWeight: '400',
                }}>
                  ‪+91 84 7502 5534
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Tagline - absolute positioned at bottom */}
        <div className="lg:text-[18px] xl:text-[24px] 2xl:text-[26px]" style={{
          padding: '10px',
          borderRadius: '12px',
          outline: '1px #D9D9D9 solid',
          position: 'absolute',
          bottom: '36px'
        }}>
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