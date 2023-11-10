import { Provider } from "react-redux";
import Body from "../Body.js";
import { StaticRouter } from "react-router-dom/server.js";
import { RESTAURANT_DATA } from "../../mocks/data.js";
import "@testing-library/jest-dom";
import {render,waitFor,fireEvent} from "@testing-library/react";
import store from "../../utils/store.js";

global.fetch = jest.fn(()=>{ 
    return Promise.resolve({
        json : () => { 
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});


test("Shimmer should load on HomePage",()=>{
    const body = render(
    <StaticRouter>
        <Provider store={store}>
            <Body/>
        </Provider>
    </StaticRouter>
);

const shimmer = body.getByTestId("shimmer");
expect(shimmer.children.length).toBe(10);
console.log(shimmer)
});


test("Restaurants should load on HomePage",async()=>{
    const body = render(
    <StaticRouter>
        <Provider store={store}>
            <Body/>
        </Provider>
    </StaticRouter>
);

await waitFor(() => expect(body.getByTestId("search-btn")));
const reslist = body.getByTestId("res-list");
expect(reslist.children.length).toBe(9);
//console.log(shimmer)
})


test("search for food (string) load on HomePage",async()=>{
    const body = render(
    <StaticRouter>
        <Provider store={store}>
            <Body/>
        </Provider>
    </StaticRouter>
);

await waitFor(() => expect(body.getByTestId("search-btn")));

const input = body.getByTestId("search-input");

fireEvent.change(input,{
    target:{
        value:"Pizza",
    },
});

const searchBtn = body.getByTestId("search-btn")

fireEvent.click(searchBtn);
const reslist = body.getByTestId("res-list");
expect(reslist.children.length).toBe(2);

})