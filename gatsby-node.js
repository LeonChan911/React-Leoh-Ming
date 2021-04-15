const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'react-leoh-ming/lib': path.resolve(__dirname, '../components/'),
        'react-leoh-ming/esm': path.resolve(__dirname, '../components/'),
        'react-leoh-ming': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
