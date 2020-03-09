import React, {useState} from 'react';
import RouteNavigator from './src/navigation/routeNavigator'
import RestrictRouteNavigator from './src/navigation/restrictRouteNavigator';

export default function App() {
  const [authView, setAuthView ] = useState(true)
  if(authView){
    return (
      <RestrictRouteNavigator/>
    )
  }
  return (
      <RouteNavigator/>
  );
}