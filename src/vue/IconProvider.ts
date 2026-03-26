import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { provide } from 'vue';

import { IconRegistryKey } from './context';
import type { VueIconRegistry } from './types';

export const IconProvider = defineComponent({
  name: 'GeniusIconsProvider',
  props: {
    icons: {
      required: true,
      type: Object as PropType<VueIconRegistry>,
    },
  },
  setup(props, { slots }) {
    provide(IconRegistryKey, props.icons);

    return () => slots.default?.() ?? null;
  },
});
