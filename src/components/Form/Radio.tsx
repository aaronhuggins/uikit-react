import React from 'react';
import _classNames from 'classnames';
const classNames = _classNames;
import { setClassNames } from '../../utils/set-class-names';

export class Radio extends React.Component<FormInputProps, any> {
  render() {
    return (
      <input
        id={this.props.id}
        placeholder={this.props.placeholder ? this.props.placeholder : null}
        style={this.props.style ? this.props.style : null}
        className={this.setClassNames()}
        type="radio"
        name={this.props.name ? this.props.name : null}
        checked={(this.props.value as unknown) as boolean}
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
      />
    );
  }

  private setClassNames(): string {
    return classNames({
      [`uk-radio`]: true,
      [`uk-form-${this.props.color}`]: !!this.props.color,
      [`uk-form-${this.props.width}`]: !!this.props.width,
      [`uk-form-${this.props.layout}`]: !!this.props.layout,
      [`${setClassNames(this.props)}`]: true,
    });
  }
}
