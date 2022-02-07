import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import { Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  fieldText: {
    borderWidth: 1,
    borderColor: theme.colors.background,
    borderRadius: theme.paddings.verySmallPadding,
    padding: theme.paddings.verySmallPadding,
    marginBottom: theme.paddings.verySmallPadding,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.fieldText}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
