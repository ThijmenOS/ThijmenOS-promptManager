export const promptSelectors = {
  promptMessage: "javascript-os-prompt-message",
  closePrompt: "javascript-os-prompt-close",
  promptHeaderContainer: "javascript-os-prompt-header-container",
  promptHeader: "javascript-os-prompt-header",
  promptSubHeader: "javascript-os-prompt-sub-header",
  promptBody: "javascript-os-prompt-body",
  promptFooter: "javascript-os-prompt-footer",
};

export const prompt = `<div class="${promptSelectors.promptMessage}">
              <span>
                <div class="ball red ${promptSelectors.closePrompt}"></div>
              </span>
              <span class="${promptSelectors.promptHeaderContainer}">
              <h3 class="${promptSelectors.promptHeader}"></h3>
              <p class="${promptSelectors.promptSubHeader}"></p>
              </span>
              <div class="${promptSelectors.promptBody}"></div>
              <span class="${promptSelectors.promptFooter}"></span>
            </div>`;
