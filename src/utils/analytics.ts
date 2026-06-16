/**
 * Google Analytics 4 utility functions
 * Replace GOOGLE_ANALYTICS_ID with your actual GA4 measurement ID
 */

const GA_ID = import.meta.env.VITE_GA_ID || 'G-8BNH0VX95V'; // Replace with your GA4 ID

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (!GA_ID || GA_ID === 'G-8BNH0VX95V') {
    console.warn('Google Analytics ID not configured. Please set VITE_GA_ID in your .env file');
    return;
  }

  // Add GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // @ts-ignore
    window.dataLayer.push(arguments);
  }
  // @ts-ignore
  window.gtag = gtag;
  (gtag as (...args: unknown[]) => void)('js', new Date());
  (gtag as (...args: unknown[]) => void)('config', GA_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // @ts-ignore
    window.gtag('config', GA_ID, {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // @ts-ignore
    window.gtag('event', eventName, eventParams);
  }
};

// Track form submissions
export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

// Track contact form
export const trackContactForm = () => {
  trackEvent('contact_form_sent');
};

// Track portfolio click
export const trackPortfolioClick = (projectName: string) => {
  trackEvent('portfolio_click', {
    project_name: projectName,
  });
};

// Track link clicks
export const trackLinkClick = (url: string) => {
  trackEvent('external_link_click', {
    url: url,
  });
};

// Declare global gtag type
declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
  }
}
