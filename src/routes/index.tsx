import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const time = new Date();
  const seconds = (time.getTime() % (1000 * 60)) / 1000;
  return (
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl text-center font-bold mb-8">Jahresuhr</h1>
      <div class="flex justify-center w-full">
        <div style={{ transform: `rotate(${seconds * 6}deg)` }}>
          <div
            class="h-96 w-96 animate-spin border-4 rounded-full flex justify-center"
            style={{ animationDuration: "60s" }}
          >
            <div class="bg-black w-2 h-48"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jahresuhr",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
