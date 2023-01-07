import { CreateElementFromString } from "@thijmen-os/graphics";
import Prompt from "./prompt";
import { Permissions } from "@thijmen-os/common";
import {
  promptFooterActions,
  promptFooters,
  promptSelectors,
} from "../defaults";

class GrantPermission extends Prompt {
  promptCallback: (res: boolean) => any;

  constructor(
    permission: Permissions,
    applicationName: string,
    callback: (res: boolean) => any
  ) {
    super();

    this.promptCallback = callback;

    this.SetHeader("Permission request");
    const bodyMessageHtml = CreateElementFromString<HTMLSpanElement>(
      `<span><p>The following application asks to use ${Permissions[permission]}</p><br><p>${applicationName}</p><br><p>Do you want to allow this?</p></span>`
    );

    this.SetBody(bodyMessageHtml);
    this.SetFooter(promptFooters.allowDenyFooter);

    this.promptElement.addEventListener("click", this.onclick);

    this.Render();
    this.InitMovement();
    this.AllowPromptToBeClosed();
  }

  private onclick = (ev: Event) => this.Click(ev);
  private Click(ev: Event) {
    const target: HTMLDivElement = ev.target as HTMLDivElement;
    const hitButton: boolean = target.classList.contains(
      promptSelectors.promptButton
    );

    if (hitButton) {
      const action: promptFooterActions = target.getAttribute(
        "data-action"
      ) as promptFooterActions;

      if (action === promptFooterActions.Allow) this.promptCallback(true);
      else this.promptCallback(false);
    }
  }
}

export default GrantPermission;
