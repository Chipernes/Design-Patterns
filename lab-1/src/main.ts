import './style.css'
import App from "./pages/app";

const app = new App();
app.run();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`;

