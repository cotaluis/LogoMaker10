const { generateLogo } = require('./logo-generator');

test('generateLogo should create a valid SVG', () => {
  const text = 'Test Logo';
  const logo = generateLogo(text);

  expect(logo.toString()).toContain('<svg');
  expect(logo.toString()).toContain('<rect');
  expect(logo.toString()).toContain('<text');
});
