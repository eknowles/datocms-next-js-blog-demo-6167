import React from 'react';

import LandingHero from './landing-hero.component';

const Template = (args) => <LandingHero {...args} />;

export default {
  title: 'Modules/LandingHero',
  component: LandingHero,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  title: 'Lorem Ipsum',
  subtitle: 'lorem ipsum',
};
