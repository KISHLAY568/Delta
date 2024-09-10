function handleFormSubmit() {
  console.log("Form was submitted");
}
export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="write something" />
      <button>submit</button>
    </form>
  );
}
