# Charity Campaign Template (React + TypeScript + Tailwind v4)

This is a frontend template for the Charity Dashboard. It is built to be modular and easily connected to a backend API.

## 🛠 Tech Stack
- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (configured via Vite plugin)
- **Build Tool:** Vite

## 📂 Project Structure
- `src/types.ts`: TypeScript interfaces defining the `Charity` data model.
- `src/components/CharityCard.tsx`: The UI component for individual items. Handles "Time Ago" logic and dynamic progress circles.
- `src/components/CharityCarousel.tsx`: A scrollable container that manages layout and navigation arrows.
- `src/App.tsx`: The main entry point containing **Mock Data**.

## 🚀 How to Integrate (For Backend Devs)
1. **Data Connection:** - Open `src/App.tsx`.
   - Replace the `templateCharities` array with a fetch call to your API.
   - Ensure your API response matches the `Charity` interface in `src/types.ts`.

2. **Navigation:**
   - The `CharityCard` component accepts an optional `onNavigate` prop. Pass your router logic (e.g., `useNavigate`) into this prop to handle clicks.

3. **Dynamic Dates:**
   - The `uploadDate` field expects an ISO string (e.g., `"2026-02-02T10:00:00Z"`). The card automatically converts this to "X Days Ago".

## 📦 Setup & Run
```bash
npm install
npm run dev