import { Select, Form, Space, DatePicker, TimePicker, Input } from "antd";
import Button from "../button";
import styles from "./bookingForm.module.css";
import { timeFormat } from "../../../common/constants/formats/formats";
import PropTypes from "prop-types";

const { Option } = Select;
const { TextArea } = Input;

const validateMessages = {
  required: "${label} обязательное поле",
};

const BookingForm = ({ onConfirm, onClose }) => {
  const onFinish = (values) => {
    console.log(typeof values);
    console.log(JSON.stringify(values));
    onConfirm();
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
    <div>
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
        <Button appearance="cross" onClick={onClose}>
          {<div>&times;</div>}
        </Button>

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
          <Form.Item
            label="Переговорка"
            name="room"
            rules={[{ required: true }]}
          >
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
            <TimePicker format={timeFormat} style={{ width: "164px" }} />
          </Form.Item>
          <Form.Item
            label="Время окончания"
            name="endTime"
            rules={[{ required: true }]}
          >
            <TimePicker format={timeFormat} style={{ width: "164px" }} />
          </Form.Item>
        </Space>

        <Form.Item label="Комментарий" name="comment">
          <TextArea style={{ maxHeight: "164px" }} />
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
    </div>
  );
};

BookingForm.propTypes = {
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
};

export default BookingForm;
