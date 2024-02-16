import { useStore } from 'react-redux';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';

export default function useReducerManager(name: StateSchemaKey, reducer: Reducer) {
    const store = useStore();
    const dispatch = useAppDispatch();

    useEffect(() => {
        // @ts-ignore
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT state ${name}` });

        return () => {
            // @ts-ignore
            store.reducerManager.remove(name);
            dispatch({ type: `@DESTROY state ${name}` });
        };

    // eslint-disable-next-line
    }, []);
}
