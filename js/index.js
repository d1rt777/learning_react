// ReactDOM.render(<h1>penis</h1>, document.getElementById('app'))

const inputEnter = () => console.log('input enter');
const mouseOver = () => console.log('mouse over');

const inp = <input placeholder="help text" onClick={inputEnter} onMouseEnter = {mouseOver} />
const app = document.getElementById('app')

ReactDOM.render(inp, app, )