import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <iframe
                style={{
                    height: "100%",
                    position: "absolute",
                    left: "0px",
                    width: "100%",
                    overflow: "hidden",
                }}
                src="https://docs.google.com/document/d/e/2PACX-1vRlvq9bwB5F9T2vEmEjIYaOtzR2XITLBWVF_HWj4UuhBr1haYXHMV3qI_Rl45rT-_aitqZsj2rzAVcr/pub?embedded=true"
            ></iframe>
        </div>
    );
}

export default App;

// n = 365;
// f = [0];
// fit = [1, 1, 1, 1, 2, 2, 2, 3];
// fp = 1;
// fi = 1;
// while (fi <= n) {
//     f.push(fi);
//     temp = fi;
//     fi = fp + fi;
//     fp = temp;
// }
// var c = 0,
//     total = 0;
// var l = Array(n)
//     .fill(null)
//     .map(() => []);
// for (i = 0; i < l.length; i += fit[c]) {
//     total++;
//     for (j of f) {
//         if (i + j < n) {
//             if (l[i + j].length > 8) {
//                 l[i + j].pop();
//             }
//             l[i + j].push(i);
//         }
//     }
//     if (c == 7) {
//         c = 0;
//     } else {
//         c++;
//     }
// }
// console.log({ l: l, r: n / total });
