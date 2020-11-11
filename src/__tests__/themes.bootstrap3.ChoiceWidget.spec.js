import expect from "expect";
import React from "react";
import Liform from "../";
import { FormFrame } from "./test-utils";
import { shallow, mount, render } from "enzyme";

describe("ChoiceWidget", () => {
  it("should render a form with a select", () => {
    const schema = {
      title: "A schema",
      properties: {
        choice: {
          type: "string",
          enum: ["foo", "bar"]
        }
      }
    };

    const Component = (
      <FormFrame>
        <Liform schema={schema} />
      </FormFrame>
    );

    const wrapper = render(Component);
    expect(wrapper.find("select").length).toEqual(1);
    expect(wrapper.find("option").length).toEqual(3);
  });

  it("required attr renders required field", () => {
    const schema = {
      title: "A schema",
      properties: {
        choice: {
          type: "string",
          enum: ["foo", "bar"]
        }
      },
      required: ["choice"]
    };

    const Component = (
      <FormFrame>
        <Liform schema={schema} />
      </FormFrame>
    );

    const wrapper = render(Component);
    expect(wrapper.find("select").length).toEqual(1);
    expect(wrapper.find("option").length).toEqual(3);
    expect(wrapper.find("select").prop('required')).toEqual(true);
  });

  it("default=false renders no extra field", () => {
    const schema = {
      title: "A schema",
      properties: {
        choice: {
          default: false,
          type: "string",
          enum: ["foo", "bar"]
        }
      }
    };

    const Component = (
      <FormFrame>
        <Liform schema={schema} />
      </FormFrame>
    );

    const wrapper = render(Component);
    expect(wrapper.find("select").length).toEqual(1);
    expect(wrapper.find("option").length).toEqual(2);
  });
});
