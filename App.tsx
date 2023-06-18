import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import Tabs from './src/routes/tabs.routes';


export default function App() {
  return (
       <>
      <NavigationContainer>
           <Routes/>
           {/* <Tabs/> */}
      </NavigationContainer>
   </>
  );
}
