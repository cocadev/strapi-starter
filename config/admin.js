module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e4c3733a43bf345fe9c7a0b2c5e5433d'),
  },
});
