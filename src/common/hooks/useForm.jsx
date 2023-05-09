import { useState } from "react";
import { dateFormat, timeFormat } from "../constants/formats";
import { initialFormData } from "../constants/initialFormData";
import { currentDate, currentHour } from "../constants/formattedData";

export const useFromData = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormFinish = () => {
    const formDataString = JSON.stringify(formData);
    localStorage.setItem("formData", formDataString);
    console.log(formDataString);
  };

  const handleSelectChange = (value, type) => {
    value && setFormData((prevState) => ({ ...prevState, [type]: value }));
  };

  const disabledDate = (current) => {
    if (currentHour + 1 > 23) {
      return (
        current < currentDate ||
        (current.date() === currentDate.getDate() &&
          current.month() === currentDate.getMonth())
      );
    } else {
      return current < currentDate;
    }
  };

  const handleDateChange = (value, type) => {
    if (value) {
      const valueData = value.format(dateFormat);
      setFormData((prevState) => ({ ...prevState, [type]: valueData }));
    }
  };

  const disabledRange = () => {
    const disabledMinutes = [...Array(60).keys()].filter(
      (minute) => minute !== 0 && minute % 15 !== 0
    );
    return {
      disabledMinutes: () => disabledMinutes,
    };
  };

  const handleRangeChange = (value, type) => {
    if (value) {
      const formattedValues = value.map((val) => val.format(timeFormat));
      setFormData((prevState) => ({ ...prevState, [type]: formattedValues }));
    }
  };

  return {
    handleFormFinish,
    handleSelectChange,
    disabledDate,
    handleDateChange,
    disabledRange,
    handleRangeChange,
  };
};
