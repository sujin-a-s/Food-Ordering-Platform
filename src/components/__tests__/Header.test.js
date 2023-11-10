import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("logo should load on rendering",()=>{
    //load header

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    //check if logo is loaded
    const logo =header.getAllByTestId("logo");

    expect(logo[0].src).toBe("http://localhost/dummy.png");


    //check if logo is loaded
});



test("online status should be green on rendering header",()=>{

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

   
    const onlineStatus =header.getByTestId("online-status");

    expect(onlineStatus.innerHTML).toBe("✔️");


});



test("cart should load on rendering header",()=>{

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

   
    const cartStatus =header.getByTestId("cart");

    expect(cartStatus.innerHTML).toBe("<a href=\"/cart\">Cart- 0 items</a>");


}); 

