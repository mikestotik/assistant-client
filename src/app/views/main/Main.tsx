import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useStore } from '../../hooks/useStore.hook.ts';
import { Loader } from '../shared/Loader.tsx';


export const Main = observer(() => {
  const { accountStore } = useStore();
  const [ loading, setLoading ] = useState(true);


  const loadData = async () => {
    await accountStore.load();
  };

  useEffect(() => {
    loadData().then(() => setLoading(false));
  }, []);


  return (
    loading ? <Loader/> : <Outlet/>
  );
});