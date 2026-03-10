import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { actions as cardListActions } from './slice/cardlistSlice';

const rootActions = {
  ...cardListActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
