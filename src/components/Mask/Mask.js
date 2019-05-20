// React
import React from "react";

// External Libs
import MaskedInput from "react-text-mask";

export const Mask = ({ inputRef, ...props }) => (
    <MaskedInput
      {...props}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
          mask={props.mask}
          placeholderChar={'\u2000'}
    />
  );