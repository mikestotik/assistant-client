import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks/useStore.hook.ts';


export const Assistant = observer(() => {
  const { accountStore } = useStore();

  return (
    <>{ accountStore.user.email }</>
  );
});