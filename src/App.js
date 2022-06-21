import './App.css';
import React, {useRef} from 'react'
// import ReactCodeInput from "react-code-input";
import { Form } from 'antd';
import InputBox from './components/InputBox';

function App() {
  const [form] = Form.useForm();

  const inputIst = useRef(null);
  const inputSec = useRef(null);
  const inputThird = useRef(null);
  const inputFor = useRef(null);
  const inputFive = useRef(null);
  const inputSix = useRef(null);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="App">
      
      {/* <ReactCodeInput type='text' fields={6} onChange={(value) => console.log(value)} /> */}
      <br /><br /><br /><br /><br />
      <Form form={form} onFinish={onFinish}>
        <InputBox list={[inputIst, inputSec, inputThird, inputFor, inputFive, inputSix]} bonusNumber={true} />
      </Form>
      
      <br /><br /><br /><br /><br />

    </div>
  );
}

export default App;
