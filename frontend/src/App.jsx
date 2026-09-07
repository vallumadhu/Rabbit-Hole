import { Header } from './components/header'
import './App.css'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Post } from './pages/post'

function App() {
  return (
    <>
      <Header />
      <main>
        <Post postid="1" title=" Tech companies after AI " imageurl="https://preview.redd.it/tech-companies-after-ai-v0-0p31qhezxbnh1.jpeg?width=1080&crop=smart&auto=webp&s=b1b228e3f221eda41d57a6f5391378ae09d10226" content="This is the content of my first post." comments={[]} likecount={10} />
      </main>
    </>
  )
}

export default App