const NewTodo = () => {
  // event object type
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo test</label>
      <input type="text" id="text"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
