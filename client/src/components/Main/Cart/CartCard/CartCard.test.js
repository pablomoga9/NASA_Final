import React from "react";
import { shallow } from "enzyme";
import CartCard from "./CartCard";

describe("CartCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CartCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
