import React from 'react';
import { Props } from './interface';


const Icon: React.FC<Props> = (props) => {
  const { type  = 'circle' } = props;
  return <div className="lm-icon" style={{borderRadius:type ==='circle'? '50%':'0'}}>Icon</div>;
};

export default Icon;
