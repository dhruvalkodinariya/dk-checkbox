import { LitElement, html ,css} from 'lit-element';
import '../dk-checkbox';
import {Theme} from '@dhruval/material-styles/theme';
export class DkCheckboxDemo extends LitElement {

  static get styles(){
    return[
      Theme,
      css`
        :host{
          display: block;
          padding: 24px;
        }
      `
    ];
  }

  render() {
    return html`
      <dk-checkbox label="Apple"></dk-checkbox>
      <dk-checkbox label="Banana"></dk-checkbox>
      <dk-checkbox label="Banana" checked></dk-checkbox>
      <dk-checkbox label="Banana" disabled></dk-checkbox>
      <dk-checkbox label="Banana" indeterminate></dk-checkbox>
    `;
  }
}
customElements.define('dk-checkbox-demo', DkCheckboxDemo);