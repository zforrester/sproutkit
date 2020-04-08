import { newSpecPage } from '@stencil/core/testing';
import { FkGuide } from './fk-guide';

describe('fk-guide', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FkGuide],
      html: `<fk-guide></fk-guide>`,
    });
    expect(page.root).toEqualHtml(`
      <fk-guide>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fk-guide>
    `);
  });
});
