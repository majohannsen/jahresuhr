import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Clock } from "~/components/clock";

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
        <Clock
          value={days}
          range={daysInMonth(time)}
          padding={0}
          duration={60 * 60 * 12 * daysInMonth(time)}
        />
        <Clock
          value={weekdays}
          range={7}
          padding={24}
          duration={60 * 60 * 12 * 7}
        />
        <Clock value={hours} range={12} padding={48} duration={60 * 60 * 12} />
        <Clock value={minutes} range={60} padding={72} duration={60 * 60} />
        <Clock value={seconds} range={60} padding={96} duration={60} />
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
