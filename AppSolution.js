import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();
  console.log('Current location:', location);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function User() { return <h1>User</h1>; }
function NotFound() { return <h1>Not Found</h1>; }
export default App;