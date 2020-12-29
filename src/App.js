import logo from "./logo.svg";
import "./App.css";

// n = 365;
// f = [0, 1];
// fp = 1;
// fi = 1;
// while (fi <= n) {
//     f.push(fi);
//     temp = fi;
//     fi = fp + fi;
//     fp = temp;
// }
// var l = Array(n).fill(0);
// for (i = 0; i < l.length; ++i) {
//     for (j of f) {
//         if (i + j <= n) {
//             ++l[i + j];
//         }
//     }
// }

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
