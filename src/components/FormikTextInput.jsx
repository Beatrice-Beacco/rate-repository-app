import { Text, StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    color: theme.colors.error,
    marginBottom: theme.paddings.verySmallPadding,
  },
  fieldText: {
    color: theme.colors.textPrimary,
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
