/**
 * Google Analytics 4 utility functions
 * Replace GOOGLE_ANALYTICS_ID with your actual GA4 measurement ID
 */

const PLACEHOLDER_GA_ID = 'G-8BNH0VX95V';
const GA_ID = import.meta.env.VITE_GA_ID?.trim();
const isAnalyticsConfigured = Boolean(GA_ID && GA_ID !== PLACEHOLDER_GA_ID);

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (!isAnalyticsConfigured) {
    return;
  }

  // Add GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: GtagArgs) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && window.gtag) {
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
type GtagArgs =
  | ['js', Date]
  | ['config', string, { page_path: string }]
  | ['event', string, Record<string, string | number> | undefined];

declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void;
    dataLayer: GtagArgs[];
  }
}
