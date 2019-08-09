import { useState, useCallback } from 'react';

export const useToggleState = initialState => {
  const [state, updateState] = useState(initialState);
  const toggleState = useCallback(newState => {
    updateState(prevState =>
      typeof newState === 'boolean' ? newState : !prevState
    );
  });

  return [state, toggleState];
};
