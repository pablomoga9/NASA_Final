import React from "react";
import { shallow } from "enzyme";
import NeasControl from "./NeasControl";

describe("NeasControl", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NeasControl />);
    expect(wrapper).toMatchSnapshot();
  });
});
