import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "~/components/Header";
import "./app.css";
import Footer from "~/components/Footer";
import { MetaProvider, Title, Link } from "@solidjs/meta";

export default function App() {
    return (
        <Router
            root={(props) => (
                <MetaProvider>
                    <Title>Silphium Labs</Title>
                    <Link rel="icon" href="/favicon.ico" />
                    <Header />
                    <Suspense>{props.children}</Suspense>
                    <Footer />
                </ MetaProvider>
            )}
        >
            <FileRoutes />
        </Router>
    );
}
