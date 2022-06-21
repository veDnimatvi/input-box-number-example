import React from 'react'
import { Form, Input, Button } from 'antd';

export default function InputBox({list, bonusNumber}) {

    function clickEvent(value, next, last) {
        if (next !== '' && value.target.value.length === 2) {
          next.current.focus();
        }
        if (value.keyCode === 8 && value.target.value === '' && last !== '') {
          last.current.focus();
        }
    }
    
    return (
        <div style={{ display: "flex" }}>
            {
                list && list?.map((item, index) => {
                    if (index === 0) {
                        return <Form.Item name={`in${index}`} key={index}>
                                    <Input type="text" ref={item} maxLength="2" onKeyUp={(e) => clickEvent(e, list?.[index + 1], '')}/>
                                </Form.Item>
                    }
                    else if (index === list?.length - 1) {
                        return <div key={index} style={{ display: "flex", marginLeft: "10px" }}>
                            {bonusNumber && <div style={{borderLeft: '3px solid #fff'}}></div>}
                            <Form.Item name={`in${index}`}>
                                    <Input type="text" ref={item} maxLength="2" onKeyUp={(e) => clickEvent(e, '', list?.[index - 1])}/>
                            </Form.Item>
                        </div>
                    }
                    return <Form.Item name={`in${index}`} key={index}>
                                <Input type="text" ref={item} maxLength="2" onKeyUp={(e) => clickEvent(e, list?.[index + 1], list?.[index - 1])}/>
                            </Form.Item>
                })
            }

            <Form.Item>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
            </Form.Item>
        </div>
    )
}
