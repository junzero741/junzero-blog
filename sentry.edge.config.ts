import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5553ae0e17bb48e4423bfa06b3a53a06@o4505815487479808.ingest.sentry.io/4505815496196096",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});