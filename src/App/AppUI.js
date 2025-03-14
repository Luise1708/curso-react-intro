import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError'; 
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm/TodoForm';
import { Modal } from '../Modal/Modal';
import { TodoContext } from '../TodoContext/TodoContext';


function AppUI()  {
    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
          <TodoCounter/>
    
          <TodoSearch/>

              <TodoList>
              {loading && (
                <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading/>
                </>  
                )}
              {error && <TodosError/>}
              {(!loading &&  searchedTodos.length === 0) && <EmptyTodos />}
  
  
              {searchedTodos.map(todo => (
                <TodoItem  
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
              </TodoList>
   
         <CreateTodoButton
            setOpenModal={setOpenModal} 
          />
          {openModal && (
           <Modal>
             <TodoForm />
           </Modal>

          )}
        </React.Fragment>
      );
}

export { AppUI };