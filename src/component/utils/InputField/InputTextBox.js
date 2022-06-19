import React from 'react';
import { withEntityData } from './InputFieldCluster';
  class InputTextBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
   // this.props.onChange && this.props.onChange(e.target.value);
    const { path, onChange } = this.props;
  onChange && onChange(path, e.target.value);
  }
  render() {
    const {
      className,
      value
    } = this.props;
    return (
      <input 
        className={className}
        type="text"
        value={value}
        onChange={this.handleChange} />
    );
  }
}

export default withEntityData(InputTextBox);