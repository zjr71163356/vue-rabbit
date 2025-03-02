import { useIntersectionObserver } from "@vueuse/core";
import type { App, DirectiveBinding, Plugin } from "vue";

const lazyPlugin: Plugin = {
  install(app: App) {
    app.directive("lazy-img", {
      mounted(el: HTMLImageElement, binding: DirectiveBinding) {
        const src = binding.value;

        // Store original src
        el.setAttribute("data-src", src);

        // Set placeholder or loading image
        el.setAttribute(
          "src",
          binding.arg ||
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );

        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // Load the image when it enters viewport
            const dataSrc = el.getAttribute("data-src");
            el.setAttribute("src", dataSrc || src);
            stop();
          }
        });
      },
    });
  },
};
export default lazyPlugin;
