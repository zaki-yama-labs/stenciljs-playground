import { newE2EPage } from '@stencil/core/testing';

describe('prop-attribute', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<prop-attribute></prop-attribute>');

    const element = await page.find('prop-attribute');
    expect(element).toHaveClass('hydrated');
  });
});
