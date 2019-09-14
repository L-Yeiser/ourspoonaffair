import { useState, useCallback } from 'react';

export const useMergeState = initialState => {
  const [state, updateState] = useState(initialState);

  const mergeState = useCallback(cb => {
    let updates;
    updateState(prevState => {
      if (typeof cb === 'function') {
        updates = cb(prevState);
      } else if (typeof cb === 'object' && cb !== null) {
        updates = cb;
      } else {
        return prevState;
      }

      return Object.entries(updates).reduce(
        (memo, [key, value]) => {
          memo[key] = value;
          return memo;
        },
        {
          ...prevState,
        }
      );
    });
  });

  return [state, mergeState];
};
