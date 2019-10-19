import React from 'react';

import styles from './Button.module.scss';

const Button = props => {
  return (
    <button
      className={[styles.Button, styles[props.theme]].join(' ')}
      type={props.type}
      onClick={props.onClick}
    >
      <span>{props.children}</span>
    </button>
  );
};

export default Button;

// import React, { useContext } from 'react';
// import styles from './Button.module.css';
// import ThemeContext from '../../../contexts/ThemeContext';

// const Button = props => {
//   const theme = useContext(ThemeContext);

//   return (
//     <button
//       className={[styles.Button, styles[theme]].join(' ')}
//       type={props.type}
//       onClick={props.onClick}
//     >
//       <span>{props.children}</span>
//     </button>
//   );
// };

// export default Button;
