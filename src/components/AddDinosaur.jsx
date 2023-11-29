export default function AddDinosaur() {
const handleFormSubmit = (e) => {
  e.preventDefault()
}

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="">
        Dinosaur Name:
        <input type="text" name="Name"  />
      </label>
      <label htmlFor="">
        Habitat:
        <input type="radio" name="Habitat"  />
      </label>
      <label htmlFor="">
        Diet:
        <input type="radio" name="Diet"  />
      </label>
      <button>Submit New Discovery</button>
    
    </form>
  )
}