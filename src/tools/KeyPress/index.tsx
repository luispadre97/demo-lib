import React, { useContext, useEffect } from "react";
import { KeyboardEventContext } from "./KeyboardEventProvider";
import Swal from "sweetalert2";

const KeyPress: React.FC = () => {
  // const { setCustomKeyboardActions,customActions } = useContext(KeyboardEventContext);

  // useEffect(() => {
  //   try {
  //     setCustomKeyboardActions([
  //       {
  //         ctrlKey: false,
  //         shiftKey: false,
  //         altKey: false,
  //         key: "a",
  //         method: () =>{}// Swal.fire("Hello World!")
  //       }
  //     ]);
  //   } catch (error) {
  //     console.error(error)
  //   }  
  // }, [0]);

  // console.log(customActions,'customActions')
  return (
    <>
      <h1>Press a to see "Hello World" alert</h1>
    </>
  );
};

export default KeyPress;