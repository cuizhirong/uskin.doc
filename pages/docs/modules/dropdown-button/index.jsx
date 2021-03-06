import { Table } from 'uskin';
import React from 'react';
import Base from 'components/base/index';
import './style/index.less';
import highlight from '../../cores/highlight';
import config from './config.json';
import dropdownButton from './dropdown-button.md';

const column = [{
  title: '属性',
  width: '150px',
  key: 'property',
  dataIndex: 'property',
}, {
  title: '类型',
  width: '100px',
  key: 'type',
  dataIndex: 'type',
}, {
  title: '默认值',
  width: '150px',
  key: 'defaultValue',
  dataIndex: 'defaultValue',
}, {
  title: '描述',
  key: 'explain',
  dataIndex: 'explain',
  render(col, item) {
    return <div style={{ wordWrap: 'break-word' }}>{item.explain}</div>;
  },
}];

const data = [{
  property: 'buttonData',
  explain: '配置按钮的值和图标类',
  type: 'Object',
  defaultValue: '-',
  id: '1',
}, {
  property: 'dropdownItems',
  explain: '对象数组包含下拉菜单项的文本内容和键',
  type: 'Array',
  defaultValue: '-',
  id: '2',
}, {
  property: 'dropdownOnClick',
  explain: '单击下拉按钮中的任何项目的处理程序。',
  type: 'Function',
  defaultValue: '-',
  id: '3',
}, {
  property: 'disabled',
  explain: '设置按钮是否可以单击',
  type: 'Boolean',
  defaultValue: 'false',
  id: '4',
}];

class Model extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = highlight;

  render() {
    return (
      <div className="intro-dropdown-btn-wrapper">
        <div className="simple-description-wrapper">
          <div className="content-title">
            <span>{config.title}</span>
            <span>{config.title_cn}</span>
          </div>
          <div className="content">
            {config.simple_description}
          </div>
        </div>
        <div className="base-wrapper">
          <div className="title">基础用法</div>
          <div className="base-container-wrapper">
            <Base
              demo={config.data.dropbutton.show}
              description={config.data.dropbutton.description}
              code={dropdownButton}
            />
          </div>
        </div>
        <div className="API-wrapper">
          <div className="content-title">API</div>
          <div>
            <Table
              width="90%"
              column={column}
              data={data}
              dataKey="id"
              checkbox={false}
              striped={false}
              hover={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Model;
