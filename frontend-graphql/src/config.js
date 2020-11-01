// graphql api url
let url = 'https://beerbiceps2.adesignguy.co/graphql';

// If we're running on Docker, use the WordPress container hostname instead of localhost.
if (process.env.HOME === '/home/node') {
  url = 'https://beerbiceps2.adesignguy.co/graphql';
}
const Config = {
  gqlUrl: url,
};

export default Config;
