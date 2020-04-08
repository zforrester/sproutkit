import { Component, ComponentInterface, Host, h } from '@stencil/core'

@Component({
    tag: 'fk-guide',
    styleUrl: 'fk-guide.css',
    shadow: true,
})
export class FkGuide implements ComponentInterface {
    render() {
        return (
            <Host>
                <h1>HELLLOOO</h1>
                <h1>HELLLOOO</h1>
                <h1>HELLLOOO</h1>
                <h1>HELLLOOO</h1>
                <h1>HELLLOOO</h1>
                <slot></slot>
            </Host>
        )
    }
}
