import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import useHttp from '../../hooks/useHttp';

export default function Complete(props) {
    const { update } = useHttp()
  const [checked, setChecked] = React.useState(props.todo.complete );
  const handleChange = (event) => {
    setChecked(event.target.checked);
    update('todos', { _id: props.todo._id, complete:!props.todo.complete, title:props.todo.title ,tags:props.todo.tags}, props.refetch)
  };
 

  return (
    <>
   <h4><Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />complete  </h4>
    
    </>
  );
}


