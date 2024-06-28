import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Navigate, Outlet, useMatch } from 'react-router-dom';
import { RoutePaths } from '../../const/routes.const.ts';
import { useStore } from '../../hooks/useStore.hook.ts';
import { Loader } from '../shared/Loader.tsx';


export const Main = observer(() => {
  const { accountStore, assistantStore } = useStore();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    Promise.all([
      accountStore.load(),
      assistantStore.load()
    ])
      .then(() => setLoading(false));
  }, [ accountStore, assistantStore ]);


  if (useMatch(RoutePaths.MAIN)) {
    return <Navigate to={ RoutePaths.ASSISTANT_CHAT }/>;
  }

  return (
    loading ? <Loader/> : <Outlet/>
  );
});