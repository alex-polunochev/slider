module.exports = async () => {
  // Set the NODE_ENV to 'test'
  process.env.NODE_ENV = 'test';

  // Load environment variables.
  // eslint-disable-next-line global-require
  return require('./env');
};
