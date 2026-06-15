import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import LeaguePage from "./pages/LeaguePage";
import WorldCupPage from "./pages/WorldCupPage";
import BettingPage from "./pages/BettingPage";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/team/:slug"} component={({ params }) => <TeamPage slug={params.slug} />} />
      <Route path={"/league/:slug"} component={({ params }) => <LeaguePage slug={params.slug} />} />
      <Route path={"/worldcup/:slug"} component={({ params }) => <WorldCupPage slug={params.slug} />} />
      <Route path={"/bet/:slug"} component={({ params }) => <BettingPage slug={params.slug} />} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
