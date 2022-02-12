import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const orderingValues = {
  createdDesc: {
    label: "Latest repositories",
    order: "CREATED_AT",
    direction: "DESC",
  },
  createdAsc: {
    label: "Oldest repositories",
    order: "CREATED_AT",
    direction: "ASC",
  },
  ratedDesc: {
    label: "Highest rated repositories",
    order: "RATING_AVERAGE",
    direction: "DESC",
  },
  ratedAsc: {
    label: "Lowest rated repositories",
    order: "RATING_AVERAGE",
    direction: "ASC",
  },
};

const OrderSelector = ({ setOrder, setDirection }) => {
  const [selectedValue, setSelectedValue] = useState(
    orderingValues.createdDesc.label
  );

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => {
        setSelectedValue(itemValue);
        setOrder(orderingValues[itemValue].order);
        setDirection(orderingValues[itemValue].direction);
      }}
    >
      <Picker.Item
        label={orderingValues.createdDesc.label}
        value={"createdDesc"}
      />
      <Picker.Item
        label={orderingValues.createdAsc.label}
        value={"createdAsc"}
      />
      <Picker.Item label={orderingValues.ratedDesc.label} value={"ratedDesc"} />
      <Picker.Item label={orderingValues.ratedAsc.label} value={"ratedAsc"} />
    </Picker>
  );
};

export default OrderSelector;
