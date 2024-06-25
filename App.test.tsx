import React from "react";
import { render } from "@testing-library/react-native";
import Greeting from "./Greeting";
import AgeDisplay from "./AgeDisplay";

describe("<Greeting />", () => {
  it("renderiza a saudação com o nome correto", () => {
    const { getByText } = render(<Greeting name="Alice" />);
    expect(getByText("Olá, Alice!")).toBeTruthy();
  });
});

describe("<AgeDisplay />", () => {
  it("exibe a idade corretamente", () => {
    const { getByText } = render(<AgeDisplay age={22} />);
    expect(getByText("Você tem 22 anos de idade.")).toBeTruthy();
  });
});
