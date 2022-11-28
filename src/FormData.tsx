import React, { useState } from 'react';

const FormData = React.createContext([{}, () => {}]);

const FormDataProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [state, setState] = useState({});
  return (
    <FormData.Provider value={[state, setState]}>
      {props.children}
    </FormData.Provider>
  );
}

export { FormData as FormDataContext, FormDataProvider };