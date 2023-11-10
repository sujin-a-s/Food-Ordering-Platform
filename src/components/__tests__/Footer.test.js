import Footer from "../Footer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("loading footer",()=>{

    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Footer/>
            </Provider>
        </StaticRouter>
    );

   
    const footerStatus =header.getByTestId("footer");

    expect(footerStatus.innerHTML).toBe("Footer");


}); 