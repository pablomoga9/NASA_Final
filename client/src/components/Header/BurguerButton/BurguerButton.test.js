import React from "react";
import { shallow } from "enzyme";
import BurguerButton from "./BurguerButton";

describe("BurguerButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BurguerButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
