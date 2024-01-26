function Page() {
  return (
    <main>
      <Person name="Diane" age="25" />
      <Person name="Zach" age="21" />
    </main>
  );
}

function Person({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age} years old</p>
    </div>
  );
}
