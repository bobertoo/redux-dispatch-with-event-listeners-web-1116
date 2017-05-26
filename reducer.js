let state,
  button = document.getElementById('button'),
  container = document.getElementById('container');


function changeState(state = { count: 0 }, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

function render(){
  container.textContent = state.count;
}

button.addEventListener('click', function() {
  dispatch({ type: 'INCREASE_COUNT' });
});

dispatch({ type: '@@INIT' });
