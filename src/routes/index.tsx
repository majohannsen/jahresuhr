import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

function daysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export default component$(() => {
  const time = new Date();
  const seconds = time.getSeconds() + time.getMilliseconds() / 1000;
  const minutes = time.getMinutes() + seconds / 60;
  const hours = time.getHours() + minutes / 60;
  const weekdays = time.getDay() - 1 + hours / 24; // Monday = 1 => 0
  const days = time.getDate() - 1 + hours / 24; // first day = 1 => 0

  return (
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl text-center font-bold mb-8">Jahresuhr</h1>
      <div class="mx-auto relative h-[500px] w-[500px] border">
        <div
          class="absolute inset-0 p-0 w-full h-full"
          style={{
            transform: `rotate(${(days * 360) / daysInMonth(time)}deg)`,
          }}
        >
          <div
            class="h-full w-full animate-spin border-4 bg-white rounded-full flex justify-center"
            style={{ animationDuration: "43200s" }}
          >
            <div class="bg-black w-0.5 h-1/2"></div>
          </div>
        </div>
        <div
          class="absolute inset-0 p-6 w-full h-full"
          style={{ transform: `rotate(${(weekdays * 360) / 7}deg)` }}
        >
          <div
            class="h-full w-full animate-spin border-4 bg-white rounded-full flex justify-center"
            style={{ animationDuration: "43200s" }}
          >
            <div class="bg-black w-0.5 h-1/2"></div>
          </div>
        </div>
        <div
          class="absolute inset-0 p-12 w-full h-full"
          style={{ transform: `rotate(${(hours * 360) / 12}deg)` }}
        >
          <div
            class="h-full w-full animate-spin border-4 bg-white rounded-full flex justify-center"
            style={{ animationDuration: "43200s" }}
          >
            <div class="bg-black w-0.5 h-1/2"></div>
          </div>
        </div>
        <div
          class="absolute inset-0 p-[72px] w-full h-full"
          style={{ transform: `rotate(${minutes * 6}deg)` }}
        >
          <div
            class="h-full w-full animate-spin border-4 bg-white rounded-full flex justify-center"
            style={{ animationDuration: "3600s" }}
          >
            <div class="bg-black w-0.5 h-1/2"></div>
          </div>
        </div>
        <div
          class="absolute inset-0 p-24 w-full h-full"
          style={{ transform: `rotate(${seconds * 6}deg)` }}
        >
          <div
            class="h-full w-full animate-spin border-4 bg-white rounded-full flex justify-center"
            style={{ animationDuration: "60s" }}
          >
            <div class="bg-black w-0.5 h-1/2"></div>
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
