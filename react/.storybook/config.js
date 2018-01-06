// @flow

import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import injectTapEventPlugin from 'react-tap-event-plugin';

setAddon(infoAddon);

setOptions({
  name: 'fractal-components',
  url: 'https://github.com/wxyyxc1992/fractal-components',
  showDownPanel: false
});

injectTapEventPlugin();

require('./decorator/stories.scss');

function loadStories() {
  require('../stories/button');
  require('../stories/menu');
  require('../stories/card');
  require('../stories/carousel');
  require('../stories/chip');
  require('../stories/dialog');
  require('../stories/divider');
  require('../stories/folder');
  // require("../stories/form");
  require('../stories/label');
  // require("../stories/list");
  require('../stories/pagination');
  require('../stories/select');
  require('../stories/shape');
  require('../stories/tooltip');
  require('../stories/tree');
  require('../stories/upload');
}

/*
import { configure, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Component', module)
  .add('simple info',
    withInfo('doc string about my component')(() =>
      <Component>Click the "?" mark at top-right to view the info.</Component>
    )
  )
*/

configure(loadStories, module);
