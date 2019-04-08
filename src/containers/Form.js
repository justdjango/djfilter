import React from "react";
import {
  Form,
  Select,
  InputNumber,
  Input,
  Radio,
  Button,
  DatePicker
} from "antd";

const Search = Input.Search;
const { Option } = Select;
const { RangePicker } = DatePicker;

class FilterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: { span: 12, offset: 6 }
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item>
          <h1 className="ant-form-text">Filter Journals</h1>
        </Form.Item>
        <Form.Item>
          <Search
            placeholder="Title contains..."
            onSearch={value => console.log(value)}
            enterButton
          />
        </Form.Item>
        <Form.Item>
          <Search
            placeholder="Exact ID..."
            onSearch={value => console.log(value)}
            enterButton
          />
        </Form.Item>
        <Form.Item>
          <Search
            placeholder="Title or author..."
            onSearch={value => console.log(value)}
            enterButton
          />
        </Form.Item>
        <Form.Item hasFeedback>
          {getFieldDecorator("select")(
            <Select placeholder="Select a category">
              <Option value="Sport">Sport</Option>
              <Option value="Lifestyle">Lifestyle</Option>
              <Option value="Music">Music</Option>
              <Option value="Coding">Coding</Option>
              <Option value="Travelling">Travelling</Option>
            </Select>
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("range-picker")(<RangePicker />)}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("minimum-views")(
            <InputNumber min={0} placeholder="0" />
          )}
          <span className="ant-form-text"> minimum views</span>
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("maximum-views")(
            <InputNumber min={0} placeholder="0" />
          )}
          <span className="ant-form-text"> maximum views</span>
        </Form.Item>

        <Form.Item>
          {getFieldDecorator("radio-group")(
            <Radio.Group>
              <Radio value="reviewed">Reviewed</Radio>
              <Radio value="notReviewed">Not Reviewed</Radio>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedFilterForm = Form.create({ name: "validate_other" })(FilterForm);

export default WrappedFilterForm;
