import { CreateElementFromString } from "@thijmen-os/graphics";
import Prompt from "./prompt";
import { PermissionRequestDto, Permissions } from "@thijmen-os/common";
import {
  promptFooterActions,
  promptFooters,
  promptSelectors,
} from "../defaults";

class GrantPermission extends Prompt {
  promptCallback: (
    res: boolean,
    applicationDetails?: PermissionRequestDto
  ) => any;

  props: PermissionRequestDto;

  constructor(
    permission: Permissions,
    applicationId: string,
    applicationName: string,
    callback: (res: boolean, applicationDetails?: PermissionRequestDto) => any
  ) {
    super();

    this.props = { applicationId: applicationId, permission: permission };
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

      if (action === promptFooterActions.Allow)
        this.promptCallback(true, this.props);
      else this.promptCallback(false);
    }
  }
}

export default GrantPermission;
