// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BlueWhiteRaisedButton from '../src/picker/button/raised/blue_white_raised_button';
import BlueBorderRaisedButton from '../src/picker/button/raised/blue_border_raised_button';
import { StoryPanel, StoryTitle, Example } from '../.storybook/decorator/stories.js';
import BlueLinkButton from '../src/picker/button/link/link_button';
import { DownloadIconLinkButton } from '../src/picker/button/link/download_icon_link_button';
import TipButton from "../src/picker/button/tip/tip_button";


storiesOf('Button', module)
  .addDecorator(story => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      {story()}
    </MuiThemeProvider>
  ))
  .addWithInfo('Raised Button', ``, () => {
    return <StoryPanel>
      <StoryTitle label="Raised Button" description="用于显示主操作按钮"/>
      <Example label="BlueWhiteRaisedButton">

        <BlueWhiteRaisedButton label="王下邀月熊"/>

        <BlueWhiteRaisedButton label='王下邀月熊' reverse={true}/>
      </Example>

      <Example label="BlueBorderRaisedButton">
        <BlueBorderRaisedButton label="王下邀月熊"/>
      </Example>

    </StoryPanel>
  })
  .addWithInfo('Link Button', ``, () => {
    return <StoryPanel>
      <StoryTitle label="Link Button" description="用于显示次级操作按钮"/>
      <Example label="BlueLinkButton">
        <BlueLinkButton/>
      </Example>
      <Example label="DownloadIconLinkButton">
        <DownloadIconLinkButton/>
      </Example>
      <Example>
        <div>
          <TipButton/>
        </div>
        <div>
          <TipButton tipPosition="top" tip="我在上面"/>
        </div>
      </Example>
    </StoryPanel>
  });

