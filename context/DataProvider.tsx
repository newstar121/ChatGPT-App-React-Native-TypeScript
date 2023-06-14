import React, { useState,createContext } from 'react';

import { MessageType } from '../types/types';
import { SELECTED_TYPE } from '../constants/constants';

export const DataContext = createContext({});

interface Props {
    children: React.ReactNode;
}

export const DataProvider = ({ children }: Props) => {

  const [textInput, setTextInput] = useState<MessageType>({} as MessageType);
  const [selected, setSelected] = useState<string>(SELECTED_TYPE.explorer)
  const [category, setCategory] = useState<object>([])
  
  return (
    <DataContext.Provider value={{ textInput, setTextInput, selected, setSelected, category, setCategory }}>
        {children}
    </DataContext.Provider>
  )
}