const GA_SCRIPT_ID = "ga4-script";
const META_PIXEL_SCRIPT_ID = "meta-pixel-script";

function loadScript({ id, src }) {
  if (typeof document === "undefined") {
    return;
  }

  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function initGoogleAnalytics(measurementId) {
  if (!measurementId || typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  loadScript({
    id: GA_SCRIPT_ID,
    src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
  });

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
  });
}

function initMetaPixel(pixelId) {
  if (!pixelId || typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  if (!window.fbq) {
    const fbq = function fbqProxy() {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, arguments);
      } else {
        fbq.queue.push(arguments);
      }
    };

    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
  }

  loadScript({
    id: META_PIXEL_SCRIPT_ID,
    src: "https://connect.facebook.net/en_US/fbevents.js",
  });

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

export function initAnalytics() {
  const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const metaPixelId = import.meta.env.VITE_META_PIXEL_ID;

  initGoogleAnalytics(gaMeasurementId);
  initMetaPixel(metaPixelId);
}
