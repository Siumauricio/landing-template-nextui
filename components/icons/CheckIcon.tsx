import React from 'react';
import {Svg} from '../styles/svg';

export const CheckIcon = () => {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         fill="green"
         viewBox="0 0 24 24"
      >
         <Svg.Path
            css={{
               fill: '$green600',
            }}
            d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
         ></Svg.Path>
      </Svg>
   );
};
