import React from 'react';
import InputFieldCluster from "./InputTextField/InputFieldCluster";
import InputFieldComponent from "./InputTextField/InputFieldComponent";
 
class InputFieldsUsage extends React.PureComponent {
  render() {
  const { user, onChange } = this.props; 
  return (
    <div className="profile-form">
        <InputFieldCluster source={ user } onChange={ onChange }>
          <InputFieldComponent label="Name" path="name" />
          <InputFieldComponent label="E-mail" path="email" />
          <InputFieldComponent label="Phone" path="phone" />
        </InputFieldCluster>
      </div>
  );
}
}

export default InputFieldsUsage;
