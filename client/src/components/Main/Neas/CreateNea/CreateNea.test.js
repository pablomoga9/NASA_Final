import React from "react";
import { shallow } from "enzyme";
import CreateNea from "./CreateNea";

describe("CreateNea", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateNea />);
    expect(wrapper).toMatchSnapshot();
  });
});
