import InputTextBox from "./InputTextBox";

//Now, every field can be rendered with label and wrapping field-div with just one line:
function InputFieldComponent({ label, ...inputProps }) {
    return (
      <div className="string-field field">
        { label && <label>{ label }</label> }
        <InputTextBox { ...inputProps } />
      </div>
    );
  }
  

  export default InputFieldComponent;