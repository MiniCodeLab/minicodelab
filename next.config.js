module.exports = {
  images: {
    domains: ['s3.us-west-2.amazonaws.com', 'res.cloudinary.com']
  },
  async rewrites() {
    return [
      {
        source: '/js/script.js',
        destination: 'https://plausible.io/js/plausible.js'
      },
      {
        source: '/api/event',
        destination: 'https://plausible.io/api/event'
      }
    ];
  }
};
