//import { shallowMount } from "@vue/test-utils";
import { render } from "@testing-library/vue";
import Event from "../../../src/components/calendar/Event.vue";

test("Event", async () => {
  // render the component
  const { getRenderEvent } = render(Event, {
    props: { event: {}, isSelected: 0 },
    data() {
      return { hover: true };
    },
  });

  //expect(getRenderEvent.find(".error").exists()).toBe(false);
  //expect(getRenderEvent.isVueInstance()).toBeTruthy();
});
