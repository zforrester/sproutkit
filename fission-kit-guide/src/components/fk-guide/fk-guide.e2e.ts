import { newE2EPage } from '@stencil/core/testing';

describe('fk-guide', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fk-guide></fk-guide>');

    const element = await page.find('fk-guide');
    expect(element).toHaveClass('hydrated');
  });
});
