import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomepageTendai } from "./screens/HomepageTendai";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomepageTendai />);
