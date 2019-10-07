import { newE2EPage } from '@stencil/core/testing';

describe('prop-reflect', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<prop-reflect></prop-reflect>');

    const element = await page.find('prop-reflect');
    expect(element).toHaveClass('hydrated');
  });
});
