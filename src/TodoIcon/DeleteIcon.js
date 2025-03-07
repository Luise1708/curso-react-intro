import React from 'react';
import { TodoIcon } from './index.js';

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon
          type="delete"
          colors="gray"
          onClick={onDelete}
        />
    );
}

export { DeleteIcon };