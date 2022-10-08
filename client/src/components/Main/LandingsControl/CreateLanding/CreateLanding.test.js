import React from "react";
import { shallow } from "enzyme";
import CreateLanding from "./CreateLanding";

describe("CreateLanding", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateLanding />);
    expect(wrapper).toMatchSnapshot();
  });
});
