import React from 'react';
import { Link } from 'react-router-dom';

const SubPageHero = ({
  title,
  subtitle,
  bgImageDesktop,
  bgImageMobile,
  breadcrumbs = [],
  bgPosition = "bg-center",
  children
}) => {
  const mobileBg = bgImageMobile || bgImageDesktop;

  // Use inline CSS variables to support dynamic responsive background images
  const heroStyle = {
    '--hero-bg-mobile': `url('${mobileBg}')`,
    '--hero-bg-desktop': `url('${bgImageDesktop}')`
  };

  return (
    <section
      className={`relative w-full h-[220px] md:h-[350px] flex flex-col justify-center items-center text-center overflow-hidden bg-cover ${bgPosition} bg-[image:var(--hero-bg-mobile)] md:bg-[image:var(--hero-bg-desktop)]`}
      style={heroStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center h-full w-full">
        {children ? (
          children
        ) : (
          <>
            {/* {subtitle && (
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/70 mb-3 block font-bold">
                {subtitle}
              </span>
            )} */}

            <h1 className="text-4xl md:text-6xl font-serif italic text-white pt-8 md:pt-0 mb-6 leading-tight">
              {title}
            </h1>

            {breadcrumbs.length > 0 && (
              <nav className="flex items-center justify-center space-x-3 text-[10px] uppercase tracking-widest text-white/75">
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    {crumb.link ? (
                      <Link to={crumb.link} className="hover:text-white transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white font-bold">{crumb.label}</span>
                    )}
                    {idx < breadcrumbs.length - 1 && <span className="opacity-45">/</span>}
                  </React.Fragment>
                ))}
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SubPageHero;
