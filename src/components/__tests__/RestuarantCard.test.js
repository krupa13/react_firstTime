import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestuarentCard";
import MOCK_DATA from "../mocks/restuarantCardMock.json";
import "@testing-library/jest-dom";

test("should render RestuarentCard component with props data", () => {
    render(<RestaurentCard resData={MOCK_DATA} />);

    const name = screen.getByText("UBQ by Barbeque Nation");

    expect(name).toBeInTheDocument();
});

// test("should render RestuarentCard component with promoted label", () => {
//     render(<RestaurentCard />);
// });

