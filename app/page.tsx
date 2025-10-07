import Image from 'next/image';

/**
 * ClickCrew Landing Page Component
 * 
 * Refactored with separate mobile and desktop layouts for better maintainability
 * and precise control over spacing and positioning.
 * 
 * Mobile: < 1024px (Mobile and Tablet)
 * Desktop: >= 1024px (Laptop, Desktop, Large screens)
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

      {/* Mobile Content Container with proper spacing */}
      <div className="relative z-10 w-full h-full flex flex-col px-4 max-w-[343px] mx-auto sm:max-w-[540px] md:max-w-[688px]">
        
        {/* Main Content - Centered with controlled spacing */}
        <div className="flex-1 flex items-center justify-center min-h-0 py-8">
          <div className="flex flex-col items-center w-full gap-[39px]">
            
            {/* Logo */}
            <div className="relative w-[168px] h-[34px] md:w-[200px] md:h-[40px]">
              <Image
                src="/logo.svg"
                alt="ClickCrew Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center w-full gap-[12px]">
              {/* Heading */}
              <h1 
                className="w-full text-[31px] md:text-[38px] font-bold text-center text-[#1E1E1E]"
                style={{ lineHeight: '1.2' }}
              >
                Launching Soon🚀
              </h1>

              {/* Description */}
              <p 
                className="w-full text-[16px] md:text-[18px] font-normal text-center text-[#767676] max-w-[343px] md:max-w-[500px]"
                style={{ lineHeight: '1.5', wordWrap: 'break-word' }}
              >
                We're crafting something exciting to help freelancers and brands connect effortlessly. Stay tuned — the wait will be worth it.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tagline - With proper bottom margin */}
        <div className="flex justify-center pb-8 pt-4">
          <div 
            className="text-[13px]"
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
                      xl:max-w-[1005px] 
                      2xl:max-w-[1200px] 
                      mx-auto">
        
        {/* Main Content - Centered with controlled spacing */}
        <div className="flex-1 flex items-center justify-center min-h-0 py-12">
          <div className="flex flex-col items-center w-full 
                          lg:gap-[42px] 
                          xl:gap-[48px]">
            
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
        </div>

        {/* Bottom Tagline - With proper bottom margin */}
        <div className="flex justify-center pb-12 pt-6">
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

// Main Page Component
export default function HomePage() {
  return (
    <main className="relative w-full h-screen bg-white overflow-hidden">
      {/* Mobile Layout (< 1024px) */}
      <div className="lg:hidden w-full h-full flex items-center justify-center">
        <MobileLayout />
      </div>

      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:flex w-full h-full items-center justify-center">
        <DesktopLayout />
      </div>
    </main>
  );
}
