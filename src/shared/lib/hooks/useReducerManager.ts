import { useStore } from 'react-redux';
import { useLayoutEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

export default function useReducerManager(
    reducerList: ReducersList,
    removeAfterUnmount = true,
) {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducerList).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducerList).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };

        // eslint-disable-next-line
    }, []);
}
