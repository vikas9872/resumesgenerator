// import { Box, useRadio } from '@chakra-ui/react';
// import React from 'react';

// const ThemeOption = (props) => {
//   const { getInputProps, getCheckboxProps, getLabelProps } = useRadio(props);

//   const input = getInputProps();
//   const checkbox = getCheckboxProps ? getCheckboxProps() : {}; 
//   const label = getLabelProps();

//   return (
//     <Box as="label" {...label}>
//       <input {...input} />
//       <Box
//         {...checkbox}
//         cursor="pointer"
//         borderWidth="1px"
//         borderRadius="full"
//         boxShadow="sm"
//         bg={props.children}
//         _checked={{
//           borderColor: 'teal.600',
//         }}
//         p={5}
//       >
//         {props.children}
//       </Box>
//     </Box>
//   );
// };

// export default ThemeOption;


import { Box, useRadio } from "@chakra-ui/react";
import React from "react";

const ThemeOption = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const radio = getRadioProps();

  return (
    <Box as="label" cursor="pointer">
      <input {...input} />
      <Box
        {...radio}
        w="40px"
        h="40px"
        borderRadius="full"
        bg={props.value}
        border="2px solid"
        borderColor={props.isChecked ? "black" : "transparent"}
        _checked={{
          borderColor: "black",
          boxShadow: "outline",
        }}
        _focus={{
          boxShadow: "outline",
        }}
      />
    </Box>
  );
};

export default ThemeOption;
