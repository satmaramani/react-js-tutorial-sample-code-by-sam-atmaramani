import React from 'react';
import OTPInput from './index';

function App() {
  const [{ otp, numInputs, separator, minLength, maxLength, placeholder, inputType }, setConfig] = React.useState({
    otp: '',
    numInputs: 6,
    separator: '-',
    minLength: 0,
    maxLength: 40,
    placeholder: '',
    inputType: 'text' as const,
  });

  const handleOTPChange = (otp: string) => {
    setConfig((prevConfig) => ({ ...prevConfig, otp }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setConfig((prevConfig) => ({ ...prevConfig, [name]: value }));
  };

  const handleNumInputsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let numInputs = event.target.valueAsNumber;

    if (numInputs < minLength || numInputs > maxLength) {
      numInputs = 4;

      console.error(`Please enter a value between ${minLength} and ${maxLength}`);
    }

    setConfig((prevConfig) => ({ ...prevConfig, numInputs }));
  };

  const clearOtp = () => {
    setConfig((prevConfig) => ({ ...prevConfig, otp: '' }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(otp);
  };

  return (
      <div className="view">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <h1>Powered by <font color='red'>TechySam</font></h1>
            <p>Enter verification code</p>
            <div className="margin-top--small">
              <OTPInput
                inputStyle="inputStyle"
                numInputs={numInputs}
                onChange={handleOTPChange}
                renderSeparator={<span>{separator}</span>}
                value={otp}
                placeholder={placeholder}
                inputType={inputType}
                renderInput={(props) => <input {...props} />}
                shouldAutoFocus
              />
            </div>
            <div className="btn-row">
              <button className="btn margin-top--large" type="button" disabled={otp.trim() === ''} onClick={clearOtp}>
                Clear above code
              </button>
              <button className="btn margin-top--large" disabled={otp.length < numInputs}>
                Capture OTP
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default App;
