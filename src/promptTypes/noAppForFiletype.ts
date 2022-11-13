import { CreateElementFromString } from "@thijmenos/graphics";
import BasePrompt from "../basePrompt";

class NoAppForFiletype extends BasePrompt {
  constructor() {
    super();

    this.SetHeader("File type not supported");
    const errorMessageHTML = CreateElementFromString<HTMLSpanElement>(
      "<p>There is no application found that supports this file type!</p>"
    );

    this.SetBody(errorMessageHTML);

    this.Render();
    this.InitMovement();
    this.AllowPromptToBeClosed();
  }
}

export default NoAppForFiletype;
