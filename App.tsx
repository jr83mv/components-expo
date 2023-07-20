import {SafeAreaView} from 'react-native';
import Button from './src/components/button/button';
import CheckBox from './src/components/checkbox/checkbox';

export default function App() {
  return (
    <SafeAreaView>

    <Button variant={'light'} color={'red'} size={'extra large'} label={'prime'} disabled={true} />

    <CheckBox color={'blue'} disabled={false} size={'extra large'} checked={true} /> 
  </SafeAreaView>
  );
}
