module.exports = {
  stories: [
    '../src/stories/*.stories.mdx',
    '../src/stories/temp/*.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/temp/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
