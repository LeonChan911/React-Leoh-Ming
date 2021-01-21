const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'lm-ui/lib': path.resolve(__dirname, '../components/'),
        'lm-ui/esm': path.resolve(__dirname, '../components/'),
        'lm-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
