import React from 'react';
import { TodoIcon } from './index.js';

function CompleteIcon( {completed, onComplete} ) {
    return (
        <TodoIcon
          type="check"
          colors={completed ? 'green' : 'gray'}
          onClick={onComplete}
        />
    );
}

export{ CompleteIcon };