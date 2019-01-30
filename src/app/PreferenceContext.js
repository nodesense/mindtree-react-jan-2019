// PreferenceContext.js
import React from 'react';

const PreferenceContext = React.createContext({
    lang: 'de',
    theme: 'dark'
})

export default PreferenceContext;