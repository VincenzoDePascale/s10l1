import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'

function App() {
  return (
    <Container>
      <MyNav />
      <MyJumbotron />
      {/* <AllTheBooks /> */}
      <BookList books={fantasy} />
      <MyFooter />
    </Container>
  )
}

export default App
