<script setup lang="ts">
import { toRefs } from 'vue'

interface CustomDropdownEmits {
  (event: 'select', value: string): void
}

interface CustomDropdownProps {
  items: Record<string, any>
  selected?: string
  itemTitle?: string
  itemValue?: string
}

const emit = defineEmits<CustomDropdownEmits>()

const props = withDefaults(defineProps<CustomDropdownProps>(), {
  itemTitle: 'title',
  itemValue: 'value'
})

const { items, selected } = toRefs(props)

const handleSelect = (value: string) => emit('select', value)
</script>

<template>
  <div class="relative group">
    <slot class="cursor-pointer"></slot>
    <ul
      v-if="items"
      class="rounded bg-secondary absolute z-10 shadow-2xl hidden w-max max-h-80 overflow-y-auto group-hover:block"
    >
      <li
        v-for="(item, index) in items"
        :key="`custom-dropdown-item-${index}`"
        class="cursor-pointer capitalize px-3 my-1 w-full hover:bg-quaternary hover:text-secondary"
        :class="selected === item[itemValue] && 'bg-quaternary text-secondary'"
        @click="handleSelect(item[itemValue])"
      >
        {{ item[itemTitle] }}
      </li>
    </ul>
  </div>
</template>
