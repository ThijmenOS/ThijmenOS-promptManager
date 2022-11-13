import {
  AddElement,
  CreateElementFromString,
  GetElementByClass,
  InitMovement,
} from "@thijmenos/graphics";
import { GenerateUUID } from "@thijmenos/utils";
import { promptSelectors, prompt } from "./defaults";

class BasePrompt {
  protected promptElement!: HTMLElement;
  protected promptBody!: HTMLDivElement;
  protected promptIdentifier!: string;

  constructor() {
    this.promptElement = CreateElementFromString(prompt);
    this.promptIdentifier = GenerateUUID();
    this.promptElement.setAttribute("data-id", this.promptIdentifier);
  }

  protected Close(): void {
    this.promptElement.remove();

    window.removeEventListener("click", this.click);
  }

  protected SetHeader(headerContent: string, subHeaderContent?: string) {
    GetElementByClass<HTMLSpanElement>(
      this.promptElement,
      promptSelectors.promptHeader
    ).innerHTML = headerContent;

    if (subHeaderContent)
      GetElementByClass<HTMLSpanElement>(
        this.promptElement,
        promptSelectors.promptSubHeader
      ).innerHTML = subHeaderContent;
  }

  protected SetBody(content: HTMLElement): void {
    this.promptBody = GetElementByClass<HTMLDivElement>(
      this.promptElement,
      promptSelectors.promptBody
    );

    AddElement(content, this.promptBody);
  }

  protected Render(): void {
    AddElement(this.promptElement);
  }

  protected InitMovement() {
    InitMovement(this.promptIdentifier);
  }

  protected click = (ev: MouseEvent) => this.CloseByClickOutside(ev);

  protected AllowOutsideClickToClose() {
    window.addEventListener("click", this.click);
  }

  protected AllowPromptToBeClosed() {
    const closePrompt = GetElementByClass<HTMLDivElement>(
      this.promptElement,
      promptSelectors.closePrompt
    );

    closePrompt.addEventListener("click", () => this.Close());
  }

  protected CloseByClickOutside(ev: MouseEvent) {
    if (!ev.composedPath().includes(this.promptElement)) {
      this.Close();
    }
  }
}

export default BasePrompt;
