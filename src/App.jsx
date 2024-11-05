// App.jsx
import { AppProvider } from "./components/UseContext/AppContext";
import { Header } from "./components/UseContext/Header";
import { NotificationCenter } from "./components/UseContext/NotificationCenter";
import { ThemeSettings } from "./components/UseContext/ThemeSettings";
import { UserPreferences } from "./components/UseContext/UserPreferences";
import { UserProfile } from "./components/UseContext/UserProfile";

export function App() {
  return (
    <AppProvider>
      <div>
        <Header />
        <main>
          <UserProfile />
          <NotificationCenter />
          <ThemeSettings />
          <UserPreferences />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
