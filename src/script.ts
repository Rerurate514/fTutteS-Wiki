import { assembleView, ProviderObserver, Text, View } from "ftuttes";
import { AppRouter } from "transitus";
import { HomePage } from "./pages/home_page";

const routes = new Map<string, View>();
routes.set("/", new HomePage());

new ProviderObserver().outLogs();

assembleView(
    new AppRouter({
        routes: routes,
        page404: new Text({text: "error"}),
        homePage: new HomePage(),
        startPageRoute: "/",
    })
)
