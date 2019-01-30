// PreferenceContext.js
import React from 'react';

const PreferenceContext = React.createContext({
    lang: 'en',
    theme: 'light'
})

export default PreferenceContext;