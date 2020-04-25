import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.js
const req = requireContext('../src', true, /\.stories\.jsx?$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const globalDependencies = story => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600&display=swap" rel="stylesheet"/>
    {story()}
  </>
);

addDecorator(globalDependencies)
configure(loadStories, module);
