import React, { useState, useEffect } from 'react';
import '../../css/todo.css';

import TodoForm from './TodoForm';
import DisplayTodo from './DisplayTodo';
import TodoList from './TodoList';

import {
    Container,
    Row,
    Col 
} from 'react-bootstrap'

export default function TodoPortal() {
    //set States
    const [todoFormString, setTodoFormString] = useState('');
    const [todoArray, setTodoArray] = useState([]);
    const [displayTodo, setDisplayTodo] = useState({});
    const [completedArray, setCompletedArray] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, []);
    
    
    useEffect(() => {
        saveLocalTodos();
    }, [todoArray]);


    //save to local
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todoArray))
    };

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodoArray(todoLocal);
        }
    };

    return (
        <Container className = "todoBox2">
            <Row>
                <TodoForm 
                    setTodoArray={setTodoArray} 
                    setTodoFormString={setTodoFormString} 
                    todoArray={todoArray}
                    todoFormString={todoFormString}
                />
            </Row>
            <Row>
                <Col className="todoCol1">
                    <DisplayTodo displayTodo={displayTodo} setDisplayTodo={setDisplayTodo} completedArray={completedArray} setCompletedArray={setCompletedArray} />
                </Col>
                <Col className="todoCol2">
                    <TodoList 
                        todoArray={todoArray}
                        setTodoArray={setTodoArray}
                        setDisplayTodo={setDisplayTodo}
                        setCompletedArray={setCompletedArray}
                        completedArray={completedArray}
                        displayTodo={displayTodo}
                    />
                </Col>
            </Row>
        </Container>
    )
}