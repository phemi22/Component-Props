import Card from "./Card.jsx"

function App() {

  return(
    <>
      <Card
        titleText = "Card Title"
        descriptionText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo soluta doloribus et eum ut ullam delectus."
      />

      <Card 
        // titleText = "New Card Title Text"
        // descriptionText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta qui vero voluptates beatae sint esse. Tenetur, officia. Commodi illo doloremque adipisci? Eveniet rem repellendus autem necessitatibus accusantium?"
      />

      <Card 
        titleText = {205678652}
        descriptionText = "This is for a number titled Text."
      />
    </>
  )
}

export default App


