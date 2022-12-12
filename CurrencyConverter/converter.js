import CurrencyInput from 'react-native-currency-input';
import { Input } from 'native-base';

function MyComponent() {
  const [value, setValue] = React.useState(2310.458);

  return (
    <CurrencyInput
      value={value}
      onChangeValue={setValue}
      renderTextInput={textInputProps => <Input {...textInputProps} variant='filled' />}
      renderText
      prefix="R$"
      delimiter="."
      separator=","
      precision={2}
    />
  );
}