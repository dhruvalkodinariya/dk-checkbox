import { html ,css, LitElement} from 'lit-element';
import '@material/mwc-checkbox/mwc-checkbox';
import '@dhruval/dk-form-field/dk-form-field';
import {Typography} from '@dhruval/material-styles/typography';

export class DkCheckbox extends LitElement {

  static get styles(){
    return[
      Typography,
      css`
        :host{
          display: block;
          outline:none;
          
          --mdc-checkbox-unchecked-color: var(--mdc-theme-text-secondary);
          /* Required for unchecked focus ripple */
          --mdc-theme-on-surface: var(--mdc-theme-surface);
          --mdc-checkbox-disabled-color: var(--mdc-theme-text-disabled);
          --mdc-checkbox-mark-color: var(--mdc-theme-on-secondary);
        }
        :host[hidden] {
          display: none;
        }
      `
    ];
  }

  static get properties() {
    return {
      name: {
        type: String
      },
      
      value: {
        type: String
      },
      
      label: { type: String },

      alignEnd: { type: Boolean },
      
      disabled: { type: Boolean },

      checked: { type: Boolean },

      indeterminate: { type: Boolean}
    };
  }

  render() {
    return html`
      <dk-form-field .label="${this.label}" ?disabled="${this.disabled}" ?alignEnd="${this.alignEnd}">
        <mwc-checkbox
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?indeterminate="${this.indeterminate}"
          @change="${this._onChange}"
          @click="${(e) => { setTimeout(() => { e.target.blur(); }, 1)}}"></mwc-checkbox>
      </dk-form-field>
    `;
  }

  constructor() { 
    super();
    this.disabled = false;
    this.alignEnd = false;
    this.checked = false;
    this.indeterminate = false;
    this.label = "";
    this.value = "";
  }
  
  /**
   * Toggles current state of the checkbox
   */
  toggle(){
    this.shadowRoot.querySelector('dk-form-field').input.focus();
    this.shadowRoot.querySelector('dk-form-field').input.click();
  }

  /**
   * Trigger's `checked-changed` event
   * Sets value of `checked` property
   */
  _onChange(e) { 
    this.checked = e.target.checked;
    this.dispatchEvent(new Event('checked-changed', e));
  }
}
customElements.define('dk-checkbox', DkCheckbox);