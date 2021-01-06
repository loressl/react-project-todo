import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton'

const TodoForm =(props) => {

    const keyHandler = (e) =>{
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className="todoForm">
            <Grid cols='12 9 10' >
                <input id="description" type="text" className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                ></input>
            </Grid>
            <Grid cols='12 3 2'>
                {/* eslint-disable-next-line */}
                <IconButton style="primary" icon="plus"
                    onClick={props.handleAdd}
                ></IconButton>
                {/* eslint-disable-next-line */}
                <IconButton style="info" icon="search"
                    onClick={props.handleSearch}
                ></IconButton>
                {/* eslint-disable-next-line */}
                <IconButton style="default" icon="close"
                    onClick={props.handleClear}
                ></IconButton>
            </Grid>
        </div>
    )
}

export default TodoForm;