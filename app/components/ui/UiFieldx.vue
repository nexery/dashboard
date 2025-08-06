<template>
  <fieldset class="flex flex-col space-y-1">
    <slot :id="id" name="label" :field="field">
      <UiLabel :for="id">{{ label }}</UiLabel>
    </slot>
    <slot :id="id" name="input" :field="field">
      <UiInput :id="id" v-model="handleValueChange" class="bg-input" />
    </slot>
    <slot name="error" :errorMessage="field.errorMessage.value">
      <div v-if="field.errorMessage.value" class="text-red-500 text-sm">
        {{ field.errorMessage.value }}
      </div>
    </slot>
    <slot name="extra" :field="field" />
  </fieldset>
</template>

<script setup lang="ts" generic="T">
import type { FieldContext } from "vee-validate";

const props = defineProps<{
  id?: string;
  label?: string;
  field: FieldContext<T>;
}>();

const handleValueChange = (value: T) => {
  props.field.setValue(value);
};
</script>
