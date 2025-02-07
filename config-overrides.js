const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config, env) {
   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
   config = rewireLess(config, env, {
     modifyVars: { "@primary-color": "#1d4a63" },
 });
    return config;
  };