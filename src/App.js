import React from 'react';


class App extends React.Component {
  render() {
   return ( <div className="App">
      <ul>
        {this.props.todoList.map( (todo) => 
          (
            <li>
              <span>{todo.title}</span>
              <input type="checkbox" checked={todo.done}></input>
           </li>
          )
        )    
        }
      </ul>
    </div>
  )
  }
}

const mapStateToProps = state => {
  todos = state.todos
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps) (App);
