// Heritage Auto Care: site settings shared by every page.
// Fill these in when the services are ready. Empty values keep the current behaviour.
window.HERITAGE_SITE = {
  // Where quote requests are sent (POSTed as JSON). For example a Urable, Zapier or form webhook URL.
  quoteEndpoint: '',
  // Your Urable online booking link. When set, a "Book online" button appears next to every quote form.
  bookingUrl: '',
  // URL of the deployed Google reviews worker (see integrations/google-reviews-worker.js).
  // When set, the star rating and review count update automatically on every page.
  reviewsEndpoint: '',
  // Google Tag Manager (GTM-W9SR5JPQ) is installed in the homepage <head> only.
  // Leave this empty, otherwise the container loads on other pages too.
  // Meta Pixel, Conversions API and GA4 tags live inside the container.
  gtmId: '',
  // Set to false if your cookie banner already sets Google consent mode defaults.
  consentDefaults: true,
};
