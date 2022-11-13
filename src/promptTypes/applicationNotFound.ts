import { CreateElementFromString } from "@thijmenos/graphics";
import BasePrompt from "../basePrompt";

class ApplicationNotFound extends BasePrompt {
  constructor() {
    super();

    this.SetHeader("Application not found");
    const errorMessageHTML = CreateElementFromString<HTMLSpanElement>(
      "<span>The application could not be found and there for not be executed!</span>"
    );

    this.SetBody(errorMessageHTML);

    this.Render();
    this.InitMovement();
    this.AllowPromptToBeClosed();
  }
}

export default ApplicationNotFound;
