import { useState } from "react";
import { dateFormat, timeFormat } from "../constants/formats/formats";
import { initialFormData } from "../constants/initialFormData/initialFormData";
import {
  today,
  currentDate,
  currentHour,
  currentMinute,
} from "../constants/formattedData/formattedData";

export const useFromData = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormFinish = () => {
    console.log(JSON.stringify(formData));
  };

  const disabledDate = (current) => {
    return current < today;
  };

  const handleDateChange = (value, type) => {
    const valueData = value.format(dateFormat);
    setFormData((prevState) => ({ ...prevState, [type]: valueData }));
  };

  const handleSelectChange = (value, type) => {
    value && setFormData((prevState) => ({ ...prevState, [type]: value }));
  };

  const disabledRange = (current) => {
    const disabledHours = [];
    let disabledMinutes = [];

    if (current.$d.toDateString() === currentDate.toDateString()) {
      for (let i = 0; i < currentHour; i++) {
        disabledHours.push(i);
      }
      if (current.$H === currentHour) {
        for (let i = 0; i < currentMinute; i++) {
          disabledMinutes.push(i);
        }
      }
    }
    return {
      disabledHours: () => disabledHours,
      disabledMinutes: () => disabledMinutes,
    };
  };

  const handleRangeChange = (value, type) => {
    const formattedValues = value.map((val) => val.format(timeFormat));
    setFormData((prevState) => ({ ...prevState, [type]: formattedValues }));
  };

  return {
    handleSelectChange,
    handleFormFinish,
    disabledDate,
    handleDateChange,
    disabledRange,
    handleRangeChange,
  };
};
