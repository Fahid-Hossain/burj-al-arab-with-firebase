import React, {createContext } from 'react';
import useFirebase from '../hooks/useFirebase/useFirebase';

//create context api 
export const HotelContext = createContext();

const AuthProvider = (props) => {
    const {children}=props;
    // value from useFirebase
    const allContext = useFirebase();
    return (
      <HotelContext.Provider value={allContext}>
          {children}
      </HotelContext.Provider>
    );
};

export default AuthProvider;