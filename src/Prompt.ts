//Types
import ApplicationNotFound from "./promptTypes/applicationNotFound";
import NoAppForFiletype from "./promptTypes/noAppForFiletype";
import SelectAppPrompt from "./promptTypes/selectApp";

class Prompt {
  public static applicationNotFound = ApplicationNotFound;
  public static noAppForFiletype = NoAppForFiletype;
  public static selectApplicationPrompt = SelectAppPrompt;
}

export default Prompt;
