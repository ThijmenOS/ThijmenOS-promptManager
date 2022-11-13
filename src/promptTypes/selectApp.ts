import {
  CreateElementFromString,
  GetElementByClass,
} from "@thijmenos/graphics";
import BasePrompt from "../basePrompt";

class SelectAppPrompt extends BasePrompt {
  constructor(content: Array<string>, handler: (a: string) => void) {
    super();

    this.SetHeader("No default app", "Select an app to open this file with");

    content.map((c) => {
      const constructedElement = CreateElementFromString<HTMLSpanElement>(
        `<span class="javascript-os-prompt-select-app-selectable-value-${c} javascript-os-prompt-option">${c}</span>`
      );
      this.SetBody(constructedElement);

      const appSelectionListElement = GetElementByClass<HTMLSpanElement>(
        this.promptBody,
        `javascript-os-prompt-select-app-selectable-value-${c}`
      );

      appSelectionListElement.onclick = () => {
        handler(c);
        this.Close();
      };
    });

    this.Render();
    this.AllowOutsideClickToClose();
    this.AllowPromptToBeClosed();
  }
}

export default SelectAppPrompt;
