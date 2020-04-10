import { Component, ComponentInterface, Host, h } from '@stencil/core'
@Component({
    tag: 'my-comp',
    styleUrl: 'my-comp.scss',
    templateUrl: 'template.html',
    shadow: true,
})
export class MyComp extends templateUrl implements ComponentInterface {
    render() {
        return (
            <Host>
                // <h1>Hello </h1>
            </Host>
        )
    }
}
