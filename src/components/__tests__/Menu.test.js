import { Provider } from "react-redux";
import Header from "../Header.js";
import { StaticRouter } from "react-router-dom/server.js";
import { MENU_DATA } from "../../mocks/data.js";
import "@testing-library/jest-dom";
import {render,waitFor,fireEvent} from "@testing-library/react";
import store from "../../utils/store.js";
import RestaurantMenu from "../RestuarantMenu.js";


global.fetch = jest.fn(()=>{ 
    return Promise.resolve({
        json : () => { 
            return Promise.resolve(MENU_DATA);
        },
    });
});


test("Add items to cart", async()=>{
    const body = render(
    <StaticRouter>
        <Provider store={store}>
            <Header/>
            <RestaurantMenu/>
        </Provider>
    </StaticRouter>
);

await waitFor(() => expect(body.getByTestId("menu")));

const addBtn = body.getAllByTestId("addBtn");

fireEvent.click(addBtn[0]);

const cart = body.getByTestId("cart");

expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart- 1 items</a>");

})

 
