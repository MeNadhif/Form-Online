import { DateFieldFormElement } from "./fields/DateField";
import { NumberFieldFormElement } from "./fields/NumberField";
import { ParagraphFieldFormElement } from "./fields/ParagraphField";
import { SelectFieldFormElement } from "./fields/SelectField";
import { SeparatorFieldFormElement } from "./fields/SeparatorField";
import { SpacerFieldFormElement } from "./fields/SpacerField";
import { SubtitleFieldFormElement } from "./fields/SubTitleField";
import { TextAreaFormElement } from "./fields/TextAreaField";
import { TextFieldFormElement } from "./fields/TextField";
import { TitleFieldFormElement } from "./fields/TitleField";

export type ElementsType =
   | "TextField"
   | "TitleField"
   | "SubTitleField"
   | "ParagraphField"
   | "SeparatorField"
   | "SpacerField"
   | "NumberField"
   | "TextAreaField"
   | "DateField"
   | "SelectField";

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
   type: ElementsType;

   construct: (id: string) => FormElementInstance;

   designerBtnElement: {
      icon: React.ElementType;
      label: string;
   };

   designerComponent: React.FC<{ elementInstance: FormElementInstance }>;
   formComponent: React.FC<{
      elementInstance: FormElementInstance;
      submitValue?: SubmitFunction;
      isInvalid?: boolean;
      defaultValue?: string;
   }>;
   propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>;

   validate: (
      FormElement: FormElementInstance,
      currentValue: string
   ) => boolean;
};

export type FormElementInstance = {
   id: string;
   type: ElementsType;
   extraAttributes?: Record<string, any>;
};

type FormElementsType = {
   [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
   TextField: TextFieldFormElement,
   TitleField: TitleFieldFormElement,
   SubTitleField: SubtitleFieldFormElement,
   ParagraphField: ParagraphFieldFormElement,
   SeparatorField: SeparatorFieldFormElement,
   SpacerField: SpacerFieldFormElement,
   NumberField: NumberFieldFormElement,
   TextAreaField: TextAreaFormElement,
   DateField: DateFieldFormElement,
   SelectField: SelectFieldFormElement,
};
