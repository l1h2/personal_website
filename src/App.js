import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjYUW4YI90Fp4xeDQa-mMvy05RdnuGnsw",
  authDomain: "personal-website-13870.firebaseapp.com",
  projectId: "personal-website-13870",
  storageBucket: "personal-website-13870.appspot.com",
  messagingSenderId: "131401058975",
  appId: "1:131401058975:web:b4a5ac9d773e40c0c530aa",
  measurementId: "G-1QBH3RM209"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <section>
        <Home />
      </section>
    </div>
  );
}

function Home() {
  return (
    <button>PRESS ME</button>
  )
}

export default App;
