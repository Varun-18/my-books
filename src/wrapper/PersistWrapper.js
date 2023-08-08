import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "src/store";

const PersistWrapper = ({ children }) => {
  if (typeof window !== undefined) {
    return (
      <PersistGate loading={null} persistor={persistor}>
        {() => children}
      </PersistGate>
    );
  } else {
    return { children };
  }
};

export default PersistWrapper;
