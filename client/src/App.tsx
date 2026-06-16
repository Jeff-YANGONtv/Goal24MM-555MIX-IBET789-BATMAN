import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <Switch>
      <Route path={"/"} component={() => (
            <>
              <Helmet>
                <title>Goal24MM | Elite Gaming Experience</title>
                <meta name="description" content="Access the best platforms including 555MIX, IBET789, and BATMAN, all in one place. Fast, secure, and ready for you." />
                <meta name="keywords" content="Goal24MM, 555MIX, IBET789, BATMAN, gaming, betting, online games" />
                <link rel="canonical" href="https://goal24mm-555mix-ibet-batman.vercel.app/" />
                <meta property="og:title" content="Goal24MM | Elite Gaming Experience" />
                <meta property="og:description" content="Access the best platforms including 555MIX, IBET789, and BATMAN, all in one place. Fast, secure, and ready for you." />
                <meta property="og:image" content="https://goal24mm-555mix-ibet-batman.vercel.app/og-image.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://goal24mm-555mix-ibet-batman.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Goal24MM | Elite Gaming Experience" />
                <meta name="twitter:description" content="Access the best platforms including 555MIX, IBET789, and BATMAN, all in one place. Fast, secure, and ready for you." />
                <meta name="twitter:image" content="https://goal24mm-555mix-ibet-batman.vercel.app/og-image.jpg" />
              </Helmet>
              <Home />
            </>
          )} />
      <Route path={"/team/:slug"} component={({ params }) => <TeamPage slug={params.slug} />} />
      <Route path={"/league/:slug"} component={({ params }) => <LeaguePage slug={params.slug} />} />
      <Route path={"/worldcup/:slug"} component={({ params }) => <WorldCupPage slug={params.slug} />} />
      <Route path={"/bet/:slug"} component={({ params }) => <BettingPage slug={params.slug} />} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </HelmetProvider>
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
