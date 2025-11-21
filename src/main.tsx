import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import App from "./App.tsx"

dayjs.extend(timezone)
dayjs.extend(utc)

const root = document.getElementById("root")

if (!root) throw new Error("Failed to find the root element")

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
)
