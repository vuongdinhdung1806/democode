function TodoForm({ text, setText, addTodo }) {
  return (
    <div className="todo-input">
      <span className="arrow">⌄</span>

      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={addTodo}
      />
    </div>
  );
}

export default TodoForm;
