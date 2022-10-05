import React from "react";
import { shallow } from "enzyme";
import YoutubeEmbed from "./YoutubeEmbed";

describe("YoutubeEmbed", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<YoutubeEmbed />);
    expect(wrapper).toMatchSnapshot();
  });
});
