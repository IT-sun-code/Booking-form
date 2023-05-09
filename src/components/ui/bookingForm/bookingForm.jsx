import styles from "./bookingForm.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useFromData } from "../../../common/hooks/useForm";
import { Select, Form, Space, DatePicker, TimePicker, Input } from "antd";
import Button from "../button";
import { timeFormat } from "../../../common/constants/formats";
import {
  currentDate,
  currentHour,
  currentMinute,
} from "../../../common/constants/formattedData";

const { Option } = Select;
const { TextArea } = Input;

const validateMessages = {
  required: "'${label}' обязательное поле",
};

const BookingForm = ({ onConfirm }) => {
  const [date, setDate] = useState("");

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
        layout={"vertical"}
        className={styles.form}
        name="booking"
        validateMessages={validateMessages}
        onFinish={() => {
          onConfirm(), handleFormFinish();
        }}
      >
        <h3 className={styles.heading}>Форма бронирования переговорной</h3>

        <Space className={styles.position} size={24}>
          <Form.Item label="Башня" name="tower" rules={[{ required: true }]}>
            <Select
              style={{ width: 164 }}
              onChange={(value) => handleSelectChange(value, "tower")}
            >
              <Option value="A">A</Option>
              <Option value="B">B</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Этаж" name="floor" rules={[{ required: true }]}>
            <Select
              style={{ width: 164 }}
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
              style={{ width: 164 }}
              onChange={(value) => handleSelectChange(value, "room")}
            >
              {roomOptions}
            </Select>
          </Form.Item>
        </Space>

        <Space className={styles.position} size={24}>
          <Form.Item label="Дата" name="date" rules={[{ required: true }]}>
            <DatePicker
              size={"large"}
              style={{ width: 256 }}
              placeholder="Выберете дату"
              disabledDate={disabledDate}
              onChange={(value) => {
                handleDateChange(value, "date"), setDate(value.date());
              }}
            />
          </Form.Item>

          <Form.Item
            label="Период времени"
            name="timeRange"
            rules={[
              { required: true },
              {
                validator: (_, value) => {
                  if (value) {
                    const [start, end] = value;
                    const selectedStartHour = start.hour();
                    const selectedStartMinute = start.minute();
                    const selectedEndHour = end.hour();

                    if (value && start.isSame(end, "minute")) {
                      return Promise.reject(
                        "Время начала и окончания не должны совпадать"
                      );
                    }

                    if (date === currentDate.getDate()) {
                      if (
                        (selectedStartHour < currentHour &&
                          selectedEndHour < currentHour) ||
                        selectedStartHour < currentHour ||
                        (selectedStartHour === currentHour &&
                          selectedStartMinute < currentMinute)
                      ) {
                        return Promise.reject(
                          "Время должно быть больше текущего"
                        );
                      }
                    }
                    return Promise.resolve();
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <TimePicker.RangePicker
              size={"large"}
              style={{ width: 256 }}
              format={timeFormat}
              placeholder={["Начало", "Конец"]}
              showTime={{ hideDisabledOptions: true }}
              disabledTime={disabledRange}
              onChange={(value) => handleRangeChange(value, "timeRange")}
            />
          </Form.Item>
        </Space>

        <Form.Item label="Комментарий" name="comment">
          <TextArea
            size="large"
            style={{ maxHeight: 112 }}
            placeholder={`Нужен принтер,\nканцелярия...`}
            onChange={(value) =>
              handleSelectChange(value.currentTarget.value, "comment")
            }
          />
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
