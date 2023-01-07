import { render, screen, fireEvent } from "@testing-library/react"

import Button, { ButtonProps, ButtonSize, ButtonType } from "./button"
import "@testing-library/jest-dom/extend-expect"
import { describe, it, vi, vitest } from "vitest"

const defaultProps = {
	onClick: () => vitest.fn(),
}

const testProps: ButtonProps = {
	btnType: ButtonType.Primary,
	size: ButtonSize.Large,
	className: "lass",
}

const disabledProps: ButtonProps = {
	disabled: true,
	onClick: vitest.fn(),
}

describe("test Button Component", () => {
	it("should render the correct default button", () => {
		const onClick = vi.spyOn(defaultProps, "onClick")

		render(<Button {...defaultProps}>Nice</Button>)
		const element = screen.getByText("Nice") as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual("BUTTON")
		expect(element).toHaveClass("btn btn-default")
		expect(element.disabled).toBeFalsy()
		fireEvent.click(element)
		expect(onClick).toHaveBeenCalled()
	})
	it("should render the correct component based on different props", () => {
		render(<Button {...testProps}>Nice</Button>)
		const element = screen.getByText("Nice")
		expect(element).toBeInTheDocument()
		expect(element).toHaveClass("btn-primary btn-lg lass")
	})
	it("should render a link when btnType equals link and href is provided", () => {
		render(
			<Button btnType={ButtonType.Link} href="http://google.com">
				Link
			</Button>,
		)
		const element = screen.getByText("Link")
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual("A")
		expect(element).toHaveClass("btn btn-link")
	})
	it("should render disabled button when disabled set to true", () => {
		const onClick = vi.spyOn(defaultProps, "onClick")

		render(<Button {...disabledProps}>Nice</Button>)
		const element = screen.getByText("Nice") as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.disabled).toBeTruthy()
		fireEvent.click(element)
		expect(onClick).not.toHaveBeenCalled()
	})
})
