import { createContext, useContext, useState } from 'react';
import { STOCK_SYMBOL_ENUM } from '../constatns/chart.constants';

export const SelectedSymbolContext = createContext<{
  selectedSymbol: STOCK_SYMBOL_ENUM;
  changeSymbolHandler: (newSymbol: STOCK_SYMBOL_ENUM) => void;
} | null>(null);

const SelectedSymbolContextProvider = (props: any) => {
  const [selectedSymbol, setSelectedSymbol] = useState<STOCK_SYMBOL_ENUM>(STOCK_SYMBOL_ENUM.es);

  const changeSymbolHandler = (newSymbol: STOCK_SYMBOL_ENUM) => {
    setSelectedSymbol(newSymbol);
  };

  const valuesForProvider = {
    selectedSymbol,
    changeSymbolHandler
  };

  return <SelectedSymbolContext.Provider value={valuesForProvider}>{props.children}</SelectedSymbolContext.Provider>;
};

export default SelectedSymbolContextProvider;

export const useSelectedSymbolContext = () => {
  const context = useContext(SelectedSymbolContext);

  // if (!context) throw new Error('useSelectedSymbolContext hook is not inside of SelectedSymbolContext');

  return context;
};
