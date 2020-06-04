import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';





const tasks = [

  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
// this is a constructor
class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      input: ''
    };
  }
  // prop that adds new task names
  addTask = newTaskName => {
    const newTask = {
      task: newTaskName,
      id: Date.now(),
      completed: false
    };
    //sets the state for new tasks
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };
// handles the target event
  handleChange = event => {
    this.setState({ input: event.target.value });
  };
// this submits the the added task
  handleSubmit = event => {
    event.preventDefault();
    this.addTask(this.state.input);
    this.setState({ input: '' });
    console.log(tasks)
  };
// toggles the task as completed 
  toggleCompleted = taskId => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed
      }
      return task
    });
// a state with 2 parameters in it or props
    this.setState({ tasks, task: '' })
  };
// removes an event returns to a previous state
  removeCompleted = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(task => {
          return !task.completed;
        })
      };
    })
  };
  // renders everything, all the components and props
  render() {
    return (
      <div className='app'>
        <h2 className='title'>Welcome to your Todo App!</h2>
        <div className="outline-offset">
          <TodoForm
            input={this.state.input}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            removeCompleted={this.removeCompleted}
          />
          <TodoList toggleCompleted={this.toggleCompleted} tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
};

export default App;
