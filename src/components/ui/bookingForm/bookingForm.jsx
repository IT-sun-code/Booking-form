import { Select, Form, Space, DatePicker, TimePicker, Input } from "antd";
import Button from "../button";
import styles from "./bookingForm.module.css";
import { timeFormat } from "../../../common/constants/formats/formats";
import PropTypes from "prop-types";
import { useFromData } from "../../../common/hooks/useForm";

const { Option } = Select;
const { TextArea } = Input;

const validateMessages = {
  required: "${label} обязательное поле",
};

const BookingForm = ({ onConfirm, onClose }) => {
  const {
    handleFormFinish,
    handleSelectChange,
    handleDateChange,
    disabledDate,
    disabledRange,
    handleRangeChange,
  } = useFromData();

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
      <Option value={i} key={i}>
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
        onFinish={() => {
          onConfirm(), handleFormFinish();
        }}
        validateMessages={validateMessages}
        layout={"vertical"}
        className={styles.form}
      >
        <Button appearance="cross" onClick={onClose}>
          {<div>&times;</div>}
        </Button>

        <h3 className={styles.heading}>Форма бронирования переговорной</h3>

        <Space className={styles.position} size={24}>
          <Form.Item label="Башня" name="tower" rules={[{ required: true }]}>
            <Select
              style={{ width: "164px" }}
              onChange={(value) => handleSelectChange(value, "tower")}
            >
              <Option value="A">A</Option>
              <Option value="B">B</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Этаж" name="floor" rules={[{ required: true }]}>
            <Select
              style={{ width: "164px" }}
              onChange={(value) => handleSelectChange(value, "floor")}
            >
              {floorOptions}
            </Select>
          </Form.Item>
          <Form.Item
            label="Переговорка"
            name="room"
            rules={[{ required: true }]}
          >
            <Select
              style={{ width: "164px" }}
              onChange={(value) => handleSelectChange(value, "room")}
            >
              {roomOptions}
            </Select>
          </Form.Item>
        </Space>

        <Space className={styles.position} size={24}>
          <Form.Item label="Дата" name="date" rules={[{ required: true }]}>
            <DatePicker
              style={{ width: "256px" }}
              disabledDate={disabledDate}
              onChange={(value) => handleDateChange(value, "date")}
            />
          </Form.Item>
          <Form.Item
            label="Период времени"
            name="timeRange"
            rules={[{ required: true }]}
          >
            <TimePicker.RangePicker
              format={timeFormat}
              style={{ width: "256px" }}
              disabledTime={(current) => disabledRange(current)}
              onChange={(value) => handleRangeChange(value, "timeRange")}
            />
          </Form.Item>
        </Space>

        <Form.Item label="Комментарий" name="comment">
          <TextArea
            style={{ maxHeight: "164px" }}
            onChange={(value) =>
              handleSelectChange(value.currentTarget.value, "comment")
            }
          />
        </Form.Item>

        <Space className={styles.position}>
          <Button type={"reset"} appearance="reset">
            Очистить
          </Button>
          <Button htmlType="submit" appearance="submit">
            Отправить
          </Button>
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
