import React from 'react';
import { Button } from 'react-native';

//pages
import Home from './screens/Home';
import History from './screens/History';
import Save from './screens/Save';
import Profile from './screens/Profile';
import More from './screens/More';

const Routes = [
    { name: "Home", component: Home, },
    { name: "History", component: History, },
    { name: "Save", component: Save, },
    { name: "Profile", component: Profile, },
    { name: "More", component: More, },
]

export default Routes;