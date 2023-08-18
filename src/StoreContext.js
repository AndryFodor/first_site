import React from "react";

// Тут створюємо контекст, який буде доступний всім нащадкам компоненти, яку ми обернемо в тег <StoreContext.Provider><StoreContext.Provider/>
const StoreContext = React.createContext(null);

export default StoreContext;