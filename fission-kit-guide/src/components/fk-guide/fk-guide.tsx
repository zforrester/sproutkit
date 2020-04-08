import { Component, ComponentInterface, h } from '@stencil/core'

@Component({
    tag: 'fk-guide',
    styleUrl: 'fk-guide.scss',
    shadow: true,
})
export class FkGuide implements ComponentInterface {
    render() {
        return (
            <div class='guide'>
                <h1>HELLLOOO</h1>
                <slot></slot>
            </div>
        )
    }
}
