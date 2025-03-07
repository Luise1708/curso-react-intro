import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      return localStorageItem ? JSON.parse(localStorageItem) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

    //estados de carga y error
    const [loading, setLoading]  = React.useState(true);
    const [error, setError]  = React.useState(false);

  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            setItem(initialValue); // 🔹 Asignar directamente
          } else {
            setItem(JSON.parse(localStorageItem)); // 🔹 Asignar directamente
          }
    
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
          console.error("Error accessing localStorage:", error);
        }
      }, 1000);
    }, [initialValue, itemName]);
  
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

export { useLocalStorage };

//localStorage.removeItem('Todos_v1'); 

//const defaultTodos = [
  //{ text: 'cortar cebolla', completed: true },
  //{ text: 'tomar los cursos', completed: false },
  //{ text: 'dormir 10 horas', completed: false },
  //{ text: 'volar una escoba', completed: false },
  //];


//localStorage.setItem('Todos_v1', JSON.stringify(defaultTodos));