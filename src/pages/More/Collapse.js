/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:52
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Collapse} from 'antd';
import {connect} from 'dva';

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CollapseC =  () => {
  return (
    <div>
      <Collapse onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <Collapse defaultActiveKey="1">
            <Panel header="This is panel nest panel" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  )
}

export default connect(state =>state)(({example}) => <CollapseC example={example} />)
