import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  errorMessage: {
    borderColor: theme.colors.error,
  },
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? [style, styles.errorMessage] : style;

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
