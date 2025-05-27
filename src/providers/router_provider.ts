import { Provider } from "ftuttes";
import { Router } from "transitus";

export const routerProvider = Provider.createProvider(() => {
    return new Router("/");
});
