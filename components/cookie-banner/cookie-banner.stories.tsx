import React from 'react';import CookieBanner from './cookie-banner.component';const Template = (args) => <CookieBanner {...args} />;export default {  title: 'Components/CookieBanner',  component: CookieBanner,};export const Story = Template.bind({});Story.args = {};