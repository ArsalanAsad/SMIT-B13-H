// import HelloMessage from './components/HelloMessage'
// import Greeting from './components/Greeting';
// import UserCard from './components/UserCard';
// import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>My First React App!</h1>
//       <HelloMessage />
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Component Props Demo</h1>
//       <Greeting name="Alice" />
//       <Greeting name="Bob" />
//       <Greeting name="Charlie" />
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <UserCard 
//         name="John Doe" 
//         email="john@example.com" 
//         age={28} 
//       />
//       <UserCard
//         name="Jane Smith"
//         email="jane@email.com"
//         age={32}
//       />
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>My Component Demo</h1>
      
//       <Card>
//         <h2>First Card</h2>
//         <p>This is my first component!</p>
//       </Card>

//       <Card>
//         <h2>Second Card</h2>
//         <p>Component reusability is awesome!</p>
//       </Card>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <h1>Team Members</h1>
      
      <ProfileCard
        name="Alice Johnson"
        bio="Frontend developer with 5 years of experience in React. Passionate about creating beautiful user interfaces."
        imageUrl="https://via.placeholder.com/150"
      />
      
      <ProfileCard
        name="Bob Smith"
        bio="Full-stack developer specializing in JavaScript ecosystems. Loves solving complex problems with clean code."
        imageUrl="https://via.placeholder.com/150"
      />
      
      <ProfileCard
        name="Charlie Brown"
        bio="UI/UX designer turned React developer. Focused on creating seamless user experiences."
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default App;