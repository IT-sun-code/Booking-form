// import { useEffect, useRef } from "react";
import { Select, Form, Space, DatePicker, TimePicker, Input } from "antd";
import Button from "../button";
import styles from "./bookingForm.module.css";

const { Option } = Select;
const { TextArea } = Input;

const validateMessages = {
  required: "${label} обязательное поле",
};

const BookingForm = () => {
  const onFinish = (values) => {
    console.log(JSON.stringify(values));
  };

  const floorOptions = [];
  for (let i = 3; i <= 27; i++) {
    floorOptions.push(
      <Option value={i} key={i}>
        {i}
      </Option>
    );
  }

  const roomOptions = [];
  for (let i = 1; i <= 10; i++) {
    roomOptions.push(
      <Option value={`Room ${i}`} key={i}>
        Переговорка {i}
      </Option>
    );
  }

  return (
    <Form
      name="booking"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout={"vertical"}
      className={styles.form}
    >
      <h3 className={styles.heading}>Форма бронирования переговорной</h3>
      <div className={styles.line}></div>

      <Space className={styles.position}>
        <Form.Item label="Башня" name="tower" rules={[{ required: true }]}>
          <Select style={{ width: "164px" }}>
            <Option value="A">A</Option>
            <Option value="B">B</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Этаж" name="floor" rules={[{ required: true }]}>
          <Select style={{ width: "164px" }}>{floorOptions}</Select>
        </Form.Item>
        <Form.Item label="Переговорка" name="room" rules={[{ required: true }]}>
          <Select style={{ width: "164px" }}>{roomOptions}</Select>
        </Form.Item>
      </Space>

      <Space className={styles.position}>
        <Form.Item label="Дата" name="date" rules={[{ required: true }]}>
          <DatePicker style={{ width: "164px" }} />
        </Form.Item>
        <Form.Item
          label="Время начала"
          name="startTime"
          rules={[{ required: true }]}
        >
          <TimePicker style={{ width: "164px" }} />
        </Form.Item>
        <Form.Item
          label="Время окончания"
          name="endTime"
          rules={[{ required: true }]}
        >
          <TimePicker style={{ width: "164px" }} />
        </Form.Item>
      </Space>

      <Form.Item label="Комментарий" name="comment">
        <TextArea />
      </Form.Item>

      <Space className={styles.position}>
        <Form.Item>
          <Button type={"reset"} appearance="reset">
            Очистить
          </Button>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" appearance="submit">
            Отправить
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default BookingForm;
