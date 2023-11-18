import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './componenets/ui/common/button/button';
import Layout from './componenets/layout/layout/layout';

export default function App() {
  return (
    <Layout>
      <Button variant="primary">Click here</Button>
    </Layout>
  );
}
