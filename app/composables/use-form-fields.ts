import { toTypedSchema } from "@vee-validate/zod";
import { useForm, useField } from "vee-validate";
import type { FormOptions, FieldContext } from "vee-validate";
import type { ZodRawShape, ZodObject, z } from "zod";

export type ExtendedField<T> = FieldContext<T>;

export default function useFormFields<TSchema extends ZodObject<ZodRawShape>>(
  schema: TSchema,
  defaultValues?: FormOptions<z.infer<TSchema>>["initialValues"]
) {
  type SchemaType = z.infer<TSchema>;

  const form = useForm<SchemaType>({
    validationSchema: toTypedSchema(schema),
    initialValues: defaultValues,
  });

  const createFields = <K extends keyof SchemaType>(
    keys: K[]
  ): { [P in K]: ExtendedField<SchemaType[P]> } => {
    return keys.reduce((acc, key) => {
      const field = useField<SchemaType[K]>(key as string);
      acc[key] = field;
      return acc;
    }, {} as { [P in K]: ExtendedField<SchemaType[P]> });
  };

  const fieldKeys = Object.keys(schema.shape) as Array<keyof SchemaType>;
  const fields = createFields(fieldKeys);

  return {
    form,
    fields,
  };
}
