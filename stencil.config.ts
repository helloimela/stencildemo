import { Config } from '@stencil/core';
import { less } from '@stencil/less';

export const config: Config = {
  bundles:[
    {components:['cui-alert','cui-content','cui-footer','cui-header','cui-nav-item','cui-input-file']}
  ],
  namespace: 'new-cui-demo',
  globalStyle: 'src/global/app.less',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    less()
  ]
};
