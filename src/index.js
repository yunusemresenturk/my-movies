import React from "react";
import * as ReactDOMClient from 'react-dom/client';

import App from "./components/app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);