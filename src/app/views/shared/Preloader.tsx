import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';
import { Spin } from 'antd';
import cn from 'classnames';


interface PreloaderProps {
  size?: number;
  label?: string;
  inline?: boolean;
}


export const Preloader = ({ size, label, inline }: PreloaderProps) => {
  return (
    <div className={ cn('preloader', { inline }) }>
      <div className="preloader-spin">
        <Spin size="large" indicator={ <Icon path={ mdiLoading } size={ size ?? 1 } spin={ 1.25 }/> }/>
      </div>
      {
        label && <div className="preloader-label">{ label }</div>
      }
    </div>
  );
};
